import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export const Home = () => {
  const slideImages = [
    "/img/hotel.jpg",
    "/img/hotel2.jpg",
    "/img/hotel3.jpg",
    "/img/hotel4.jpg",
  ];

  return (
    <div className="h-[100vh] w-full overflow-hidden bg-gray-900 relative">
      <Slide
        className="h-full w-full"
        autoplay={true}
        interval={3000} // Change image every 3 seconds
      >
        {slideImages.map((image, index) => (
          <div className="w-full h-[78vh] each-slide" key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </Slide>
    </div>
  );
};
