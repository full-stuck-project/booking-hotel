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
}) => {
  const { isDarkMode } = useSelector((state) => state.user);

  // Sample data
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

  return (
    <div className={`flex justify-center ${isDarkMode ? "dark" : ""}`}>
      <div className="flex flex-col h-[500px] w-[500px] border-[2px] border-black div shadow-lg rounded-lg p-6">
        <h1 className="text-orange-500 text-center text-[2rem] font-semibold mb-4">
          Booking Confirmed{" "}
          <FontAwesomeIcon icon={faCheck} className=" text-green-700" />
        </h1>

        {/* Personal details */}
        <div className="flex flex-col mb-6">
          <p className="h2 text-lg font-semibold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Full Name: {`${firstName} ${lastName}`}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            Phone: {phone}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            Email: {email}
          </p>
        </div>

        {/* Hotel details */}
        <div>
          <p className="h2 text-lg font-semibold mb-2">
            <FontAwesomeIcon icon={faHotel} className="mr-2" />
            Hotel Details
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faHotel} className="mr-2" />
            Hotel: {hotel}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faDoorClosed} className="mr-2" />
            Room: {room}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faDollarSign} className="mr-2" />
            Price: {price}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Check-in: {check_in}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
            Check-out: {check_out}
          </p>
          <p className="h2 text-md mb-1">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
            Location: {location}
          </p>
        </div>
      </div>
    </div>
  );
};
