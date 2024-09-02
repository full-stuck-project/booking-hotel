import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SearchFilter } from "../../components/Fillters/SearchFillter/SearchFillter";

export const Home = () => {
  const slideImages = [
    "/img/hotel.jpg",
    "/img/hotel2.jpg",
    "/img/hotel3.jpg",
    "/img/hotel4.jpg",
  ];

  return (
    <div className="relative flex flex-col items-center h-[100vh] bg-gray-900">
      <div className="relative w-full overflow-hidden sm:h-[70vh] md:h-[80vh]">
        <Slide
          className="w-full h-full"
          autoplay={true}
          interval={3000}
          prevArrow={<div style={{ display: "none" }} />} // Hide prev arrow
          nextArrow={<div style={{ display: "none" }} />} // Hide next arrow
        >
          {slideImages.map((image, index) => (
            <div className="w-full h-full each-slide" key={index}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-[75vh] object-cover"
              />
            </div>
          ))}
        </Slide>

        <SearchFilter />
      </div>
    </div>
  );
};
