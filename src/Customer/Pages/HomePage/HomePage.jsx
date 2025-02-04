import React from "react";
import MainCarousel from "../../Component/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../Component/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurtas } from "../../../Data/Mens_kurtas";

const HomePage = () => {

  const Sections = {
    0: "Men's Clothing",
    1: "Men's Shoes",
    2: "Women's Clothing",
    3: "Women's Dresses",
    4: "Women's Sarees",
  };

  return (
    <div >
      {/* Main Carousel */}
      <MainCarousel/>
      

      {/* Sections */}
      <div>
        {[...Array(5)].map((_, index) => (
          <div key={index} >
            {/* Section Title */}
            <h2 >
              {Sections[index]}
            </h2>

            {/* Product Section */}
            <div>
              <HomeSectionCarousel Data={mens_kurtas} Section={Sections[index]} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
