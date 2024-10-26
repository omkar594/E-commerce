import React from "react";

function HomeSectionCard({ props }) {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-black rounded-lg shadow-lg transition-transform transform hover:scale-105 overflow-hidden w-full sm:w-[16rem] mx-3">
      
      {/* Image Section */}
      <div className="h-[14rem] w-full sm:w-[12rem]">
        <img
          className="object-cover object-top w-full h-full rounded-t-lg transition-all duration-300 hover:brightness-90"
          src={props.imageUrl}
          alt={props.brand}
        />
      </div>
      
      {/* Text Section */}
      <div className="p-4 bg-black w-full text-center">
        <h3 className="text-lg font-semibold text-gold tracking-wide">
          {props.brand}
        </h3>
        <p className="mt-2 text-sm text-gray-300 tracking-wide leading-relaxed">
          {props.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
