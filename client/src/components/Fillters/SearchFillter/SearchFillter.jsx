// import React, { useState, useEffect } from "react";
// import "@fortawesome/fontawesome-free/css/all.min.css";

// export const SearchFilter = () => {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountries, setFilteredCountries] = useState([]);
//   const [country, setCountry] = useState("");
//   const [checkInDate, setCheckInDate] = useState("");
//   const [checkOutDate, setCheckOutDate] = useState("");
//   const [adult, setAdult] = useState(1);
//   const [children, setChildren] = useState(0);
//   const [room, setRoom] = useState(1);
//   const [hidden, setHidden] = useState(true);

//   useEffect(() => {
//     // Fetch country data from REST Countries API
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

//   function showDetails() {
//     setHidden(!hidden);
//   }

//   // Filter countries based on input
//   const handleCountryChange = (input) => {
//     const filtered = countries.filter((country) =>
//       country.label.toLowerCase().startsWith(input.toLowerCase())
//     );
//     setCountry(input);
//     setFilteredCountries(filtered);
//   };

//   function handleIncreaseAdult() {
//     setAdult((prevAdult) => prevAdult + 1);
//   }
//   function handleDecreaseAdult() {
//     setAdult((prevAdult) => {
//       if (prevAdult > 0) {
//         return prevAdult - 1;
//       } else {
//         alert("Can't go below 0");
//         return prevAdult;
//       }
//     });
//   }
//   function handleIncreaseChildren() {
//     setChildren((prevChildren) => prevChildren + 1);
//   }
//   function handleDecreaseChildren() {
//     setChildren((prevChildren) => {
//       if (prevChildren > 0) {
//         return prevChildren - 1;
//       } else {
//         alert("Can't go below 0");
//         return prevChildren;
//       }
//     });
//   }
//   function handleIncreaseRoom() {
//     setRoom((prevRoom) => prevRoom + 1);
//   }

//   function handleDecreaseRoom() {
//     setRoom((prevRoom) => {
//       if (prevRoom > 0) {
//         return prevRoom - 1;
//       } else {
//         alert("Can't go below 0");
//         return prevRoom;
//       }
//     });
//   }

//   return (
//     <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-xl mx-auto">
//       <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
//         Hotel Search
//       </h2>
//       <div className="flex flex-col gap-6">
//         {/* Country Input */}
//         <div className="relative">
//           <input
//             type="text"
//             className="bg-gray-100 text-gray-800 w-full h-[50px] pl-12 pr-4 border rounded-lg border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//             placeholder="Enter country"
//             value={country}
//             onChange={(e) => handleCountryChange(e.target.value)}
//           />
//           <i className="fas fa-globe-americas absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
//         </div>
//         <div className="flex flex-col sm:flex-row gap-4">
//           {/* Check-In Date */}
//           <div className="relative flex-1">
//             <input
//               type="date"
//               className="bg-gray-100 text-gray-800 h-[50px] w-full border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//               placeholder="Check-In Date"
//               value={checkInDate}
//               onChange={(e) => setCheckInDate(e.target.value)}
//             />
//             <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
//           </div>
//           {/* Check-Out Date */}
//           <div className="relative flex-1">
//             <input
//               type="date"
//               className="bg-gray-100 text-gray-800 h-[50px] w-full border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
//               placeholder="Check-Out Date"
//               value={checkOutDate}
//               onChange={(e) => setCheckOutDate(e.target.value)}
//             />
//             <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
//           </div>
//         </div>
//         <div>
//           <i className="fas fa-user text-gray-600 text-xl absolute mt-6 ml-2"></i>

//           <button
//             className="bg-gray-100 p-[10px] w-[50%] border-[2px] rounded-lg mt-3"
//             onClick={showDetails}
//           >
//             {adult} Adult {children} Children {room} Room
//           </button>
//           <div
//             className={`w-[200px] h-[200px] border-[2px] border-gray-300 ${
//               hidden ? "hidden" : ""
//             }`}
//           >
//             <div className="flex justify-between">
//               <p>Adult</p>
//               <div className="mr-5 border-[2px] border-gray-300 w-[100px] text-center ">
//                 <button
//                   className="text-[20px] mr-2"
//                   onClick={handleIncreaseAdult}
//                 >
//                   +
//                 </button>
//                 <span className="text-[20px] mr-2">{adult}</span>
//                 <button
//                   className="text-[20px] mr-2 "
//                   onClick={handleDecreaseAdult}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//             <div className="flex justify-between">
//               <p>Children</p>
//               <div className="mr-5 border-[2px] border-gray-300 w-[100px] text-center">
//                 <button
//                   className="text-[20px] mr-2"
//                   onClick={handleIncreaseChildren}
//                 >
//                   +
//                 </button>
//                 <span className="text-[20px] mr-2">{children}</span>
//                 <button
//                   className="text-[20px] mr-2 "
//                   onClick={handleDecreaseChildren}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//             <div className=" flex justify-between">
//               <p>Rooms</p>
//               <div className="mr-5 border-[2px] border-gray-300 w-[100px] text-center">
//                 <button
//                   className="text-[20px] mr-2"
//                   onClick={handleIncreaseRoom}
//                 >
//                   +
//                 </button>
//                 <span className="text-[20px] mr-2">{room}</span>
//                 <button
//                   className="text-[20px] mr-2 "
//                   onClick={handleDecreaseRoom}
//                 >
//                   -
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* Search Button */}
//         <div className="flex justify-center">
//           <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out">
//             Search
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
import React, { useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export const SearchFilter = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [country, setCountry] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [room, setRoom] = useState(1);
  const [hidden, setHidden] = useState(true);

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
    setCountry(input);
    setFilteredCountries(filtered);
  };

  const handleIncreaseAdult = () => setAdult((prevAdult) => prevAdult + 1);
  const handleDecreaseAdult = () =>
    setAdult((prevAdult) => (prevAdult > 0 ? prevAdult - 1 : prevAdult));

  const handleIncreaseChildren = () =>
    setChildren((prevChildren) => prevChildren + 1);
  const handleDecreaseChildren = () =>
    setChildren((prevChildren) =>
      prevChildren > 0 ? prevChildren - 1 : prevChildren
    );

  const handleIncreaseRoom = () => setRoom((prevRoom) => prevRoom + 1);
  const handleDecreaseRoom = () =>
    setRoom((prevRoom) => (prevRoom > 0 ? prevRoom - 1 : prevRoom));

  return (
    <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-[900px] mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Hotel Search
      </h2>
      <div className="flex flex-col gap-6">
        {/* Country Input */}
        <div className="relative">
          <input
            type="text"
            className="bg-gray-100 text-gray-800 w-full h-[50px] pl-12 pr-4 border rounded-lg border-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
            placeholder="Enter country"
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
          />
          <i className="fas fa-globe-americas absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
        </div>

        {/* Dates Input */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="date"
              className="bg-gray-100 text-gray-800 h-[50px] w-full border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
              placeholder="Check-In Date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
            <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
          </div>
          <div className="relative flex-1">
            <input
              type="date"
              className="bg-gray-100 text-gray-800 h-[50px] w-full border rounded-lg border-gray-300 focus:outline-none focus:border-orange-500 transition duration-300 ease-in-out"
              placeholder="Check-Out Date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
            <i className="fas fa-calendar-day absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
          </div>
        </div>

        {/* Room Details Input */}
        <div className="relative">
          <i className="fas fa-user text-gray-600 text-xl absolute mt-6 ml-2"></i>
          <button
            className="bg-gray-100 p-[10px] w-full border-[2px] rounded-lg mt-3 flex justify-between items-center"
            onClick={showDetails}
          >
            <span>
              {adult} Adult{adult > 1 && "s"}
            </span>
            <span>
              {children} Child{children !== 1 && "ren"}
            </span>
            <span>
              {room} Room{room > 1 && "s"}
            </span>
          </button>
          {!hidden && (
            <div className="absolute w-full p-4 border-[2px] border-gray-300 bg-white rounded-lg shadow-lg mt-2 z-10">
              <div className="flex justify-between mb-2">
                <p>Adults</p>
                <div className="border-[2px] border-gray-300 w-[120px] text-center flex items-center justify-between">
                  <button
                    className="text-[20px] px-2"
                    onClick={handleDecreaseAdult}
                  >
                    -
                  </button>
                  <span className="text-[20px]">{adult}</span>
                  <button
                    className="text-[20px] px-2"
                    onClick={handleIncreaseAdult}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <p>Children</p>
                <div className="border-[2px] border-gray-300 w-[120px] text-center flex items-center justify-between">
                  <button
                    className="text-[20px] px-2"
                    onClick={handleDecreaseChildren}
                  >
                    -
                  </button>
                  <span className="text-[20px]">{children}</span>
                  <button
                    className="text-[20px] px-2"
                    onClick={handleIncreaseChildren}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex justify-between">
                <p>Rooms</p>
                <div className="border-[2px] border-gray-300 w-[120px] text-center flex items-center justify-between">
                  <button
                    className="text-[20px] px-2"
                    onClick={handleDecreaseRoom}
                  >
                    -
                  </button>
                  <span className="text-[20px]">{room}</span>
                  <button
                    className="text-[20px] px-2"
                    onClick={handleIncreaseRoom}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Search Button */}
        <div className="flex justify-center">
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 transition duration-300 ease-in-out">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
