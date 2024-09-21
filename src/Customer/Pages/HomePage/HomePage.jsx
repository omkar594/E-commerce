import React from "react";
import MainCarousel from "../../Component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Mens_kurta";

const HomePage = () => {
  const Sections={
    0:"Men's",
    1:"Men's Shoes",
    2:"Women's",
    3:"Women's Dress",
    4:"Women's Saree",
  }
  return (
    <div className="flex flex-col items-center">
      {/* Main Carousel */}
      <MainCarousel />

      {/* Section Carousels */}
      <div className="space-y-10 py-10 lg:py-20 flex flex-col justify-center px-5 lg:px-10 w-full">
        {/* Using a map for repeated components */}
        {[...Array(5)].map((_, index) => (
          <div key={index} className="w-full max-w-7xl">
            <HomeSectionCarousel  Data={mens_kurta} Section={Sections[index]}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
