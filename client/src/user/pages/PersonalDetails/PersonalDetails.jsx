import React, { useState } from "react";
import { useSelector } from "react-redux";

export const PersonalDetails = () => {
  const { isDarkMode } = useSelector((state) => state.user);

  // Define initial state for the form fields
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Handler to update form data state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Email validation regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Handler for form submission
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
  };

  // Fake order details for demonstration
  const orderDetails = {
    hotelName: "Sunny Beach Resort",
    guests: 2,
    roomType: "Deluxe Suite",
    costPerNight: 150,
    totalNights: 3,
    totalPrice: 150 * 3,
  };

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="bg p-6">
        <div className="flex justify-center items-start min-h-screen p-4">
          <div className="flex w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-2xl">
            {/* Left Side: Personal Details Form */}
            <div className="w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-[#F97316]">
                Personal Details
              </h2>

              {/* Introduction Section */}
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-md dark:shadow-xl">
                <h3 className="text-lg font-medium mb-2">Introduction</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Please provide your personal details to complete the booking
                  process. We need this information to ensure your reservation
                  is processed accurately.
                </p>
              </div>

              {/* Selection Section */}
              <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-700 border rounded-md shadow-md dark:shadow-xl">
                <h3 className="text-lg font-medium mb-2">Your Selection</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Hotel Name:</strong> {orderDetails.hotelName}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Guests:</strong> {orderDetails.guests}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  <strong>Room Type:</strong> {orderDetails.roomType}
                </p>
                <p className="text-sm text-blue-600 hover:underline cursor-pointer">
                  Change selection
                </p>
              </div>

              {/* Form Section */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input border rounded p-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input border rounded p-2 w-full"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input border rounded p-2 w-full"
                    required
                    pattern={emailPattern.source}
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input border rounded p-2 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="btn py-2 px-4 rounded bg-orange-500 text-white font-semibold"
                >
                  Continue
                </button>
              </form>
            </div>

            {/* Right Side: Order Details */}
            <div className="w-1/3 bg-gray-100 dark:bg-gray-700 p-6 rounded-r-lg shadow-lg dark:shadow-2xl">
              <h3 className="text-xl font-semibold mb-4 text-[#F97316]">
                Order Summary
              </h3>
              <p className="mb-2">
                <strong>Hotel Name:</strong> {orderDetails.hotelName}
              </p>
              <p className="mb-2">
                <strong>Guests:</strong> {orderDetails.guests}
              </p>
              <p className="mb-2">
                <strong>Room Type:</strong> {orderDetails.roomType}
              </p>
              <p className="mb-2">
                <strong>Cost per Night:</strong> ${orderDetails.costPerNight}
              </p>
              <p className="mb-4">
                <strong>Total Price:</strong> ${orderDetails.totalPrice}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
