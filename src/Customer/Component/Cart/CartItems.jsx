import { IconButton } from "@mui/material";
import React from "react";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { Button } from "@headlessui/react";
const CartItems = () => {
  return (
    <div className="p-5 shadow-lg border rounded-md flex items-center">
      <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem] overflow-hidden rounded-md">
        <img
          className="w-full h-full object-cover"
          src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/s/p/a/l-kcsh-krt-103-mao-fubar-original-imag7fpesvngbwyy-bb.jpeg?q=70"
          alt="Men Slim Mid Rise Black Jeans"
        />
      </div>
      <div className="ml-5 space-y-1">
        <p className="font-semibold text-lg">Men Slim Mid Rise Black Jeans</p>
        <p className="text-gray-600">Size: L, White</p>
        <p className="text-gray-600">Seller: Crishtaliyo 2 Fashion</p>
        <div className="flex items-center mt-4 space-x-5 text-lg lg:text-xl text-gray-900">
          <p className="font-semibold">$199</p>
          <p className="text-gray-500 line-through">$211</p>
          <p className="text-green-600 font-semibold">5% off</p>
        </div>
        <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton>
            <RemoveCircleOutlineIcon />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">4</span>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
          
          <div>
            <Button className='p-2'>Remove</Button>
          </div>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default CartItems;
