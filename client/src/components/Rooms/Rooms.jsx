// import React, { Children } from "react";
// import { useSelector } from "react-redux";

// export const Rooms = ({
//   ameneties,
//   people,
//   price,
//   roomAmeneties,
//   priceDescription,
//   staying,
// }) => {
//   // Default values if props are not passed
//   ameneties = ameneties || {
//     capacity: 1,
//     air: "Air conditioning",
//     roomSize: "30 m²",
//     wifi: "Free Wifi",
//     screen: "Flat-screen TV",
//     pension_type: "Full pension",
//     is_occupied: "Room available",
//     view: "Sea view, City view",
//     bathroom: "Attached bathroom",
//     kitchen: "Private kitchen",
//   };
//   roomAmeneties = {
//     cancellation: " Free cancellation",
//     Breakfast: "Breakfast included in the price",
//     dinner: "dinner iclude in price",
//   };

//   // people = people || 2;
//   people = {
//     Adult: 4,
//     Children: 0,
//   };
//   price = price || 2268;

//   staying = "6 nights";

//   priceDescription = priceDescription || "Includes taxes and fees";

//   const { isDarkMode } = useSelector((state) => state.user);

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="div w-[80%] max-w-6xl mx-auto my-8 p-4 border rounded-lg shadow-lg">
//         <div className="flex justify-between div">
//           {/* Room Type Section */}
//           <div className="flex flex-col w-[40%] border-r pr-4 div ">
//             {/* Title Section */}
//             <div className="text-center div ">
//               <h2 className="text-lg font-bold text-orange-600 h2 ">Rooms</h2>
//             </div>

//             {/* Room Details Section */}
//             <div className="mt-4 flex justify-between">
//               <ul className="space-y-2 flex flex-col items-center">
//                 <li>
//                   <i className="fas fa-bed h1"></i> {ameneties.capacity} full
//                   bed
//                 </li>
//                 <li>
//                   <i className="fas fa-home"></i> {ameneties.roomSize}
//                 </li>
//                 <li>
//                   <i className="fas fa-utensils"></i> {ameneties.kitchen}
//                 </li>
//                 <li>
//                   <i className="fas fa-bath"></i> {ameneties.bathroom}
//                 </li>
//                 <li>
//                   <i className="fas fa-water"></i> {ameneties.view}
//                 </li>
//               </ul>
//               <ul className="space-y-2 flex flex-col items-center">
//                 <li>
//                   <i className="fas fa-snowflake"></i> {ameneties.air}
//                 </li>
//                 <li>
//                   <i className="fas fa-tv"></i> {ameneties.screen}
//                 </li>
//                 <li>
//                   <i className="fas fa-wifi"></i> {ameneties.wifi}
//                 </li>
//                 <li>
//                   <i className="fas fa-volume-mute"></i> Soundproof
//                 </li>
//               </ul>
//             </div>
//           </div>
//           <div className="flex flex-col w-[20%] border-r pr-4 items-center">
//             {/* Guest Title */}
//             <h1 className="text-lg text-orange-500 font-bold mb-2 h2">Guest</h1>

//             {/* User Icon and Details */}
//             <div className="flex items-center justify-center mt-7">
//               <i className="fas fa-users text-3xl"></i>

//               {/* Stack Adults and Children vertically */}
//               <div className="ml-2 flex flex-col items-center">
//                 {/* Show Adult */}
//                 <span className="text-lg">
//                   {people.Adult} Adult{people.Adult > 1 ? "s" : ""}
//                 </span>

//                 {/* Show Children if present */}
//                 {people.Children > 0 && (
//                   <span className="text-lg">
//                     {people.Children} Child{people.Children > 1 ? "ren" : ""}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Price Section */}
//           <div className="flex w-[20%] border-r pr-4 flex-col items-center text-center">
//             <h1 className="text-lg text-orange-500 h2  font-bold">
//               Price for {staying}
//             </h1>
//             <div className="mt-7">
//               <p className="text-lg font-bold">₪ {price}</p>
//               <p className="text-sm text-gray-500 h1">{priceDescription}</p>
//             </div>
//           </div>

//           {/* Your Choices */}
//           <div className="flex w-[20%] border-r pr-4 pl-1">
//             <ul className="space-y-2">
//               <li className="text-orange-800 h2">
//                 <i className="fas fa-check h2"></i> {roomAmeneties.cancellation}
//               </li>
//               <li className="text-orange-800 h2">
//                 <i className="fas fa-check"></i>
//                 {roomAmeneties.Breakfast}
//               </li>
//             </ul>
//           </div>

//           {/* Select Room & Reserve Button */}
//           <div className="pl-[1%] text-center">
//             {/* <select className="border p-2 rounded mb-4 w-full">
//             <option value="1">1 Room</option>
//             <option value="2">2 Rooms</option>
//             <option value="3">3 Rooms</option>
//           </select> */}
//             <button className="bg-orange-400 hover:bg-orange-700 text-white p-2 rounded-lg w-full">
//               I'll reserve
//             </button>
//             <p className="mt-2 text-sm text-gray-600 h1">
//               ● Confirmation is immediate
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export const Rooms = ({
//   ameneties,
//   price,
//   roomAmeneties,
//   staying,
//   priceDescription,
// }) => {
//   return (
//     <div className="room mb-4 p-4 border rounded-md">
//       <h3 className="text-lg font-bold mb-2">
//         Room Type: {ameneties.room_type}
//       </h3>
//       <p>Price: ${price}</p>
//       <p>Capacity: {ameneties.capacity} people</p>
//       <p>Pension Type: {ameneties.pension_type}</p>
//       <p>Amenities: {roomAmeneties}</p>
//       <p>Staying: {staying}</p>
//       <p>{priceDescription}</p>
//     </div>
//   );
// };


import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const Rooms = ({
  ameneties,
  price,
  roomAmeneties,
  capacity,
  staying,
  checkin,
  checkout,
  people,
  hotelId,
  hotelName
}) => {
  const { isDarkMode } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const reserveClick = () => {
    navigate(`/personaldetails/${hotelId}`, {
      state: {
        staying,
        checkin,
        checkout,
        people,
        hotelName,
        roomType,
        price,
        roomAmeneties
      },
    });
  };

  // Split the amenities string into an array
  const amenetiesList = roomAmeneties ? roomAmeneties.split(",") : [];
  let parts = ameneties.room_type.split(" - ");
  const roomType = parts[0];

  return (
    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="div w-[80%] max-w-6xl mx-auto my-8 p-4 border rounded-lg shadow-lg">
        <div className="flex justify-between">
          {/* Room Type Section */}
          <div className="flex flex-col w-[40%] border-r pr-4">
            {/* Title Section */}
            <div className="text-center">
              <h2 className="text-lg font-bold text-orange-600">{parts[0]}</h2>
            </div>

            {/* Room Details Section */}
            <div className="mt-4 flex justify-between">
              <ul className="space-y-2 flex flex-col items-center">
                {amenetiesList.map((amenity, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i> {amenity.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guest Section */}
          <div className="flex flex-col w-[20%] border-r pr-4 items-center">
            <h1 className="text-lg text-orange-500 font-bold mb-2">Guest</h1>
            <div className="flex items-center justify-center mt-7">
              <i className="fas fa-users text-3xl"></i>
              <div className="ml-2 flex flex-col items-center">
                <span className="text-lg">{capacity}</span>
              </div>
            </div>
          </div>

          {/* Price Section */}
          <div className="flex w-[20%] border-r pr-4 flex-col items-center text-center">
            <h1 className="text-lg text-orange-500 font-bold">
              Price for one night
            </h1>
            <div className="mt-7">
              <p className="text-lg font-bold">$ {price}</p>
            </div>
          </div>

          {/* Room Amenities */}
          <div className="flex w-[20%] border-r pr-4">
            <ul className="space-y-2">
              <ul className="space-y-2">
                <li className="text-orange-800 h2">
                  <i className="fas fa-check h2"></i> Free cancellation
                </li>
                <li className="text-orange-800 h2">
                  <i className="fas fa-check"></i> {parts[1]}
                  {roomAmeneties.Breakfast}
                </li>
              </ul>
            </ul>
          </div>

          {/* Select Room & Reserve Button */}
          <div className="pl-[1%] text-center">
            <button
              onClick={reserveClick}
              className="bg-orange-400 hover:bg-orange-700 text-white p-2 rounded-lg w-full"
            >
              reserve
            </button>
            <p className="mt-2 text-sm text-gray-600">
              ● Confirmation is immediate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
