import React from "react";
import { Link } from "react-router-dom";

const HomeSectionCard = ({ item }) => {
  if (!item) return <p className="text-center text-gray-400">Loading...</p>;

  return (
    <Link to={`/product/${item.id}`} className="w-full sm:w-[16rem] mx-3">
      <div className="cursor-pointer flex flex-col items-center bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden">
        
        {/* Image Section */}
        <div className="h-[14rem] w-full sm:w-[12rem]">
          <img
            className="object-cover object-top w-full h-full rounded-t-lg transition-all duration-300 hover:brightness-90"
            src={item.imageUrl || "https://via.placeholder.com/200"}
            alt={item.brand || "No Brand"}
          />
        </div>

        {/* Text Section */}
        <div className="p-4 bg-black w-full text-center">
          <h3 className="text-lg font-semibold text-yellow-400 tracking-wide">
            {item.brand || "Unknown Brand"}
          </h3>
          <p className="mt-2 text-sm text-gray-300 tracking-wide leading-relaxed">
            {item.title || "No Description Available"}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomeSectionCard;
