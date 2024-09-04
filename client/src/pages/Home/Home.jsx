import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { SearchFilter } from "../../components/Fillters/SearchFillter/SearchFillter";
import { Footer } from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/NavBar";

export const Home = () => {
  const slideImages = [
    "/img/hotel.jpg",
    "/img/hotel2.jpg",
    "/img/hotel3.jpg",
    "/img/hotel4.jpg",
  ];

  const countryImage = [
    "/img/newyork.jpg",
    "/img/paris.jpg",
    "/img/roma.jpg",
    "/img/tokyo.jpg",
    "/img/thailand.jpg",
    "/img/istanbul.jpg",
    "/img/barcelona.jpg",
    "/img/dubai.jpg",
  ];

  const recommendations = [
    {
      name: "Emily Roberts",
      message: "Helped me find my dream hotel!",
      color: "text-red-500",
    },
    {
      name: "John Smith",
      message: "Great service and wonderful experience!",
      color: "text-blue-500",
    },
    {
      name: "Sarah Johnson",
      message: "The best hotel booking site I've used!",
      color: "text-green-500",
    },
    {
      name: "Michael Brown",
      message: "Found the perfect hotel for my vacation!",
      color: "text-yellow-500",
    },
    {
      name: "Jessica Lee",
      message: "Amazing deals and top-notch service!",
      color: "text-pink-500",
    },
    {
      name: "David Wilson",
      message: "So easy to use, found exactly what I needed!",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="relative flex flex-col items-center flex-grow">
        <div className="relative w-full overflow-hidden h-[45%]">
          <Slide
            className="w-full h-full"
            autoplay={true}
            interval={3000}
            prevArrow={<div style={{ display: "none" }} />}
            nextArrow={<div style={{ display: "none" }} />}
          >
            {slideImages.map((image, index) => (
              <div className="w-full h-full each-slide relative" key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[75vh] object-cover relative"
                />
              </div>
            ))}
          </Slide>
        </div>
        <div className="absolute top-[22%] left-0 w-full flex items-center justify-center z-10 px-4">
          <SearchFilter className="w-[80%] p-24 bg-white bg-opacity-40 border border-gray-300 rounded-lg shadow-lg transform transition duration-500 hover:scale-105" />
        </div>
        <h1 className="text-center text-2xl font-bold mt-14 mb-4 ">
          Explore Top Tourist Destinations
        </h1>
        <div className="flex flex-wrap justify-around p-4">
          {countryImage.map((image, index) => (
            <div key={index} className="w-[250px] h-[250px] bg-gray-400 mb-4">
              <img
                src={image}
                alt={`Destination ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <section id="testimonials" className="w-full py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">
              What Our Guests Say
            </h2>
            <div className="flex flex-wrap justify-between">
              {recommendations.map((value, index) => (
                <div
                  key={index}
                  className="h-[150px] w-[200px] bg-gray-100 p-4 rounded-[10px] shadow-md flex flex-col justify-center mb-8 transform transition duration-500 hover:scale-105"
                >
                  <strong
                    className={`text-lg ${value.color} font-semibold mb-2`}
                  >
                    {value.name}
                  </strong>
                  <p className="text-gray-700">{value.message}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};
