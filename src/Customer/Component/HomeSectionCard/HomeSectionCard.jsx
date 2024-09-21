import React from "react";

function HomeSectionCard({props}) {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-2xl transition-transform transform hover:scale-105 overflow-hidden w-full sm:w-[15rem] mx-3">
      <div className="h-[13rem] w-full sm:w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={props.imageUrl}
          alt={props.brand}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-800">{props.brand}</h3>
        <p className="mt-2 text-sm text-gray-600">
          {props.title}
        </p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
