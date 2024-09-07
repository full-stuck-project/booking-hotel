import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const AccessToken = "gri0mwwgC8jPE7dvYYmoxrZsFGiJ";

// New API endpoint
// Updated fetchHotelOffers function
const fetchHotelOffers = async (cityCode, adults, rooms) => {
  const url = "https://test.api.amadeus.com/v3/shopping/hotel-offers";
  const params = new URLSearchParams({
    cityCode: cityCode,
    adults: adults,
    rooms: rooms,
    checkInDate: "2023-11-22", // You should pass this dynamically from formData
    checkOutDate: "2023-11-25", // This as well
  });

  try {
    const response = await axios.get(`${url}?${params}`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching hotel offers:", error);
  }
};

const fetchCityCodes = async (country) => {
  return ["NYC", "LAX"];
};

export const SearchFilter = ({ className = "" }) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [hidden, setHidden] = useState(true);
  const [formData, setFormData] = useState({
    country: "",
    startDate: "",
    endDate: "",
    adults: 1,
    children: 0,
    rooms: 1,
  });
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countryOptions = data.map((country) => ({
          value: country.cca2.toLowerCase(),
          label: country.name.common,
        }));
        setCountries(countryOptions);
        setFilteredCountries(countryOptions);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const showDetails = () => setHidden(!hidden);

  const handleCountryChange = (input) => {
    const filtered = countries.filter((country) =>
      country.label.toLowerCase().startsWith(input.toLowerCase())
    );
    setFormData((prevFormData) => ({
      ...prevFormData,
      country: input,
    }));
    setFilteredCountries(filtered);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cityCodes = await fetchCityCodes(formData.country);

    const hotelPromises = cityCodes.map((cityCode) =>
      fetchHotelOffers(cityCode, formData.adults, formData.rooms)
    );
    const hotelResults = await Promise.all(hotelPromises);
    const allHotels = hotelResults.flat();

    setHotels(allHotels);
    console.log("List of Hotels:", allHotels);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col p-4 bg-white rounded-lg shadow-md ${className}`}
    >
      <h2 className="text-4xl font-semibold text-black text-center mb-2">
        Hotel Search
      </h2>
      <strong className="text-center text-black mb-6 text-2xl">
        Order your dream vacation now!
      </strong>
      <div className="flex gap-4">
        {/* Country Input */}
        <div className="relative flex-1">
          <input
            type="text"
            style={{ height: "50px" }}
            className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
            placeholder="Enter country"
            name="country"
            value={formData.country}
            onChange={(e) => {
              handleInputChange(e);
              handleCountryChange(e.target.value);
            }}
          />
          <i className="fas fa-globe-americas absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
        </div>

        {/* Check-In Date Input */}
        <div className="relative flex-1">
          <input
            type="date"
            style={{ height: "50px" }}
            className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
          <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
        </div>

        {/* Check-Out Date Input */}
        <div className="relative flex-1">
          <input
            type="date"
            style={{ height: "50px" }}
            className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
          />
          <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
        </div>
      </div>

      {/* Guest and Room Details */}
      <div className="relative mt-4">
        <button
          type="button"
          className="bg-gray-100 w-full h-[50px] pl-12 pr-4 border rounded-lg border-gray-300 flex items-center justify-between text-gray-800 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
          onClick={showDetails}
        >
          <span className="flex items-center gap-2">
            <i className="fas fa-user text-gray-600 text-lg"></i>
            {adult} Adult{adult > 1 && "s"}
          </span>
          <span className="flex items-center gap-2">
            <i className="fas fa-child text-gray-600 text-lg"></i>
            {children} Child{children !== 1 && "ren"}
          </span>
          <span className="flex items-center gap-2">
            <i className="fas fa-bed text-gray-600 text-lg"></i>
            {room} Room{room > 1 && "s"}
          </span>
        </button>
        {!hidden && (
          <div className="absolute top-full left-0 w-full mt-2 p-4 border border-gray-300 bg-white rounded-lg shadow-lg z-10">
            <div className="flex items-center mb-2">
              <i className="fas fa-user text-gray-600 text-lg mr-3"></i>
              <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
                <p className="text-sm">Adults</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setAdult((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-minus text-gray-600"></i>
                  </button>
                  <span className="px-4">{adult}</span>
                  <button
                    type="button"
                    onClick={() => setAdult((prev) => prev + 1)}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-child text-gray-600 text-lg mr-3"></i>
              <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
                <p className="text-sm">Children</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => Math.max(prev - 1, 0))}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-minus text-gray-600"></i>
                  </button>
                  <span className="px-4">{children}</span>
                  <button
                    type="button"
                    onClick={() => setChildren((prev) => prev + 1)}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-bed text-gray-600 text-lg mr-3"></i>
              <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
                <p className="text-sm">Rooms</p>
                <div className="flex items-center">
                  <button
                    type="button"
                    onClick={() => setRoom((prev) => Math.max(prev - 1, 1))}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-minus text-gray-600"></i>
                  </button>
                  <span className="px-4">{room}</span>
                  <button
                    type="button"
                    onClick={() => setRoom((prev) => prev + 1)}
                    className="bg-gray-200 p-1 rounded-full"
                  >
                    <i className="fas fa-plus text-gray-600"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-center mt-6">
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
        >
          Search
        </button>
      </div>

      {hotels.length > 0 && (
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-black mb-2">
            Hotel Results
          </h3>
          <ul>
            {hotels.map((hotel) => (
              <li key={hotel.id} className="mb-4 border-b border-gray-200 pb-2">
                <h4 className="text-lg font-bold">{hotel.name}</h4>
                <p>{hotel.address}</p>
                <p className="text-gray-600">{hotel.rating} Stars</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </form>
  );
};

// import React, { useState, useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import axios from "axios";

// // הפונקציה לחיפוש מלונות בניו יורק

// export const SearchFilter = ({ className = "" }) => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [formData, setFormData] = useState({
//     country: "",
//     startDate: "",
//     endDate: "",
//     adults: 1,
//     children: 0,
//     rooms: 1,
//   });
//   const [hotels, setHotels] = useState([]);
//   const [hidden, setHidden] = useState(true);

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const countryOptions = data.map((country) => ({
//           value: country.cca2.toLowerCase(),
//           label: country.name.common,
//         }));
//         setCountries(countryOptions);
//         setFilteredCountries(countryOptions);
//       })
//       .catch((error) => {
//         console.error("Error fetching countries:", error);
//       });
//   }, []);

//   const handleCountryChange = (input) => {
//     const filtered = countries.filter((country) =>
//       country.label.toLowerCase().startsWith(input.toLowerCase())
//     );
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       country: input,
//     }));
//     setFilteredCountries(filtered);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//   };

//   const toggleDetails = () => setHidden(!hidden);

//   const handleSearch = async () => {
//     if (formData.country && formData.startDate && formData.endDate) {
//       const cityCodes = await fetchCityCodes(formData.country);
//       const hotelPromises = cityCodes.map((cityCode) =>
//         fetchHotelOffers(
//           cityCode,
//           formData.adults,
//           formData.rooms,
//           formData.startDate,
//           formData.endDate
//         )
//       );
//       const hotelResults = await Promise.all(hotelPromises);
//       const allHotels = hotelResults.flat();
//       setHotels(allHotels);
//     }
//   };

//   return (
//     <form
//       className={`flex flex-col p-4 bg-white rounded-lg shadow-md ${className}`}
//     >
//       <h2 className="text-4xl font-semibold text-black text-center mb-2">
//         Hotel Search
//       </h2>
//       <strong className="text-center text-black mb-6 text-2xl">
//         Order your dream vacation now!
//       </strong>
//       <div className="flex gap-4">
//         {/* Country Input */}
//         <div className="relative flex-1">
//           <input
//             type="text"
//             style={{ height: "50px" }}
//             className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//             placeholder="Enter country"
//             name="country"
//             value={formData.country}
//             onChange={(e) => {
//               handleInputChange(e);
//               handleCountryChange(e.target.value);
//             }}
//           />
//           <i className="fas fa-globe-americas absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
//         </div>

//         {/* Check-In Date Input */}
//         <div className="relative flex-1">
//           <input
//             type="date"
//             style={{ height: "50px" }}
//             className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//             name="startDate"
//             value={formData.startDate}
//             onChange={handleInputChange}
//           />
//           <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
//         </div>

//         {/* Check-Out Date Input */}
//         <div className="relative flex-1">
//           <input
//             type="date"
//             style={{ height: "50px" }}
//             className="bg-gray-100 text-gray-800 w-full pl-12 pr-4 border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//             name="endDate"
//             value={formData.endDate}
//             onChange={handleInputChange}
//           />
//           <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
//         </div>
//       </div>

//       {/* Guest and Room Details */}
//       <div className="relative mt-4">
//         <button
//           type="button"
//           className="bg-gray-100 w-full h-[50px] pl-12 pr-4 border rounded-lg border-gray-300 flex items-center justify-between text-gray-800 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//           onClick={toggleDetails}
//         >
//           <span className="flex items-center gap-2">
//             <i className="fas fa-user text-gray-600 text-lg"></i>
//             {formData.adults} Adult{formData.adults > 1 && "s"}
//           </span>
//           <span className="flex items-center gap-2">
//             <i className="fas fa-child text-gray-600 text-lg"></i>
//             {formData.children} Child{formData.children !== 1 && "ren"}
//           </span>
//           <span className="flex items-center gap-2">
//             <i className="fas fa-bed text-gray-600 text-lg"></i>
//             {formData.rooms} Room{formData.rooms > 1 && "s"}
//           </span>
//         </button>
//         {!hidden && (
//           <div className="absolute top-full left-0 w-full mt-2 p-4 border border-gray-300 bg-white rounded-lg shadow-lg z-10">
//             <div className="flex items-center mb-2">
//               <i className="fas fa-user text-gray-600 text-lg mr-3"></i>
//               <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
//                 <p className="text-sm">Adults</p>
//                 <div className="flex items-center">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         adults: Math.max(prev.adults - 1, 1),
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-minus text-gray-600"></i>
//                   </button>
//                   <span className="px-4">{formData.adults}</span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         adults: prev.adults + 1,
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-plus text-gray-600"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center mb-2">
//               <i className="fas fa-child text-gray-600 text-lg mr-3"></i>
//               <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
//                 <p className="text-sm">Children</p>
//                 <div className="flex items-center">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         children: Math.max(prev.children - 1, 0),
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-minus text-gray-600"></i>
//                   </button>
//                   <span className="px-4">{formData.children}</span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         children: prev.children + 1,
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-plus text-gray-600"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//             <div className="flex items-center">
//               <i className="fas fa-bed text-gray-600 text-lg mr-3"></i>
//               <div className="flex-grow flex justify-between items-center border border-gray-300 p-2 rounded-lg">
//                 <p className="text-sm">Rooms</p>
//                 <div className="flex items-center">
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         rooms: Math.max(prev.rooms - 1, 1),
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-minus text-gray-600"></i>
//                   </button>
//                   <span className="px-4">{formData.rooms}</span>
//                   <button
//                     type="button"
//                     onClick={() =>
//                       setFormData((prev) => ({
//                         ...prev,
//                         rooms: prev.rooms + 1,
//                       }))
//                     }
//                     className="bg-gray-200 p-1 rounded-full"
//                   >
//                     <i className="fas fa-plus text-gray-600"></i>
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Search Button */}
//       <button
//         type="button"
//         className="bg-orange-500 text-white py-2 px-4 mt-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
//         onClick={handleSearch}
//       >
//         Search Hotels
//       </button>

//       {/* Display Hotels */}
//       <div className="mt-6">
//         {hotels.length > 0 ? (
//           <ul>
//             {hotels.map((hotel, index) => (
//               <li key={index} className="border-b border-gray-300 pb-4 mb-4">
//                 <h3 className="text-xl font-semibold">{hotel.name}</h3>
//                 <p className="text-gray-700">{hotel.address}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No hotels found.</p>
//         )}
//       </div>
//     </form>
//   );
// };
