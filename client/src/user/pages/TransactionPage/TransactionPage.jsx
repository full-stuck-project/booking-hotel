// import { useState } from "react";
// import { useSelector } from "react-redux";
// import { FaCreditCard } from "react-icons/fa";

// import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
// import 


// export const TransactionPage = () => {
//   const { isDarkMode } = useSelector((state) => state.user);

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
//       // Here, you can send the formData to the server or handle it as needed
//       alert("Payment submitted successfully!");
//     }
//   };

//   return (
//     <div className={`${isDarkMode ? "dark" : ""}`}>
//       <div className="bg">
//         <div className="max-w-4xl mx-auto p-10">
//           <div className="div border rounded-lg shadow-lg  p-8 space-y-6">
//             {/* Hotel Details */}
//             <div className="border-b pb-6">
//               <h2 className="font-bold text-2xl">
//                 Hotel Astral Nirvana Club - Half Board
//               </h2>
//               <p className="text-gray-500 mt-2">
//                 Shfifon Street 9, Eilat, 88013, Israel
//               </p>
//               <p className="text-[#F97316] font-medium mt-1">
//                 Very good - 8.1 / 959 reviews
//               </p>
//               <div className="flex items-center space-x-6 mt-3">
//                 <span className="text-gray-500">Free WiFi</span>
//                 <span className="text-gray-500">Parking</span>
//                 <span className="text-gray-500">Swimming Pool</span>
//               </div>
//             </div>

//             {/* Booking Details */}
//             <div className="border-b pb-6">
//               <h3 className="font-semibold text-xl">Your booking details</h3>
//               <p className="mt-2">
//                 Check-in: <strong>Thu 12 Sept 2024</strong> from 15:00
//               </p>
//               <p>
//                 Check-out: <strong>Sat 14 Sept 2024</strong> until 11:00
//               </p>
//               <p>
//                 Total length of stay: <strong>2 nights</strong>
//               </p>
//             </div>

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

//             {/* Payment Options */}

//             {/*  PAYPAL */}

// const MyPayPalButton = () => (
//   <PayPalScriptProvider options={{ "client-id": "your-client-id" }}>
//     <PayPalButtons
//       createOrder={(data, actions) => {
//         return actions.order.create({
//           purchase_units: [{
//             amount: {
//               value: "0.01"  // Replace with your payment amount
//             }
//           }]
//         });
//       }}
//       onApprove={(data, actions) => {
//         return actions.order.capture().then((details) => {
//           alert("Transaction completed by " + details.payer.name.given_name);
//         });
//       }}
//     />
//   </PayPalScriptProvider>
// );



//             <div className="border-b pb-6">
//               <h3 className="font-semibold text-xl">
//                 When would you like to pay?
//               </h3>
//               <div className="flex items-center space-x-6 mt-3">
//                 <label className="flex items-center">
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

//             {/* Payment Method */}
//             <form onSubmit={handleSubmit}>
//               <h3 className="font-semibold text-xl">
//                 How would you like to pay?
//               </h3>
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
//                       {errors.cvc && (
//                         <p className="text-red-500">{errors.cvc}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-6">
//                 <button type="submit" className="btn px-6 py-3 rounded-md">
//                   Pay Now
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
import { useState, useEffect, useRef } from "react";

import { useState } from "react";
import { useSelector } from "react-redux";
import { FaCreditCard } from "react-icons/fa";

export const TransactionPage = () => {
  const { isDarkMode } = useSelector((state) => state.user);

  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("payLater");
  const [errors, setErrors] = useState({});

  const paypalContainerRef = useRef(null);

  useEffect(() => {
    if (paymentMethod === "payNow") {
      const script = document.createElement("script");
      script.src = "https://www.paypal.com/sdk/js?client-id=BAAaZsk8Xj3gQRwVdhOnUDLkUZ1JM2sRQUvGk_uMK_eby7u5sAPOj4fuWncLrm-eQxrXhuML7m4vPvRzIY&components=hosted-buttons&disable-funding=venmo&currency=ILS";
      script.onload = () => {
        if (window.paypal && paypalContainerRef.current) {
          window.paypal.HostedButtons({
            hostedButtonId: "9UJA2ZVLS7QYS",
          }).render(paypalContainerRef.current);
        }
      };
      document.body.appendChild(script);

      // Cleanup script on component unmount
      return () => {
        document.body.removeChild(script);
      };
    }
  }, [paymentMethod]);

  const validateForm = () => {
    const newErrors = {};

    if (!cardholderName) newErrors.cardholderName = "Cardholder's name is required.";
    if (!cardNumber || cardNumber.length !== 16) newErrors.cardNumber = "Card number must be 16 digits.";
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

  return (

    <div className={`${isDarkMode ? "dark" : ""}`}>
      <div className="bg">
        <div className="max-w-4xl mx-auto p-10">
          <div className="border rounded-lg shadow-lg p-8 space-y-6">
            {/* Hotel Details */}
            <div className="border-b pb-6">
              <h2 className="font-bold text-2xl">Hotel Astral Nirvana Club - Half Board</h2>
              <p className="text-gray-500 mt-2">Shfifon Street 9, Eilat, 88013, Israel</p>
              <p className="text-[#F97316] font-medium mt-1">Very good - 8.1 / 959 reviews</p>
              <div className="flex items-center space-x-6 mt-3">
                <span className="text-gray-500">Free WiFi</span>
                <span className="text-gray-500">Parking</span>
                <span className="text-gray-500">Swimming Pool</span>
              </div>

    <div className={`${isDarkMode ? "dark:bg-gray-800" : "bg-white"}`}>
      <div className="max-w-4xl mx-auto p-10">
        <div className="border rounded-lg shadow-lg p-8 space-y-6">
          {/* Hotel Details */}
          <div className="border-b pb-6">
            <h2 className="font-bold text-2xl">
              Hotel Astral Nirvana Club - Half Board
            </h2>
            <p className="text-gray-500 mt-2">
              Shfifon Street 9, Eilat, 88013, Israel
            </p>
            <p className="text-[#F97316] font-medium mt-1">
              Very good - 8.1 / 959 reviews
            </p>
            <div className="flex items-center space-x-6 mt-3">
              <span className="text-gray-500">Free WiFi</span>
              <span className="text-gray-500">Parking</span>
              <span className="text-gray-500">Swimming Pool</span>

            </div>
          </div>


            {/* Booking Details */}
            <div className="border-b pb-6">
              <h3 className="font-semibold text-xl">Your booking details</h3>
              <p className="mt-2">Check-in: <strong>Thu 12 Sept 2024</strong> from 15:00</p>
              <p>Check-out: <strong>Sat 14 Sept 2024</strong> until 11:00</p>
              <p>Total length of stay: <strong>2 nights</strong></p>
            </div>

            {/* Price Summary */}
            <div className="border-b pb-6">
              <h3 className="font-semibold text-xl">Your price summary</h3>
              <p className="mt-2">Total: <strong>₪3,930.44</strong> (Includes taxes and charges)</p>
              <p>Damage deposit (Fully refundable): <strong>₪200</strong></p>

          {/* Booking Details */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">Your booking details</h3>
            <p className="mt-2">
              Check-in: <strong>Thu 12 Sept 2024</strong> from 15:00
            </p>
            <p>
              Check-out: <strong>Sat 14 Sept 2024</strong> until 11:00
            </p>
            <p>
              Total length of stay: <strong>2 nights</strong>
            </p>
          </div>

          {/* Price Summary */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">Your price summary</h3>
            <p className="mt-2">
              Total: <strong>₪3,930.44</strong> (Includes taxes and charges)
            </p>
            <p>
              Damage deposit (Fully refundable): <strong>₪200</strong>
            </p>
          </div>

          {/* Payment Options */}
          <div className="border-b pb-6">
            <h3 className="font-semibold text-xl">
              When would you like to pay?
            </h3>
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


            {/* Payment Options */}
            <div className="border-b pb-6">
              <h3 className="font-semibold text-xl">When would you like to pay?</h3>
              <div className="flex items-center space-x-6 mt-3">
                <label className="flex items-center">

          {/* Payment Method */}
          <form onSubmit={handleSubmit}>
            <h3 className="font-semibold text-xl">How would you like to pay?</h3>
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


            {/* Payment Method */}
            {paymentMethod === "payNow" && (
              <div className="border-b pb-6">
                <h3 className="font-semibold text-xl">How would you like to pay?</h3>
                <form onSubmit={handleSubmit}>
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

                      {/* Expiry Date & CVC */}
                      <div className="flex space-x-4">
                        <div>
                          <input
                            type="text"
                            placeholder="Expiry Date"
                            className="border p-3 w-full rounded-md"
                            value={expiryDate}
                            onChange={(e) => setExpiryDate(e.target.value)}
                          />
                          {errors.expiryDate && (
                            <p className="text-red-500">{errors.expiryDate}</p>
                          )}
                        </div>
                        <div>
                          <input
                            type="text"
                            placeholder="CVC"
                            className="border p-3 w-full rounded-md"
                            value={cvc}
                            onChange={(e) => setCvc(e.target.value)}
                          />
                          {errors.cvc && (
                            <p className="text-red-500">{errors.cvc}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <button type="submit" className="btn px-6 py-3 rounded-md">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* PayPal Button */}
            {paymentMethod === "payNow" && (
              <div className="mt-6">
                <div ref={paypalContainerRef} />
              </div>
            )}
          </div>

                {/* Expiry Date & CVC */}
                <div className="flex space-x-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Expiry Date"
                      className="border p-3 w-full rounded-md"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                    />
                    {errors.expiryDate && (
                      <p className="text-red-500">{errors.expiryDate}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="CVC"
                      className="border p-3 w-full rounded-md"
                      value={cvc}
                      onChange={(e) => setCvc(e.target.value)}
                    />
                    {errors.cvc && (
                      <p className="text-red-500">{errors.cvc}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Pay Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};