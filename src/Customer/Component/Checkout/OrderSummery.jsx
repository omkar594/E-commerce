import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItems from "../Cart/CartItems";
import { getOrderByID } from "../../../State/Order/Action";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { createPayment } from "../../../State/Payment/Action";

const OrderSummery = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { order } = useSelector((store) => store.order);
  const searchParams = new URLSearchParams(location.search);
  const orderId = searchParams.get("order_id");
  console.log("ordersummery...",order)
  useEffect(() => {
    dispatch(getOrderByID(orderId));
  }, [orderId]);


  const handleCheckout=()=>{
    console.log("orderId",orderId)
    dispatch(createPayment(orderId));
  }
  return (
    <>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard props={order?.shippingAddress}/>
      </div>
      <div>
        <div className="lg:grid grid-cols-3 lg:px-16 relative mt-4">
          <div className="col-span-2">
            {order?.orderItems.map((items) => (
              <CartItems items={items} />
            ))}
          </div>
          <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
            <div className="border">
              <p className="uppercase font-bold opacity-60 pb-4">
                Price details
              </p>
              <hr />
              <div className="space-y-3 font-semibold">
                <div className="flex justify-between pt-3  text-black">
                  <span>Price</span>
                  <span>₹{order?.totalPrice}</span>
                </div>
                <div className="flex justify-between pt-3  ">
                  <span>Discount</span>
                  <span className="text-green-600">-₹{order?.totalDiscount}</span>
                </div>
                <div className="flex justify-between pt-3  ">
                  <span>Delivery</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between pt-3   font-bold">
                  <span>Total Amount</span>
                  <span className="text-green-600">₹{order?.totalPrice}</span>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={()=>handleCheckout()}
            >
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummery;
