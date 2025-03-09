import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = ({ Data, Section }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  if (!Data || Data.length === 0) {
    return <p className="text-center text-gray-500">No products available</p>;
  }

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  const slidePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
    carouselRef.current?.slideTo(activeIndex - 1);
  };

  const slideNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, Data.length - 1));
    carouselRef.current?.slideTo(activeIndex + 1);
  };

  const items = Data.map((item) => (
    <div key={item.id}>
      <HomeSectionCard item={item} />
    </div>
  ));

  return (
    <div className="shadow-lg bg-white rounded-lg overflow-hidden">
      <div className="relative p-8">
        {/* Section Title */}
        <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-6 text-center">
          {Section}
        </h2>

        {/* Carousel */}
        <AliceCarousel
          mouseTracking
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          infinite
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={(e) => setActiveIndex(e.item)}
        />

        {/* Previous Button */}
        <button
          className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 ${
            activeIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous"
          onClick={slidePrev}
          disabled={activeIndex === 0}
        >
          <ArrowLeftIcon />
        </button>

        {/* Next Button */}
        <button
          className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300 ${
            activeIndex === Data.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Next"
          onClick={slideNext}
          disabled={activeIndex === Data.length - 1}
        >
          <ArrowLeftIcon style={{ transform: "rotate(180deg)" }} />
        </button>
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
