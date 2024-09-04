// import React, { useState, useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// export const SearchFilter = ({ className = "" }) => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [country, setCountry] = useState("");
//   const [adult, setAdult] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [room, setRoom] = useState(1);
//   const [hidden, setHidden] = useState(true);
//   const [formData, setFormData] = useState({
//     country: "",
//     startDate: "",
//     endDate: "",
//     adults: 1,
//     children: 0,
//     rooms: 1,
//   });

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

//   const showDetails = () => setHidden(!hidden);

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

//   const handleIncreaseAdult = () => {
//     setAdult((prevAdult) => {
//       const newAdult = prevAdult + 1;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         adults: newAdult,
//       }));
//       return newAdult;
//     });
//   };

//   const handleDecreaseAdult = () => {
//     setAdult((prevAdult) => {
//       const newAdult = prevAdult > 1 ? prevAdult - 1 : prevAdult;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         adults: newAdult,
//       }));
//       return newAdult;
//     });
//   };

//   const handleIncreaseChildren = () => {
//     setChildren((prevChildren) => {
//       const newChildren = prevChildren + 1;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         children: newChildren,
//       }));
//       return newChildren;
//     });
//   };

//   const handleDecreaseChildren = () => {
//     setChildren((prevChildren) => {
//       const newChildren = prevChildren > 0 ? prevChildren - 1 : prevChildren;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         children: newChildren,
//       }));
//       return newChildren;
//     });
//   };

//   const handleIncreaseRoom = () => {
//     setRoom((prevRoom) => {
//       const newRoom = prevRoom + 1;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         rooms: newRoom,
//       }));
//       return newRoom;
//     });
//   };

//   const handleDecreaseRoom = () => {
//     setRoom((prevRoom) => {
//       const newRoom = prevRoom > 0 ? prevRoom - 1 : prevRoom;
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         rooms: newRoom,
//       }));
//       return newRoom;
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission, such as sending formData to a server
//     console.log(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
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
//           onClick={showDetails}
//         >
//           <span className="flex items-center gap-2">
//             <i className="fas fa-user text-gray-600 text-lg"></i>
//             {adult} Adult{adult > 1 && "s"}
//           </span>
//           <span className="flex items-center gap-2">
//             <i className="fas fa-child text-gray-600 text-lg"></i>
//             {children} Child{children !== 1 && "ren"}
//           </span>
//           <span className="flex items-center gap-2">
//             <i className="fas fa-bed text-gray-600 text-lg"></i>
//             {room} Room{room > 1 && "s"}
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
//                     className="text-xl px-2"
//                     onClick={handleDecreaseAdult}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{adult}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={handleIncreaseAdult}
//                   >
//                     +
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
//                     className="text-xl px-2"
//                     onClick={handleDecreaseChildren}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{children}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={handleIncreaseChildren}
//                   >
//                     +
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
//                     className="text-xl px-2"
//                     onClick={handleDecreaseRoom}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{room}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={handleIncreaseRoom}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="mt-6 w-[20%] bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg shadow-lg focus:outline-none transition duration-300 ease-in-out"
//       >
//         Search Hotels
//       </button>
//     </form>
//   );
// };

// import React, { useState, useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// export const SearchFilter = ({ className = "" }) => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [showList, setShowList] = useState(false);
//   const [hidden, setHidden] = useState(true);
//   const [formData, setFormData] = useState({
//     country: "",
//     startDate: "",
//     endDate: "",
//     adults: 1,
//     children: 0,
//     rooms: 1,
//   });

//   useEffect(() => {
//     fetch("https://restcountries.com/v3.1/all")
//       .then((response) => response.json())
//       .then((data) => {
//         const countryOptions = data.map((country) => ({
//           value: country.cca2.toLowerCase(),
//           label: country.name.common,
//         }));
//         setCountries(countryOptions);
//       })
//       .catch((error) => {
//         console.error("Error fetching countries:", error);
//       });
//   }, []);

//   const handleCountryChange = (input) => {
//     if (input.trim() === "") {
//       setShowList(false);
//       setFilteredCountries([]);
//       return;
//     }

//     const filtered = countries.filter((country) =>
//       country.label.toLowerCase().startsWith(input.toLowerCase())
//     );
//     setFilteredCountries(filtered);
//     setShowList(true);
//   };

//   const handleCountrySelect = (country) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       country: country.label,
//     }));
//     setShowList(false);
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [name]: value,
//     }));
//     if (name === "country") {
//       handleCountryChange(value);
//     }
//   };

//   const handleIncrement = (field) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [field]: prevFormData[field] + 1,
//     }));
//   };

//   const handleDecrement = (field) => {
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [field]: prevFormData[field] > 0 ? prevFormData[field] - 1 : 0,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className={`flex flex-col p-4 bg-white rounded-lg shadow-md ${className}`}
//     >
//       <h2 className="text-4xl font-semibold text-black text-center mb-2">
//         Hotel Search
//       </h2>
//       <p className="text-center text-black mb-6 text-2xl">
//         Order your dream vacation now!
//       </p>
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
//             onChange={handleInputChange}
//           />
//           <i className="fas fa-globe-americas absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-lg"></i>
//           {showList && filteredCountries.length > 0 && (
//             <ul className="absolute left-0 right-0 bg-white border border-gray-300 rounded-lg mt-1 max-h-40 overflow-y-auto z-10">
//               {filteredCountries.map((country) => (
//                 <li
//                   key={country.value}
//                   className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
//                   onClick={() => handleCountrySelect(country)}
//                 >
//                   {country.label}
//                 </li>
//               ))}
//             </ul>
//           )}
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
//           onClick={() => setHidden(!hidden)}
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
//                     className="text-xl px-2"
//                     onClick={() => handleDecrement("adults")}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{formData.adults}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={() => handleIncrement("adults")}
//                   >
//                     +
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
//                     className="text-xl px-2"
//                     onClick={() => handleDecrement("children")}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{formData.children}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={() => handleIncrement("children")}
//                   >
//                     +
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
//                     className="text-xl px-2"
//                     onClick={() => handleDecrement("rooms")}
//                   >
//                     -
//                   </button>
//                   <span className="text-lg">{formData.rooms}</span>
//                   <button
//                     type="button"
//                     className="text-xl px-2"
//                     onClick={() => handleIncrement("rooms")}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       <button
//         type="submit"
//         className="bg-orange-500 text-white font-semibold py-3 mt-4 rounded-lg hover:bg-orange-600 transition duration-300 ease-in-out"
//       >
//         Search Hotels
//       </button>
//     </form>
//   );
// };

import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";

const AccessToken = "s4sRujG0UcVrPHmFTmMUxG5JnYXT";

// New API endpoint
const fetchHotelsByCity = async (cityCode, radius, radiusUnit) => {
  const url = `https://new.api.example.com/hotels/search`;
  const params = new URLSearchParams({
    cityCode,
    radius,
    radiusUnit,
    hotelSource: "ALL",
  });

  try {
    const response = await axios.get(`${url}?${params}`, {
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
    });

    return response.data.hotels; // Assuming the API returns hotels in the `hotels` field
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return [];
  }
};

// Replace with actual implementation
const fetchCityCodes = async (country) => {
  // Implement this function to fetch city codes based on the country
  // For now, returning a dummy array of city codes
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
      fetchHotelsByCity(cityCode, 5, "KM")
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
