// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import { SearchFilter } from "../../../components/Fillters/SearchFillter/SearchFillter";
// import { HotelCard } from "../../../components/HotelCard/HotelCard";
// import { AllFilter } from "../../../components/Fillters/AllFilter/AllFilter";
// import Map from "../../../components/Map/Map";
// import axios from "axios";
// export const Hotelexample = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

//   const [hotels, setHotels] = useState([]);

//   useEffect(() => {
//     const fetchHotels = async () => {
//       try {
//         const response = await axios.get("http://localhost:5000/hotels");
//         setHotels(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error("Error fetching hotels:", error);
//       }
//     };

//     fetchHotels();
//   }, []);

//   return (
//     <div className={`${isDarkMode ? "dark" : ""} `}>
//       <div className="h-full w-full div flex flex-col ">
//         <SearchFilter />
//         {/* div for filter */}
//         <div>
//           <AllFilter />
//         </div>
//         {/* div for card  */}
//         <div className="w-full flex mt-4 ">
//           <div className="h-full w-[50%]">
//             {hotels.map((hotel) => (
//               <HotelCard
//                 className="h-full "
//                 key={hotel.hotel_id}
//                 image="/img/small.jpg" // Default image
//                 name={hotel.hotel_name}
//                 amenities={hotel.hotel_amenities}
//                 description={`Located in ${hotel.city}, ${hotel.city_center} meters from the center and malls.`}
//                 rating={`${hotel.rating} Good`}
//                 price={hotel.min_price}
//               />
//             ))}
//           </div>
//           {/* div for map maybe images also  */}
//           <div className="flex h-full w-[100%] justify-center items-center">
//             <Map />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { SearchFilter } from "../../../components/Fillters/SearchFillter/SearchFillter";
import { HotelCard } from "../../../components/HotelCard/HotelCard";
import { AllFilter } from "../../../components/Fillters/AllFilter/AllFilter";
import Map from "../../../components/Map/Map";
import axios from "axios";

export const Hotelexample = () => {
  const { isDarkMode } = useSelector((state) => state.user);

  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get("http://localhost:5000/hotels");
        setHotels(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching hotels:", error);
      }
    };

    fetchHotels();
  }, []);

  return (
    <div className={`${isDarkMode ? "dark" : ""} relative`}>
      <div className="h-full w-full flex flex-col div">
        <SearchFilter />
        <div className="relative">
          <AllFilter />
          <div className="w-full flex mt-4">
            <div className="h-full w-[50%]">
              {hotels.map((hotel) => (
                <HotelCard
                  className="h-full"
                  key={hotel.hotel_id}
                  image="/img/small.jpg"
                  name={hotel.hotel_name}
                  amenities={hotel.hotel_amenities}
                  description={`Located in ${hotel.city}, ${hotel.city_center} meters from the center and malls.`}
                  rating={`${hotel.rating} Good`}
                  price={hotel.min_price}
                />
              ))}
            </div>
            <div className="relative flex h-full w-[50%] justify-center items-center z-20">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
