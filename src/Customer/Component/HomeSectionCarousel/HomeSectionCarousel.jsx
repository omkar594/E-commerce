import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = ({ Data, Section }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    0: { items: 1 },
    720: { items: 2 },
    1024: { items: 3 },
    1280: { items: 4 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slideTo(activeIndex - 1);
    }
  };

  const slideNext = () => {
    if (activeIndex < Data.length - 1) {
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideTo(activeIndex + 1);
    }
  };

  const items = Data.map((item, index) => (
    <HomeSectionCard props={item} key={index} />
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
          onSlideChanged={({ item }) => setActiveIndex(item)}
        />

        {/* Next Button */}
        {activeIndex < items.length - 1 && (
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            aria-label="Next"
            onClick={slideNext}
          >
            <ArrowLeftIcon style={{ transform: "rotate(180deg)" }} />
          </button>
        )}

        {/* Previous Button */}
        {activeIndex > 0 && (
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-all duration-300"
            aria-label="Previous"
            onClick={slidePrev}
          >
            <ArrowLeftIcon style={{ transform: "rotate(0deg)" }} />
          </button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
