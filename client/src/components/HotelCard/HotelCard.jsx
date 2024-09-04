// /*
// image
// hotel name
// 2 ameneties
// rating
// price ={}
// button for hotelPage

// */

import { useSelector } from "react-redux";

export const HotelCard = (
  image,
  name,
  amenities,
  description,
  rating,
  price,
  priceData,
  taxes
) => {
  name = "Hilton";
  image = "/img/small.jpg";
  amenities = "Breakfast and Dinner";
  description = "Hotel in Germany, 700 meters from the center and malls";
  rating = "7.5 Good";
  price = 1500;
  priceData = " 15 days 2 adults";
  taxes = "includes texes and charges";

  const { isDarkMode } = useSelector((state) => state.user);

  return (
    <div
      className={`w-[1200px] h-[300px] flex border-[1px] rounded-[20px]  ml-20 mt-20 overflow-hidden ${
        isDarkMode ? "dark" : ""
      }`}
    >
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
        <h1 className="text-3xl font-semibold font-serif text-gray-800">
          {name}
        </h1>
        <p className="mt-2 text-gray-600 font-medium">{description}</p>
        <div className="mt-4 bg-gray-100 p-2 rounded-lg">
          <p className="text-lg text-blue-900">{amenities}</p>
        </div>
        <div className="mt-4 bg-yellow-100 p-2 rounded-full">
          <p className="text-lg font-semibold text-yellow-800">{rating}</p>
        </div>
      </div>

      {/* Price and Action Section */}
      <div className="flex justify-center items-center text-left flex-col w-[400px] h-full p-6 bg-gray-50 border-l-[1px] border-gray-300">
        <h1 className="text-4xl font-bold text-gray-900">${price}</h1>
        <p className="mt-2 text-lg text-gray-600">{priceData}</p>
        <p className="mt-2 text-lg text-gray-600">{taxes}</p>
        <button className="mt-6 bg-blue-600 hover:bg-blue-500 text-white py-2 px-6 rounded-full shadow-md transition duration-300">
          View Deal
        </button>
      </div>
    </div>
  );
};
