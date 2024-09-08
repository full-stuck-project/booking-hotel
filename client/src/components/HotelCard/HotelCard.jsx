// // /*
// // image
// // hotel name
// // 2 ameneties
// // rating
// // price ={}
// // button for hotelPage

// // */

// import { useSelector } from "react-redux";

// export const HotelCard = (
//   image,
//   name,
//   amenities,
//   description,
//   rating,
//   price,
//   // priceData,
//   // taxes
// ) => {
//   name = "Hilton";
//   image = "/img/small.jpg";
//   amenities = "Breakfast and Dinner";
//   description = "Hotel in Germany, 700 meters from the center and malls";
//   rating = "7.5 Good";
//   price = 1500;
//   // priceData = " 15 days 2 adults";
//   // taxes = "includes texes and charges";

//   const { isDarkMode } = useSelector((state) => state.user);

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="div w-[1200px] h-[300px] flex border-[1px] rounded-[20px]  ml-20 mt-20  overflow-hidden">
//         {/* Image Section */}
//         <div className="w-[400px] h-full">
//           <img
//             src={image}
//             alt={name}
//             className="h-full w-full object-cover rounded-l-[20px] border-r-[1px] border-gray-300"
//           />
//         </div>

//         {/* Hotel Info Section */}
//         <div className="flex items-start justify-between text-left flex-col w-[400px] h-full p-6">
//           <h1 className="text-3xl font-semibold font-serif h1">{name}</h1>
//           <p className="mt-2  font-medium h1">{description}</p>
//           <div className="mt-4  p-2 rounded-lg div">
//             <p className="text-lg h1 ">{amenities}</p>
//           </div>
//           <div className="mt-4 div p-2 rounded-full">
//             <p className="text-lg font-semibold h1">{rating}</p>
//           </div>
//         </div>

//         {/* Price and Action Section */}
//         <div className="flex justify-center items-center text-left flex-col w-[400px] h-full p-6 div">
//           <h1 className="text-4xl font-bold h1">${price}</h1>
//           {/* <p className="mt-2 text-lg h1">{priceData}</p>
//           <p className="mt-2 text-lg h1">{taxes}</p> */}
//           <button className="mt-6 href  py-2 px-6 rounded-full shadow-md transition duration-300">
//             View Deal
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useSelector } from "react-redux";

export const HotelCard = ({
  image,
  name,
  amenities,
  description,
  rating,
  price,
}) => {
  const { isDarkMode } = useSelector((state) => state.user);

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="w-[90%] h-[300px] flex border-[1px] rounded-[20px] ml-20 mt-20 overflow-hidden">
        {/* Image Section */}
        <div className="w-[400px] h-full">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover rounded-l-[20px] border-r-[1px] border-gray-300"
          />
        </div>

        {/* Hotel Info Section */}
        <div className="flex items-start justify-between text-left flex-col w-[400px] h-full p-6">
          <h1 className="text-3xl font-semibold font-serif">{name}</h1>
          <p className="mt-2 font-medium">{description}</p>
          <div className="mt-4 p-2 rounded-lg">
            <p className="text-lg">{amenities}</p>
          </div>
          <div className="mt-4 p-2 rounded-full">
            <p className="text-lg font-semibold">{rating}</p>
          </div>
        </div>

        {/* Price and Action Section */}
        <div className="flex justify-center items-center text-left flex-col w-[400px] h-full p-6">
          <h1>Price per night</h1>
          <h1 className="text-4xl font-bold">${price}</h1>
          <button className="mt-6 py-2 px-6 rounded-full shadow-md transition duration-300 bg-orange-600 text-white">
            View Deal
          </button>
        </div>
      </div>
    </div>
  );
};
