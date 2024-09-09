// import React from "react";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faHotel,
//   faCalendarAlt,
//   faMapMarkerAlt,
//   faDoorClosed,
//   faDollarSign,
//   faCheck,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";

// export const OrderConfirmationCard = ({
//   firstName,
//   lastName,
//   email,
//   phone,
//   hotel,
//   room,
//   price,
//   check_in,
//   check_out,
//   location,
// }) => {
//   const { isDarkMode } = useSelector((state) => state.user);

//    // Sample data
//    firstName = "Jane";
//    lastName = "Smith";
//    email = "jane.smith@example.com";
//    phone = "+1-555-123-4567";
//    hotel = "Sunset Beach Resort";
//    room = "Deluxe Suite";
//    price = "$700";
//    check_in = "2024-09-15";
//    check_out = "2024-09-20";
//    location = "Malibu, California";

//   return (
//     <div className={`flex justify-center ${isDarkMode ? "dark" : ""}`}>
//       <div className={`flex flex-col h-[500px] w-[500px] border-[2px] ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-black bg-white"} shadow-lg rounded-lg p-6`}>
//         <h1 className="text-orange-500 text-center text-[2rem] font-semibold mb-4">
//           Booking Confirmed{" "}
//           <FontAwesomeIcon icon={faCheck} className="text-green-700" />
//         </h1>

//         {/* Personal details */}
//         <div className="flex flex-col mb-6">
//           <p className="text-lg font-semibold mb-2">
//             <FontAwesomeIcon icon={faUser} className="mr-2" />
//             Full Name: {`${firstName} ${lastName}`}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
//             Email: {email}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faPhone} className="mr-2" />
//             Phone: {phone}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//             Check-In Date: {check_in}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//             Check-Out Date: {check_out}
//           </p>
//         </div>

//         {/* Hotel details */}
//         <div>
//           <p className="text-lg font-semibold mb-2">
//             <FontAwesomeIcon icon={faHotel} className="mr-2" />
//             Hotel Details
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faHotel} className="mr-2" />
//             Hotel: {hotel}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faDoorClosed} className="mr-2" />
//             Room: {room}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
//             Price: {price}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//             Check-in: {check_in}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//             Check-out: {check_out}
//           </p>
//           <p className="text-md mb-1">
//             <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
//             Location: {location}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// import React from "react";
// import { useSelector } from "react-redux";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faPhone,
//   faEnvelope,
//   faHotel,
//   faCalendarAlt,
//   faMapMarkerAlt,
//   faDoorClosed,
//   faDollarSign,
//   faCheck,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";

// // Fancy Order Confirmation Component
// export const OrderConfirmationCard = ({
//   firstName,
//   lastName,
//   email,
//   phone,
//   hotel,
//   room,
//   price,
//   check_in,
//   check_out,
//   location,
// }) => {
//   const { isDarkMode } = useSelector((state) => state.user);

//      firstName = "Jane";
//    lastName = "Smith";
//    email = "jane.smith@example.com";
//    phone = "+1-555-123-4567";
//    hotel = "Sunset Beach Resort";
//    room = "Deluxe Suite";
//    price = "$700";
//    check_in = "2024-09-15";
//    check_out = "2024-09-20";
//    location = "Malibu, California";
//   return (
//     <div
//       className={`flex justify-center items-center min-h-screen py-10 px-4 ${
//         isDarkMode ? "dark bg-gray-900" : " bg-[#f974164f] "
//       }`}
//     >
//       <div
//         className={`relative flex flex-col max-w-lg w-full p-8 border rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 ${
//           isDarkMode
//             ? "border-gray-700 bg-gray-800 text-white"
//             : "border-white bg-white text-gray-800"
//         }`}
//       >
//         {/* Confirmation Title with Animated Icon */}
//         <div className="flex justify-center items-center mb-6">
//           <h1 className="text-4xl font-extrabold text-center tracking-wide">
//             Booking Confirmed
//           </h1>
//           <FontAwesomeIcon
//             icon={faCheck}
//             className="text-green-600 ml-3 text-3xl animate-bounce"
//           />
//         </div>

//         {/* Main Content: Personal Details */}
//         <div className="space-y-4">
//           <div className="flex flex-col items-center bg-gradient-to-r from-gray-200 to-gray-300 p-4 rounded-xl shadow-inner">
//             <FontAwesomeIcon icon={faUser} className="text-xl mb-2 text-black" />
//             <p className="text-lg font-medium">
//               {`${firstName} ${lastName}`}
//             </p>
//             <p className="text-sm">
//               <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
//               {email}
//             </p>
//             <p className="text-sm">
//               <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" />
//               {phone}
//             </p>
//           </div>

//           {/* Hotel Information */}
//           <div className="p-4 bg-white rounded-xl shadow-inner text-center">
//             <p className="text-lg font-semibold text-purple-600">
//               <FontAwesomeIcon icon={faHotel} className="mr-2 text-xl" />
//               {hotel}
//             </p>
//             <p className="text-md">
//               <FontAwesomeIcon icon={faDoorClosed} className="mr-2" />
//               Room: {room}
//             </p>
//             <p className="text-md">
//               <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
//               Price: {price}
//             </p>
//             <p className="text-md">
//               <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//               Check-In: {check_in}
//             </p>
//             <p className="text-md">
//               <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
//               Check-Out: {check_out}
//             </p>
//             <p className="text-md">
//               <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
//               Location: {location}
//             </p>
//           </div>
//         </div>

//         {/* Action Buttons */}
//         <div className="mt-8 flex justify-center space-x-4">
//           <a
//             href="#"
//             className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105"
//           >
//             View Booking
//           </a>
//           <a
//             href="#"
//             className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold text-lg shadow-lg hover:bg-gray-200 transition duration-300"
//           >
//             Contact Support
//           </a>
//         </div>

//         {/* Decorative Background Circle */}
//         <div
//           className="absolute -top-16 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 filter blur-2xl"
//           style={{ zIndex: -1 }}
//         ></div>
//       </div>
//     </div>
//   );
// };

import React from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faHotel,
  faCalendarAlt,
  faMapMarkerAlt,
  faDoorClosed,
  faDollarSign,
  faCheck,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

// Fancy Order Confirmation Component
export const OrderConfirmationCard = ({
  firstName,
  lastName,
  email,
  phone,
  hotel,
  room,
  price,
  check_in,
  check_out,
  location,
  latitude,
  longitude,
}) => {
  const { isDarkMode } = useSelector((state) => state.user);

  // Dummy data for display purposes
  firstName = "Jane";
  lastName = "Smith";
  email = "jane.smith@example.com";
  phone = "+1-555-123-4567";
  hotel = "Sunset Beach Resort";
  room = "Deluxe Suite";
  price = "$700";
  check_in = "2024-09-15";
  check_out = "2024-09-20";
  location = "Malibu, California";
  latitude = "34.0259"; // Example Latitude
  longitude = "-118.7798"; // Example Longitude

  return (
    <div
      className={`flex justify-center items-center min-h-screen py-10 px-4 ${
        isDarkMode ? "dark bg-gray-900" : " bg-[#f974164f] "
      }`}
    >
      <div
        className={`relative flex flex-col max-w-lg w-full p-8 border rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 ${
          isDarkMode
            ? "border-gray-700 bg-gray-800 text-white"
            : "border-white bg-white text-gray-800"
        }`}
      >
        {/* Confirmation Title with Animated Icon */}
        <div className="flex justify-center items-center mb-6">
          <h1 className="text-4xl font-extrabold text-center tracking-wide">
            Booking Confirmed
          </h1>
          <FontAwesomeIcon
            icon={faCheck}
            className="text-green-600 ml-3 text-3xl animate-bounce"
          />
        </div>

        {/* Main Content: Personal Details */}
        <div className="space-y-4">
          <div className="flex flex-col items-center bg-gradient-to-r from-gray-200 to-gray-300 p-4 rounded-xl shadow-inner">
            <FontAwesomeIcon icon={faUser} className="text-xl mb-2 text-black" />
            <p className="text-lg font-medium">
              {`${firstName} ${lastName}`}
            </p>
            <p className="text-sm">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2 text-sm" />
              {email}
            </p>
            <p className="text-sm">
              <FontAwesomeIcon icon={faPhone} className="mr-2 text-sm" />
              {phone}
            </p>
          </div>

          {/* Hotel Information */}
          <div className="p-4 bg-white rounded-xl shadow-inner text-center">
            <p className="text-lg font-semibold text-purple-600">
              <FontAwesomeIcon icon={faHotel} className="mr-2 text-xl" />
              {hotel}
            </p>
            <p className="text-md">
              <FontAwesomeIcon icon={faDoorClosed} className="mr-2" />
              Room: {room}
            </p>
            <p className="text-md">
              <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
              Price: {price}
            </p>
            <p className="text-md">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Check-In: {check_in}
            </p>
            <p className="text-md">
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Check-Out: {check_out}
            </p>
            <p className="text-md">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              Location: {location}
            </p>
          </div>

          {/* Map Icons for Waze, Google Maps, and Apple Maps */}
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href={`https://waze.com/ul?ll=${latitude},${longitude}&navigate=yes`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="waze-icon.png" className="w-8 h-8" alt="Waze" />
            </a>
            <a
              href={`https://www.google.com/maps?q=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="google-maps-icon.png" className="w-8 h-8" alt="Google Maps" />
            </a>
            <a
              href={`http://maps.apple.com/?ll=${latitude},${longitude}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="apple-maps-icon.png" className="w-8 h-8" alt="Apple Maps" />
            </a>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold text-lg shadow-lg transition duration-300 transform hover:scale-105"
          >
            View Booking
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-gray-100 text-gray-800 font-semibold text-lg shadow-lg hover:bg-gray-200 transition duration-300"
          >
            Contact Support
          </a>
        </div>

        {/* Decorative Background Circle */}
        <div
          className="absolute -top-16 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-30 filter blur-2xl"
          style={{ zIndex: -1 }}
        ></div>
      </div>
    </div>
  );
};
