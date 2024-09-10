// import { useState } from "react";
// import { useSelector } from "react-redux";

// export const PersonalDetailsPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

//   // Define initial state for the form fields
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//   });

//   // Handler to update form data state
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // Email validation regex
//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   // Handler for form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!emailPattern.test(formData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     if (!formData.firstName || !formData.lastName) {
//       alert("Please fill out all the required fields.");
//       return;
//     }

//     console.log("Form submitted:", formData);
//   };

//   // Fake order details for demonstration
//   const orderDetails = {
//     hotelName: "Sunny Beach Resort",
//     guests: 2,
//     roomType: "Deluxe Suite",
//     costPerNight: 150,
//     totalNights: 3,
//     totalPrice: 150 * 3,
//   };

//   return (
//     <div className={isDarkMode ? "dark" : ""}>
//       <div className="bg p-6">
//         <div className="flex justify-center items-start min-h-screen p-4">
//           <div className="flex w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl">
//             {/* Left Side: Personal Details Form */}
//             <div className="w-2/3 p-6">
//               <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">
//                 Personal Details
//               </h2>

//               {/* Introduction Section */}
//               <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-md dark:shadow-xl">
//                 <h3 className="text-lg font-medium mb-2">Introduction</h3>
//                 <p className="text-sm text-gray-700 dark:text-gray-300">
//                   Please provide your personal details to complete the booking
//                   process. We need this information to ensure your reservation
//                   is processed accurately.
//                 </p>
//               </div>

//               {/* Selection Section */}
//               <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-md dark:shadow-xl">
//                 <h3 className="text-lg font-medium mb-2">Your Selection</h3>
//                 <p className="text-sm text-gray-700 dark:text-gray-300">
//                   <strong>Hotel Name:</strong> {orderDetails.hotelName}
//                 </p>
//                 <p className="text-sm text-gray-700 dark:text-gray-300">
//                   <strong>Guests:</strong> {orderDetails.guests}
//                 </p>
//                 <p className="text-sm text-gray-700 dark:text-gray-300">
//                   <strong>Room Type:</strong> {orderDetails.roomType}
//                 </p>
//                 <p className="text-sm text-blue-600 hover:underline cursor-pointer">
//                   Change selection
//                 </p>
//               </div>

//               {/* Form Section */}
//               <form onSubmit={handleSubmit} className="space-y-4">
//                 <div>
//                   <label
//                     htmlFor="firstName"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="input border rounded p-2 w-full"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="lastName"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="input border rounded p-2 w-full"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input border rounded p-2 w-full"
//                     required
//                     pattern={emailPattern.source}
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="phone"
//                     className="block text-sm font-medium mb-1"
//                   >
//                     Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input border rounded p-2 w-full"
//                   />
//                 </div>
//                 <button
//                   type="submit"
//                   className="btn py-2 px-4 rounded bg-orange-500 text-white font-semibold"
//                 >
//                   Continue
//                 </button>
//               </form>
//             </div>

//             {/* Right Side: Order Details */}
//             <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-6 rounded-r-lg shadow-lg dark:shadow-2xl">
//               <h3 className="text-xl font-semibold mb-4 text-[#F97316]">
//                 Order Summary
//               </h3>
//               <p className="mb-2">
//                 <strong>Hotel Name:</strong> {orderDetails.hotelName}
//               </p>
//               <p className="mb-2">
//                 <strong>Guests:</strong> {orderDetails.guests}
//               </p>
//               <p className="mb-2">
//                 <strong>Room Type:</strong> {orderDetails.roomType}
//               </p>
//               <p className="mb-2">
//                 <strong>Cost per Night:</strong> ${orderDetails.costPerNight}
//               </p>
//               <p className="mb-4">
//                 <strong>Total Price:</strong> ${orderDetails.totalPrice}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import DatePicker from 'react-datepicker'; // Example for date picker
// import { useParams, useLocation } from "react-router-dom";
// import 'react-datepicker/dist/react-datepicker.css';
// import { FaUser, FaEnvelope, FaPhone, FaHotel, FaCalendarAlt } from 'react-icons/fa'; // Example icons

// export const PersonalDetailsPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);
//   const { hotelId } = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const { staying, checkin, checkout, people, hotelName, roomType} = state || {};

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     checkInDate: new Date(),
//     checkOutDate: new Date(),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleDateChange = (date, field) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [field]: date,
//   //   }));
//   // };

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!emailPattern.test(formData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     if (!formData.firstName || !formData.lastName) {
//       alert("Please fill out all the required fields.");
//       return;
//     }

//     console.log("Form submitted:", formData);
//   };

//   const orderDetails = {
//     hotelName: hotelName,
//     guests: people,
//     roomType: roomType,
//     costPerNight: 150,
//     totalNights: staying,
//     totalPrice: 150 * staying,
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
//       <div className="bg p-6">
//         <div className="flex justify-center items-start p-4">
//           <div className="flex w-full max-w-6xl bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl overflow-hidden">
//             {/* Left Side: Personal Details Form */}
//             <div className="w-2/3 p-8">
//               <h2 className="h1 text-3xl font-bold mb-6 text-black flex items-center">
//                 <FaUser className="mr-2" /> Personal Details
//               </h2>

//               {/* Introduction Section */}
//               <div className="text-center mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
//                 <h3 className="text-xl font-semibold mb-2 text-[#F97316]">
//                   Introduction
//                 </h3>
//                 <h4 className="font-semibold overflow-hidden">
//                   Please provide your personal details to finalize your booking.
//                 </h4>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   This information is required to process your reservation
//                   accurately and ensure a smooth check-in experience.
//                 </p>
//               </div>

//               {/* Selection Section */}
//               <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
//                 <h3 className="text-xl font-semibold mb-2">Your Selection</h3>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <FaHotel className="inline mr-2" />
//                   <strong>Hotel Name:</strong> {orderDetails.hotelName}
//                 </p>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <strong>Guests:</strong> {orderDetails.guests}
//                 </p>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <strong>Room Type:</strong> {orderDetails.roomType}
//                 </p>
//                 <p className="text-md text-blue-600 hover:underline cursor-pointer">
//                   Change selection
//                 </p>
//               </div>

//               {/* Form Section */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="firstName"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="lastName"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="email"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaEnvelope className="mr-2" /> Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                     pattern={emailPattern.source}
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="phone"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaPhone className="mr-2" /> Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                   />
//                 </div>
//                 {/* <div className="flex flex-col mb-4">////
//                   <label
//                     htmlFor="checkInDate"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaCalendarAlt className="mr-2" /> Check-In Date
//                   </label>
//                   <DatePicker
//                     selected={formData.checkInDate}
//                     onChange={(date) => handleDateChange(date, "checkInDate")}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     dateFormat="MMMM d, yyyy"
//                   />
//                 </div>
//                 <div className="flex flex-col mb-6">
//                   <label
//                     htmlFor="checkOutDate"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaCalendarAlt className="mr-2" /> Check-Out Date
//                   </label>
//                   <DatePicker
//                     selected={formData.checkOutDate}
//                     onChange={(date) => handleDateChange(date, "checkOutDate")}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     dateFormat="MMMM d, yyyy"
//                   />
//                 </div> */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-[#F97316] text-white rounded-lg font-semibold shadow-md hover:bg-[#e87d00] transition-colors"
//                 >
//                   Continue
//                 </button>
//               </form>
//             </div>

//             {/* Right Side: Order Details */}
//             <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-8 rounded-r-lg shadow-lg dark:shadow-2xl">
//               <h3 className="text-2xl font-bold mb-6 text-[#F97316] flex items-center">
//                 <FaHotel className="mr-2" /> Order Summary
//               </h3>
//               <p className="mb-4 text-lg">
//                 <strong>Hotel Name:</strong> {orderDetails.hotelName}
//               </p>
//               <p className="mb-4 text-lg">
//                 <strong>Guests:</strong> {orderDetails.guests}
//               </p>
//               <p className="mb-4 text-lg">
//                 <strong>Room Type:</strong> {orderDetails.roomType}
//               </p>
//               <p className="mb-4 text-lg">
//                 <strong>Cost per Night:</strong> ${orderDetails.costPerNight}
//               </p>
//               <p className="text-lg mb-4 font-bold">
//                 <strong>Total Price:</strong> ${orderDetails.totalPrice}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState } from "react";
// import { useSelector } from "react-redux";
// import DatePicker from "react-datepicker"; // Example for date picker
// import { useParams, useLocation, useNavigate } from "react-router-dom";
// import "react-datepicker/dist/react-datepicker.css";
// import {
//   FaUser,
//   FaEnvelope,
//   FaPhone,
//   FaHotel,
//   FaCalendarAlt,
// } from "react-icons/fa"; // Example icons

// export const PersonalDetailsPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);
//   const { hotelId } = useParams();
//   const location = useLocation();
//   const { state } = location;
//   const { staying, checkin, checkout, people, hotelName, roomType, price, roomAmeneties } =
//     state || {};

//   const navigate = useNavigate(); // Hook for navigation

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     checkInDate: new Date(),
//     checkOutDate: new Date(),
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   // const handleDateChange = (date, field) => {
//   //   setFormData((prevData) => ({
//   //     ...prevData,
//   //     [field]: date,
//   //   }));
//   // };

//   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!emailPattern.test(formData.email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }

//     if (!formData.firstName || !formData.lastName) {
//       alert("Please fill out all the required fields.");
//       return;
//     }

//     console.log("Form submitted:", formData);

//         navigate(`/transactionpage`, {
//           state: {
//             staying,
//             checkin,
//             checkout,
//             people,
//             hotelName,
//             roomType,
//             roomAmeneties,
//             totalPrice
//           },
//         });
//   };
//   const totalPrice = price * staying;
//   const orderDetails = {
//     hotelName: hotelName,
//     guests: people,
//     roomType: roomType,
//     costPerNight: price,
//     totalNights: staying,
//     totalPrice: totalPrice,
//   };

//   return (
//     <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
//       <div className="bg p-6">
//         <div className="flex justify-center items-start p-4">
//           <div className="flex w-full max-w-6xl bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl overflow-hidden">
//             {/* Left Side: Personal Details Form */}
//             <div className="w-2/3 p-8">
//               <h2 className="h1 text-3xl font-bold mb-6 text-black flex items-center">
//                 <FaUser className="mr-2" /> Personal Details
//               </h2>

//               {/* Introduction Section */}
//               <div className="text-center mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
//                 <h3 className="text-xl font-semibold mb-2 text-[#F97316]">
//                   Introduction
//                 </h3>
//                 <h4 className="font-semibold overflow-hidden">
//                   Please provide your personal details to finalize your booking.
//                 </h4>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   This information is required to process your reservation
//                   accurately and ensure a smooth check-in experience.
//                 </p>
//               </div>

//               {/* Selection Section */}
//               <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
//                 <h3 className="text-xl font-semibold mb-2">Your Selection</h3>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <FaHotel className="inline mr-2" />
//                   <strong>Hotel Name:</strong> {orderDetails.hotelName}
//                 </p>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <strong>Guests:</strong> {orderDetails.guests}
//                 </p>
//                 <p className="text-md text-gray-700 dark:text-gray-300">
//                   <strong>Room Type:</strong> {orderDetails.roomType}
//                 </p>
//                 <p className="text-md text-blue-600 hover:underline cursor-pointer">
//                   Change selection
//                 </p>
//               </div>

//               {/* Form Section */}
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="firstName"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="lastName"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaUser className="mr-2" /> Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="email"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaEnvelope className="mr-2" /> Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     required
//                     pattern={emailPattern.source}
//                   />
//                 </div>
//                 <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="phone"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaPhone className="mr-2" /> Phone
//                   </label>
//                   <input
//                     type="tel"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                   />
//                 </div>
//                 {/* <div className="flex flex-col mb-4">
//                   <label
//                     htmlFor="checkInDate"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaCalendarAlt className="mr-2" /> Check-In Date
//                   </label>
//                   <DatePicker
//                     selected={formData.checkInDate}
//                     onChange={(date) => handleDateChange(date, "checkInDate")}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     dateFormat="MMMM d, yyyy"
//                   />
//                 </div>
//                 <div className="flex flex-col mb-6">
//                   <label
//                     htmlFor="checkOutDate"
//                     className="text-lg font-medium mb-2 flex items-center"
//                   >
//                     <FaCalendarAlt className="mr-2" /> Check-Out Date
//                   </label>
//                   <DatePicker
//                     selected={formData.checkOutDate}
//                     onChange={(date) => handleDateChange(date, "checkOutDate")}
//                     className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
//                     dateFormat="MMMM d, yyyy"
//                   />
//                 </div> */}
//                 <button
//                   type="submit"
//                   className="w-full py-3 bg-[#F97316] text-white rounded-lg font-semibold shadow-md hover:bg-[#e87d00] transition-colors"
//                 >
//                   Continue
//                 </button>
//               </form>
//             </div>

//             {/* Right Side: Order Details */}
//             <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-8 rounded-r-lg shadow-lg dark:shadow-2xl">
//               <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
//                 Order Details
//               </h3>
//               <div className="flex flex-col space-y-4">
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <FaHotel className="inline mr-2" />
//                   <strong>Hotel Name:</strong> {orderDetails.hotelName}
//                 </p>
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <strong>Guests:</strong> {orderDetails.guests}
//                 </p>
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <strong>Room Type:</strong> {orderDetails.roomType}
//                 </p>
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <strong>Cost Per Night:</strong> ${orderDetails.costPerNight}
//                 </p>
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <strong>Total Nights:</strong> {orderDetails.totalNights}
//                 </p>
//                 <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
//                   <strong>Total Price:</strong> ${orderDetails.totalPrice}
//                 </p>
//                 <p className="text-sm text-gray-600 dark:text-gray-400">
//                   * Prices are subject to change based on availability and
//                   dates.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker"; // Import DatePicker
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaHotel,
  FaCalendarAlt,
} from "react-icons/fa";

export const PersonalDetailsPage = () => {
  const { isDarkMode } = useSelector((state) => state.user);
  const { hotelId } = useParams();
  const location = useLocation();
  const { state } = location;
  const {
    staying,
    checkin,
    checkout,
    people,
    hotelName,
    roomType,
    price,
    roomAmeneties,
  } = state || {};

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkInDate: checkin ? new Date(checkin) : new Date(),
    checkOutDate: checkout ? new Date(checkout) : new Date(),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date, field) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: date,
    }));
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!emailPattern.test(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!formData.firstName || !formData.lastName) {
      alert("Please fill out all the required fields.");
      return;
    }

    console.log("Form submitted:", formData);

    const totalPrice = price * staying;

    navigate(`/transactionpage`, {
      state: {
        staying,
        checkin: formData.checkInDate.toISOString(),
        checkout: formData.checkOutDate.toISOString(),
        people,
        hotelName,
        roomType,
        roomAmeneties,
        totalPrice,
        firstName: formData.firstName,
        lastName: formData.lastName,
        phone: formData.phone,
        email: formData.email,
      },
    });
  };

  const totalPrice = price * staying;
  const orderDetails = {
    hotelName: hotelName,
    guests: people,
    roomType: roomType,
    costPerNight: price,
    totalNights: staying,
    totalPrice: totalPrice,
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? "dark" : ""}`}>
      <div className="bg p-6">
        <div className="flex justify-center items-start p-4">
          <div className="flex w-full max-w-6xl bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl overflow-hidden">
            {/* Left Side: Personal Details Form */}
            <div className="w-2/3 p-8">
              <h2 className="h1 text-3xl font-bold mb-6 text-black flex items-center">
                <FaUser className="mr-2" /> Personal Details
              </h2>

              {/* Introduction Section */}
              <div className="text-center mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2 text-[#F97316]">
                  Introduction
                </h3>
                <h4 className="font-semibold overflow-hidden">
                  Please provide your personal details to finalize your booking.
                </h4>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  This information is required to process your reservation
                  accurately and ensure a smooth check-in experience.
                </p>
              </div>

              {/* Selection Section */}
              <div className="mb-6 p-6 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-md shadow-md dark:shadow-xl transition-transform transform hover:scale-105">
                <h3 className="text-xl font-semibold mb-2">Your Selection</h3>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  <FaHotel className="inline mr-2" />
                  <strong>Hotel Name:</strong> {orderDetails.hotelName}
                </p>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  <strong>Guests:</strong> {orderDetails.guests}
                </p>
                <p className="text-md text-gray-700 dark:text-gray-300">
                  <strong>Room Type:</strong> {orderDetails.roomType}
                </p>
                <p className="text-md text-blue-600 hover:underline cursor-pointer">
                  Change selection
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="firstName"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaUser className="mr-2" /> First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                    required
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="lastName"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaUser className="mr-2" /> Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                    required
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="email"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaEnvelope className="mr-2" /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                    required
                    pattern={emailPattern.source}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="phone"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaPhone className="mr-2" /> Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <label
                    htmlFor="checkInDate"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaCalendarAlt className="mr-2" /> Check-In Date
                  </label>
                  <DatePicker
                    selected={formData.checkInDate}
                    onChange={(date) => handleDateChange(date, "checkInDate")}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                    dateFormat="MMMM d, yyyy"
                    minDate={new Date()}
                  />
                </div>
                <div className="flex flex-col mb-6">
                  <label
                    htmlFor="checkOutDate"
                    className="text-lg font-medium mb-2 flex items-center"
                  >
                    <FaCalendarAlt className="mr-2" /> Check-Out Date
                  </label>
                  <DatePicker
                    selected={formData.checkOutDate}
                    onChange={(date) => handleDateChange(date, "checkOutDate")}
                    className="input border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-[#F97316] transition-shadow"
                    dateFormat="MMMM d, yyyy"
                    minDate={formData.checkInDate} // Check-Out date must be after Check-In date
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#F97316] text-white rounded-lg font-semibold shadow-md hover:bg-[#e87d00] transition-colors"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Right Side: Order Details */}
            <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-8 rounded-r-lg shadow-lg dark:shadow-2xl">
              <h3 className="text-2xl font-bold mb-6 text-black dark:text-white">
                Order Details
              </h3>
              <div className="flex flex-col space-y-4">
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <FaHotel className="inline mr-2" />
                  <strong>Hotel Name:</strong> {orderDetails.hotelName}
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <strong>Guests:</strong> {orderDetails.guests}
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <strong>Room Type:</strong> {orderDetails.roomType}
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <strong>Cost Per Night:</strong> ${orderDetails.costPerNight}
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <strong>Total Nights:</strong> {orderDetails.totalNights}
                </p>
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
                  <strong>Total Price:</strong> ${orderDetails.totalPrice}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  * Prices are subject to change based on availability and
                  dates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
