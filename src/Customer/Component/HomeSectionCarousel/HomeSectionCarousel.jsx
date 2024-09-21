import React, { useRef, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const HomeSectionCarousel = ({ Data, Section }) => {
  const carouselRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Start from the first item

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
      <div className="relative p-5">
        <h2 className="text-xl font-bold mb-4">{Section}</h2> {/* Updated class name for proper sizing */}
        <AliceCarousel
          mouseTracking
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          infinite
          disableDotsControls
          activeIndex={activeIndex}
          onSlideChanged={({ item }) => setActiveIndex(item)} // Update index when slide changes
        />

        {/* Show next button if not at the last item */}
        {activeIndex < items.length - 1 && (
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2  bg-black text-white  p-2"
            aria-label="next"
            onClick={slideNext}
          >
            <ArrowLeftIcon style={{ transform: "rotate(180deg)" }} />
          </button>
        )}

        {/* Show previous button if not at the first item */}
        {activeIndex > 0 && (
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2  bg-black text-white p-2"
            aria-label="previous"
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
