import { IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "@headlessui/react";
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";
const CartItems = ({items}) => {

  console.log("Items.....",items)

  const dispatch = useDispatch();
  const handleUpdateCartItem=(num)=>{
    const data = {data:{quantity:items.quantity+num},cartItemId:items?._id}
    dispatch(updateCartItem(data))
  }
  const handleRemovecartItem=()=>{
    console.log(items._id);
    dispatch(removeCartItem(items._id)) 
  }
  return (
    <div className="p-5 shadow-lg border rounded-md flex items-center">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover object-top"
          alt="Men Slim Mid Rise Black Jeans"
          src={items.product?.imageUrl}
        />
      </div>
      <div className="ml-5 space-y-1">
        <p className="font-semibold text-lg">{items.product?.title}</p>
        <p className="text-gray-600">Size: {items?.size}, {items.product?.color}</p>
        <p className="text-gray-600">Seller: {items.product?.brand}</p>
        <div className="flex items-center mt-4 space-x-5 text-lg lg:text-xl text-gray-900">
          <p className="font-semibold">₹{items?.discountedPrice}</p>
          <p className="text-gray-500 line-through">₹{items?.price}</p>
          <p className="text-green-600 font-semibold">{items.product?.discountedpercent}% off</p>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpdateCartItem(-1)} disabled={items?.quantity<=1} >
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{items?.quantity}</span>
            <IconButton onClick={()=>handleUpdateCartItem(1)} >
              <AddCircleOutlineIcon />
            </IconButton>
          
          <div>
            <Button className='p-2' onClick={()=>handleRemovecartItem()}>Remove</Button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CartItems;
