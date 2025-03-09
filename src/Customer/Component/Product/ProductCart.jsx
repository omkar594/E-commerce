import React from "react";
import { useNavigate } from "react-router-dom";
import "./productCart.css";

const ProductCart = ({ product }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/product/${product._id}`); // Ensure this matches your route in App.js or Router setup
  };

  return (
    <div
      className="product-card border p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition"
      onClick={handleClick}
    >
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <div className="mt-2">
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-gray-600">${product.price}</p>
        <button
          onClick={handleClick}
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
