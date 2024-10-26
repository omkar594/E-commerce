import React from "react";
import { Route, Router, Routes } from "react-router-dom";
import Navigation from "../Customer/Component/Navigation/Navigation";
import Footer from "../Customer/Component/Footer/Footer";
import HomePage from "../Customer/Pages/HomePage/HomePage";
import Product from "../Customer/Component/Product/Product";
import ProductDetails from "../Customer/Component/ProductDetails/ProductDetails";
import Cart from "../Customer/Component/Cart/Cart";
import CheckOut from '../Customer/Component/Checkout/CheckOut';
import { OrderDetails } from "../Customer/Component/Order/OrderDetails";
import Order  from "../Customer/Component/Order/Order.jsx";

const CustomerRouter = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="cart" element={<Cart/>}></Route>
        <Route
          path="/:category/:section/:item"
          element={<Product/>}
        ></Route>
        <Route path="/Product/:ProductId" element={<ProductDetails />}></Route>
        <Route path='checkout' element={<CheckOut/>}></Route>
        <Route path='order' element={<Order/>}></Route>
      </Routes>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default CustomerRouter;
