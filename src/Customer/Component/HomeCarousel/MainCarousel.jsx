import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCarouselData } from "./MainCarouselData";

const MainCarousel = () => {
  const items = MainCarouselData.map((item) => (
    <div className="flex justify-center items-center w-auto h-auto sm:h-auto shadow-lg "> {/* Added padding */}
      <img 
        src={item.image} 
        className="w-full h-full object-cover cursor-pointer rounded-lg" 
        role="presentation" 
        alt={item.altText || "Carousel image"} 
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      controlsStrategy="alternate"
      disableButtonsControls
      autoPlay
      autoPlayInterval={1500}
      infinite
    />
  );
};

export default MainCarousel;
