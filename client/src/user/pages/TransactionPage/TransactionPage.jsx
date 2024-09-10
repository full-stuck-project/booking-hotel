// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { FaCreditCard } from "react-icons/fa";
// import { useLocation, useNavigate } from "react-router-dom";



// export const TransactionPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

//   const location = useLocation();
//   const { state } = location;
//   const { staying, checkin, checkout, people, hotelName, roomType, roomAmeneties } =
//       state || {};

//   const [cardholderName, setCardholderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("payLater");
//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     const newErrors = {};

//     if (!cardholderName)
//       newErrors.cardholderName = "Cardholder's name is required.";
//     if (!cardNumber || cardNumber.length !== 16)
//       newErrors.cardNumber = "Card number must be 16 digits.";
//     if (!expiryDate) newErrors.expiryDate = "Expiry date is required.";
//     if (!cvc || cvc.length !== 3) newErrors.cvc = "CVC must be 3 digits.";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const formData = {
//         cardholderName,
//         cardNumber,
//         expiryDate,
//         cvc,
//         paymentMethod,
//       };

//       console.log("Form data:", formData);
//       alert("Payment submitted successfully!");
//     }
//   };

//   return (
//     <div className={`${isDarkMode ? "dark:bg-gray-800" : "bg-white"}`}>
//       <div className="max-w-4xl mx-auto p-10">
//         <div className="border rounded-lg shadow-lg p-8 space-y-6">
//           {/* Hotel Details */}
//           <div className="border-b pb-6">
//             <h2 className="font-bold text-2xl">
//               {hotelName} - {roomType}
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Shfifon Street 9, Eilat, 88013, Israel
//             </p>
//             <p className="text-[#F97316] font-medium mt-1">
//               Very good - 8.1 / 959 reviews
//             </p>
//             <div className="flex items-center space-x-6 mt-3">
//               <span className="text-gray-500">Free WiFi</span>
//               <span className="text-gray-500">Parking</span>
//               <span className="text-gray-500">Swimming Pool</span>
//             </div>
//           </div>

//           {/* Booking Details */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your booking details</h3>
//             <p className="mt-2">
//               Check-in: <strong>Thu 12 Sept 2024</strong> from 15:00
//             </p>
//             <p>
//               Check-out: <strong>Sat 14 Sept 2024</strong> until 11:00
//             </p>
//             <p>
//               Total length of stay: <strong>2 nights</strong>
//             </p>
//           </div>

//           {/* Price Summary */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your price summary</h3>
//             <p className="mt-2">
//               Total: <strong>₪3,930.44</strong> (Includes taxes and charges)
//             </p>
//             <p>
//               Damage deposit (Fully refundable): <strong>₪200</strong>
//             </p>
//           </div>

//           {/* Payment Options */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">
//               When would you like to pay?
//             </h3>
//             <div className="flex items-center space-x-6 mt-3">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="payLater"
//                   checked={paymentMethod === "payLater"}
//                   onChange={() => setPaymentMethod("payLater")}
//                   className="mr-2"
//                 />
//                 Pay later
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="payNow"
//                   checked={paymentMethod === "payNow"}
//                   onChange={() => setPaymentMethod("payNow")}
//                   className="mr-2"
//                 />
//                 Pay now
//               </label>
//             </div>
//           </div>

//           {/* Payment Method */}
//           <form onSubmit={handleSubmit}>
//             <h3 className="font-semibold text-xl">
//               How would you like to pay?
//             </h3>
//             <div className="mt-4 space-y-4">
//               <div className="space-y-4">
//                 {/* Cardholder's Name */}
//                 <div>

//                   <input
//                     type="text"
//                     placeholder="Cardholder's Name"
//                     className="border p-3 w-full rounded-md"
//                     value={cardholderName}
//                     onChange={(e) => setCardholderName(e.target.value)}
//                   />
//                   {errors.cardholderName && (
//                     <p className="text-red-500">{errors.cardholderName}</p>
//                   )}
//                 </div>

//                 {/* Card Number */}
//                 <div className="relative">
//                   <FaCreditCard className="absolute left-3 top-3 text-gray-500" />
//                   <input
//                     type="text"
//                     placeholder="Card Number"
//                     className="border p-3 pl-10 w-full rounded-md"
//                     value={cardNumber}
//                     onChange={(e) => setCardNumber(e.target.value)}
//                   />
//                   {errors.cardNumber && (
//                     <p className="text-red-500">{errors.cardNumber}</p>
//                   )}
//                 </div>

//                 {/* Expiry Date & CVC */}
//                 <div className="flex space-x-4">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Expiry Date"
//                       className="border p-3 w-full rounded-md"
//                       value={expiryDate}
//                       onChange={(e) => setExpiryDate(e.target.value)}
//                     />
//                     {errors.expiryDate && (
//                       <p className="text-red-500">{errors.expiryDate}</p>
//                     )}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="CVC"
//                       className="border p-3 w-full rounded-md"
//                       value={cvc}
//                       onChange={(e) => setCvc(e.target.value)}
//                     />
//                     {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="mt-6">
//               <button
//                 type="submit"
//                 className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Pay Now
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };






// import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { FaCreditCard } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { format, parseISO, differenceInDays } from "date-fns";

// export const TransactionPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

//   const location = useLocation();
//   const { state } = location;
//   const {
//     staying,
//     checkin,
//     checkout,
//     people,
//     hotelName,
//     roomType,
//     roomAmeneties,
//     totalPrice
//   } = state || {};

//   const [cardholderName, setCardholderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("payLater");
//   const [errors, setErrors] = useState({});

//   const paypalContainerRef = useRef(null);

//   useEffect(() => {
//     if (paymentMethod === "payNow") {
//       const script = document.createElement("script");
//       script.src =
//         "https://www.paypal.com/sdk/js?client-id=BAAaZsk8Xj3gQRwVdhOnUDLkUZ1JM2sRQUvGk_uMK_eby7u5sAPOj4fuWncLrm-eQxrXhuML7m4vPvRzIY&components=hosted-buttons&disable-funding=venmo&currency=ILS";
//       script.onload = () => {
//         if (window.paypal && paypalContainerRef.current) {
//           window.paypal
//             .HostedButtons({
//               hostedButtonId: "9UJA2ZVLS7QYS",
//             })
//             .render(paypalContainerRef.current);
//         }
//       };
//       document.body.appendChild(script);

//       // Cleanup script on component unmount
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [paymentMethod]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!cardholderName)
//       newErrors.cardholderName = "Cardholder's name is required.";
//     if (!cardNumber || cardNumber.length !== 16)
//       newErrors.cardNumber = "Card number must be 16 digits.";
//     if (!expiryDate) newErrors.expiryDate = "Expiry date is required.";
//     if (!cvc || cvc.length !== 3) newErrors.cvc = "CVC must be 3 digits.";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const formData = {
//         cardholderName,
//         cardNumber,
//         expiryDate,
//         cvc,
//         paymentMethod,
//       };

//       console.log("Form data:", formData);
//       alert("Payment submitted successfully!");
//     }
//   };

//   // Parse room amenities into an array
//   const amenitiesArray = roomAmeneties ? roomAmeneties.split(",") : [];

//   // Format dates using date-fns
//   const formattedCheckin = checkin
//     ? format(parseISO(checkin), "EEE d MMM yyyy")
//     : "";
//   const formattedCheckout = checkout
//     ? format(parseISO(checkout), "EEE d MMM yyyy")
//     : "";

//   // Calculate length of stay
//   const checkinDate = checkin ? parseISO(checkin) : new Date();
//   const checkoutDate = checkout ? parseISO(checkout) : new Date();
//   const lengthOfStay = differenceInDays(checkoutDate, checkinDate);

//   return (

//     <div className={`${isDarkMode ? "dark:bg-gray-800" : "bg-white"}`}>
//       <div className="max-w-4xl mx-auto p-10">
//         <div className="border rounded-lg shadow-lg p-8 space-y-6">
//           {/* Hotel Details */}
//           <div className="border-b pb-6">
//             <h2 className="font-bold text-2xl">
//               {hotelName} - {roomType}
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Shfifon Street 9, Eilat, 88013, Israel
//             </p>
//             <p className="text-[#F97316] font-medium mt-1">
//               Very good - 8.1 / 959 reviews
//             </p>
//             <div className="flex items-center space-x-6 mt-3">
//               {/* Amenities List */}
//               <ul className="list-disc pl-5">
//                 {amenitiesArray.map((amenity, index) => (
//                   <li key={index} className="text-gray-500">
//                     {amenity.trim()}
//                   </li>
//                 ))}
//               </ul>

   

//             </div>

//           {/* Booking Details */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your booking details</h3>
//             <p className="mt-2">
//               Check-in: <strong>{formattedCheckin}</strong> from 15:00
//             </p>
//             <p>
//               Check-out: <strong>{formattedCheckout}</strong> until 11:00
//             </p>
//             <p>
//               Total length of stay: <strong>{lengthOfStay} nights</strong>
//             </p>
//           </div>

//           {/* Price Summary */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your price summary</h3>
//             <p className="mt-2">
//               Total: <strong>${totalPrice}</strong> (Includes taxes and charges)
//             </p>
//             <p>
//               Damage deposit (Fully refundable): <strong>₪200</strong>
//             </p>
//           </div>


//             {/* Price Summary */}
//             <div className="border-b pb-6">
//               <h3 className="font-semibold text-xl">Your price summary</h3>
//               <p className="mt-2">
//                 Total: <strong>₪3,930.44</strong> (Includes taxes and charges)
//               </p>
//               <p>
//                 Damage deposit (Fully refundable): <strong>₪200</strong>
//               </p>
//             </div>

//           {/* Payment Method */}
//           <form onSubmit={handleSubmit}>
//             <h3 className="font-semibold text-xl">
//               How would you like to pay?
//             </h3>
//             <div className="mt-4 space-y-4">
//               <div className="space-y-4">
//                 {/* Cardholder's Name */}
//                 <div>

//                   <input
//                     type="radio"
//                     name="payment"
//                     value="payLater"
//                     checked={paymentMethod === "payLater"}
//                     onChange={() => setPaymentMethod("payLater")}
//                     className="mr-2"
//                   />
//                   Pay later
//                 </label>
//                 <label className="flex items-center">
//                   <input
//                     type="radio"
//                     name="payment"
//                     value="payNow"
//                     checked={paymentMethod === "payNow"}
//                     onChange={() => setPaymentMethod("payNow")}
//                     className="mr-2"
//                   />
//                   Pay now
//                 </label>
//               </div>
//             </div>

//                 {/* Expiry Date & CVC */}
//                 <div className="flex space-x-4">
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Expiry Date"
//                       className="border p-3 w-full rounded-md"
//                       value={expiryDate}
//                       onChange={(e) => setExpiryDate(e.target.value)}
//                     />
//                     {errors.expiryDate && (
//                       <p className="text-red-500">{errors.expiryDate}</p>
//                     )}
//                   </div>
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="CVC"
//                       className="border p-3 w-full rounded-md"
//                       value={cvc}
//                       onChange={(e) => setCvc(e.target.value)}
//                     />
//                     {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}

      
//                   </div>
//                 </form>

//                 {/* PayPal Button */}
//                 <div className="mt-6">
//                   <div ref={paypalContainerRef} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// import { useState, useEffect, useRef } from "react";
// import { useSelector } from "react-redux";
// import { FaCreditCard } from "react-icons/fa";
// import { useLocation } from "react-router-dom";
// import { format, parseISO, differenceInDays } from "date-fns";

// export const TransactionPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

//   const location = useLocation();
//   const { state } = location;
//   const {
//     staying,
//     checkin,
//     checkout,
//     people,
//     hotelName,
//     roomType,
//     roomAmeneties,
//     totalPrice
//   } = state || {};

//   const [cardholderName, setCardholderName] = useState("");
//   const [cardNumber, setCardNumber] = useState("");
//   const [expiryDate, setExpiryDate] = useState("");
//   const [cvc, setCvc] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("payLater");
//   const [errors, setErrors] = useState({});

//   const paypalContainerRef = useRef(null);

//   useEffect(() => {
//     if (paymentMethod === "payNow") {
//       const script = document.createElement("script");
//       script.src =
//         "https://www.paypal.com/sdk/js?client-id=BAAaZsk8Xj3gQRwVdhOnUDLkUZ1JM2sRQUvGk_uMK_eby7u5sAPOj4fuWncLrm-eQxrXhuML7m4vPvRzIY&components=hosted-buttons&disable-funding=venmo&currency=ILS";
//       script.onload = () => {
//         if (window.paypal && paypalContainerRef.current) {
//           window.paypal
//             .HostedButtons({
//               hostedButtonId: "9UJA2ZVLS7QYS",
//             })
//             .render(paypalContainerRef.current);
//         }
//       };
//       document.body.appendChild(script);

//       // Cleanup script on component unmount
//       return () => {
//         document.body.removeChild(script);
//       };
//     }
//   }, [paymentMethod]);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!cardholderName)
//       newErrors.cardholderName = "Cardholder's name is required.";
//     if (!cardNumber || cardNumber.length !== 16)
//       newErrors.cardNumber = "Card number must be 16 digits.";
//     if (!expiryDate) newErrors.expiryDate = "Expiry date is required.";
//     if (!cvc || cvc.length !== 3) newErrors.cvc = "CVC must be 3 digits.";

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const formData = {
//         cardholderName,
//         cardNumber,
//         expiryDate,
//         cvc,
//         paymentMethod,
//       };

//       console.log("Form data:", formData);
//       alert("Payment submitted successfully!");
//     }
//   };

//   // Parse room amenities into an array
//   const amenitiesArray = roomAmeneties ? roomAmeneties.split(",") : [];

//   // Format dates using date-fns
//   const formattedCheckin = checkin
//     ? format(parseISO(checkin), "EEE d MMM yyyy")
//     : "";
//   const formattedCheckout = checkout
//     ? format(parseISO(checkout), "EEE d MMM yyyy")
//     : "";

//   // Calculate length of stay
//   const checkinDate = checkin ? parseISO(checkin) : new Date();
//   const checkoutDate = checkout ? parseISO(checkout) : new Date();
//   const lengthOfStay = differenceInDays(checkoutDate, checkinDate);

//   return (
//     <div className={`${isDarkMode ? "dark:bg-gray-800" : "bg-white"}`}>
//       <div className="max-w-4xl mx-auto p-10">
//         <div className="border rounded-lg shadow-lg p-8 space-y-6">
//           {/* Hotel Details */}
//           <div className="border-b pb-6">
//             <h2 className="font-bold text-2xl">
//               {hotelName} - {roomType}
//             </h2>
//             <p className="text-gray-500 mt-2">
//               Shfifon Street 9, Eilat, 88013, Israel
//             </p>
//             <p className="text-[#F97316] font-medium mt-1">
//               Very good - 8.1 / 959 reviews
//             </p>
//             <div className="flex items-center space-x-6 mt-3">
//               {/* Amenities List */}
//               <ul className="list-disc pl-5">
//                 {amenitiesArray.map((amenity, index) => (
//                   <li key={index} className="text-gray-500">
//                     {amenity.trim()}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Booking Details */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your booking details</h3>
//             <p className="mt-2">
//               Check-in: <strong>{formattedCheckin}</strong> from 15:00
//             </p>
//             <p>
//               Check-out: <strong>{formattedCheckout}</strong> until 11:00
//             </p>
//             <p>
//               Total length of stay: <strong>{lengthOfStay} nights</strong>
//             </p>
//           </div>

//           {/* Price Summary */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">Your price summary</h3>
//             <p className="mt-2">
//               Total: <strong>${totalPrice}</strong> (Includes taxes and charges)
//             </p>
//             <p>
//               Damage deposit (Fully refundable): <strong>₪200</strong>
//             </p>
//           </div>

//           {/* Payment Options */}
//           <div className="border-b pb-6">
//             <h3 className="font-semibold text-xl">How would you like to pay?</h3>
//             <div className="flex items-center space-x-6 mt-3">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="payLater"
//                   checked={paymentMethod === "payLater"}
//                   onChange={() => setPaymentMethod("payLater")}
//                   className="mr-2"
//                 />
//                 Pay later
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="payNow"
//                   checked={paymentMethod === "payNow"}
//                   onChange={() => setPaymentMethod("payNow")}
//                   className="mr-2"
//                 />
//                 Pay now
//               </label>
//             </div>
//           </div>

//           {/* Payment Method */}
//           {paymentMethod === "payNow" && (
//             <form onSubmit={handleSubmit}>
//               <h3 className="font-semibold text-xl">How would you like to pay?</h3>
//               <div className="mt-4 space-y-4">
//                 <div className="space-y-4">
//                   {/* Cardholder's Name */}
//                   <div>
//                     <input
//                       type="text"
//                       placeholder="Cardholder's Name"
//                       className="border p-3 w-full rounded-md"
//                       value={cardholderName}
//                       onChange={(e) => setCardholderName(e.target.value)}
//                     />
//                     {errors.cardholderName && (
//                       <p className="text-red-500">{errors.cardholderName}</p>
//                     )}
//                   </div>

//                   {/* Card Number */}
//                   <div className="relative">
//                     <FaCreditCard className="absolute left-3 top-3 text-gray-500" />
//                     <input
//                       type="text"
//                       placeholder="Card Number"
//                       className="border p-3 pl-10 w-full rounded-md"
//                       value={cardNumber}
//                       onChange={(e) => setCardNumber(e.target.value)}
//                     />
//                     {errors.cardNumber && (
//                       <p className="text-red-500">{errors.cardNumber}</p>
//                     )}
//                   </div>

//                   {/* Expiry Date & CVC */}
//                   <div className="flex space-x-4">
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="Expiry Date"
//                         className="border p-3 w-full rounded-md"
//                         value={expiryDate}
//                         onChange={(e) => setExpiryDate(e.target.value)}
//                       />
//                       {errors.expiryDate && (
//                         <p className="text-red-500">{errors.expiryDate}</p>
//                       )}
//                     </div>
//                     <div>
//                       <input
//                         type="text"
//                         placeholder="CVC"
//                         className="border p-3 w-full rounded-md"
//                         value={cvc}
//                         onChange={(e) => setCvc(e.target.value)}
//                       />
//                       {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}
//                     </div>
//                   </div>
//                 </div>

//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white p-3 rounded-md w-full"
//                 >
//                   Pay Now
//                 </button>
//               </div>
//             </form>
//           )}

//           {/* PayPal Container */}
//           {paymentMethod === "payNow" && (
//             <div
//               ref={paypalContainerRef}
//               className="paypal-container mt-6"
//             />
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { FaCreditCard } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { format, parseISO, differenceInDays } from "date-fns";

export const TransactionPage = () => {
  const { isDarkMode } = useSelector((state) => state.user);

  const location = useLocation();
  const { state } = location;
  const {
    staying,
    checkin,
    checkout,
    people,
    hotelName,
    roomType,
    roomAmeneties,
    totalPrice = 0.1  // Default to 0 if totalPrice is not provided
  } = state || {};

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("payLater");
  const [errors, setErrors] = useState({});

  const paypalContainerRef = useRef(null);
  console.log(state);
  useEffect(() => {
    if (paymentMethod === "payNow") {
      const script = document.createElement("script");
      script.src =
        "https://www.paypal.com/sdk/js?client-id=Abz2HF5NFw7649Ik4Le4hJ5JzOL2ajY6y1tKIMAtBlIMB9IDz2uiGCr5GkzpHDbX2lVWAgZOC9rSgiD-&currency=USD";
      script.onload = () => {
        if (window.paypal && paypalContainerRef.current) {
          window.paypal.Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: "USD",
                      value: totalPrice.toFixed(2) // Set the total price dynamically
                    }
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              await actions.order.capture();
              alert("Payment successful!");
              // Handle successful payment here (e.g., update order status)
            },
            onError: (err) => {
              console.error("PayPal error:", err);
              alert("Payment failed. Please try again.");
            }
          }).render(paypalContainerRef.current);
        }
      };
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [paymentMethod, totalPrice]);

  const validateForm = () => {
    const newErrors = {};

    if (!cardholderName)
      newErrors.cardholderName = "Cardholder's name is required.";
    if (!cardNumber || cardNumber.length !== 16)
      newErrors.cardNumber = "Card number must be 16 digits.";
    if (!expiryDate) newErrors.expiryDate = "Expiry date is required.";
    if (!cvc || cvc.length !== 3) newErrors.cvc = "CVC must be 3 digits.";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        cardholderName,
        cardNumber,
        expiryDate,
        cvc,
        paymentMethod,
      };

      console.log("Form data:", formData);
      alert("Payment submitted successfully!");
    }
  };

  // Parse room amenities into an array
  const amenitiesArray = roomAmeneties ? roomAmeneties.split(",") : [];

  // Format dates using date-fns
  const formattedCheckin = checkin
    ? format(parseISO(checkin), "EEE d MMM yyyy")
    : "";
  const formattedCheckout = checkout
    ? format(parseISO(checkout), "EEE d MMM yyyy")
    : "";

  // Calculate length of stay
  const checkinDate = checkin ? parseISO(checkin) : new Date();
  const checkoutDate = checkout ? parseISO(checkout) : new Date();
  const lengthOfStay = differenceInDays(checkoutDate, checkinDate);

  return (
    <div className={`${isDarkMode ? "Dark" : ""}`}>
      <div className="max-w-4xl mx-auto p-10">
        <div className="border rounded-lg shadow-lg p-8 space-y-6">
          {/* Hotel Details */}
          <div className="border-b pb-6">
            <h2 className="font-bold text-2xl">
              {hotelName} - {roomType}
            </h2>
            <p className="text-gray-500 mt-2">
              Shfifon Street 9, Eilat, 88013, Israel
            </p>
            <p className="text-[#F97316] font-medium mt-1">
              Very good - 8.1 / 959 reviews
            </p>
            <div className="flex items-center space-x-6 mt-3">
              {/* Amenities List */}
              <ul className="list-disc pl-5">
                {amenitiesArray.map((amenity, index) => (
                  <li key={index} className="text-gray-500">
                    {amenity.trim()}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Booking Details */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">Your booking details</h3>
            <p className="mt-2">
              Check-in: <strong>{formattedCheckin}</strong> from 15:00
            </p>
            <p>
              Check-out: <strong>{formattedCheckout}</strong> until 11:00
            </p>
            <p>
              Total length of stay: <strong>{lengthOfStay} nights</strong>
            </p>
          </div>

          {/* Price Summary */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">Your price summary</h3>
            <p className="mt-2">
              Total: <strong>${totalPrice.toFixed(2)}</strong> (Includes taxes and charges)
            </p>
            <p>
              Damage deposit (Fully refundable): <strong>₪200</strong>
            </p>
          </div>

          {/* Payment Options */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">How would you like to pay?</h3>
            <div className="flex items-center space-x-6 mt-3">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="payLater"
                  checked={paymentMethod === "payLater"}
                  onChange={() => setPaymentMethod("payLater")}
                  className="mr-2"
                />
                Pay later
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="payment"
                  value="payNow"
                  checked={paymentMethod === "payNow"}
                  onChange={() => setPaymentMethod("payNow")}
                  className="mr-2"
                />
                Pay now
              </label>
            </div>
          </div>

          {/* Payment Method */}
          {paymentMethod === "payNow" && (
            <>
              <form onSubmit={handleSubmit}>
                <h3 className="font-semibold text-xl">Enter payment details</h3>
                <div className="mt-4 space-y-4">
                  <div className="space-y-4">
                    {/* Cardholder's Name */}
                    <div>
                      <input
                        type="text"
                        placeholder="Cardholder's Name"
                        className="border p-3 w-full rounded-md"
                        value={cardholderName}
                        onChange={(e) => setCardholderName(e.target.value)}
                      />
                      {errors.cardholderName && (
                        <p className="text-red-500">{errors.cardholderName}</p>
                      )}
                    </div>

                    {/* Card Number */}
                    <div className="relative">
                      <FaCreditCard className="absolute left-3 top-3 text-gray-500" />
                      <input
                        type="text"
                        placeholder="Card Number"
                        className="border p-3 pl-10 w-full rounded-md"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                      />
                      {errors.cardNumber && (
                        <p className="text-red-500">{errors.cardNumber}</p>
                      )}
                    </div>

                    {/* Expiry Date */}
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="border p-3 w-full rounded-md"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                      />
                      {errors.expiryDate && (
                        <p className="text-red-500">{errors.expiryDate}</p>
                      )}
                    </div>

                    {/* CVC */}
                    <div className="space-y-2">
                      <input
                        type="text"
                        placeholder="CVC"
                        className="border p-3 w-full rounded-md"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                      />
                      {errors.cvc && <p className="text-red-500">{errors.cvc}</p>}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 text-white p-3 rounded-md w-full"
                  >
                    Pay Now
                  </button>
                </div>
              </form>

              {/* PayPal Container */}
              <div
                ref={paypalContainerRef}
                className="paypal-container mt-6"
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
};