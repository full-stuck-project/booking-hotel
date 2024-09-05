const axios = require("axios");

const options = {
  method: "GET",
  url: "https://booking-com.p.rapidapi.com/v1/hotels/data",
  params: {
    hotel_id: "1377073",
    locale: "en-gb",
  },
  headers: {
    "x-rapidapi-key": "80a8466c0dmshf1c4478bd5859fap1ec262jsn730c3eee135c",
    "x-rapidapi-host": "booking-com.p.rapidapi.com",
  },
};

// Use let instead of const for mutable variables
let hotelData = null;

const fetchData = async () => {
  try {
    const response = await axios.request(options);
    hotelData = response.data;
    console.log("Hotel data successfully fetched:", hotelData);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

// Call the async function and then log the data
fetchData().then(() => {
  console.log("Hotel data after fetch:", hotelData);
});
