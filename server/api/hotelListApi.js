const AccessToken = "zWDg2yv7Uq3whI7VCeRR0W8eGUZQ"; // Use your valid access token

const fetchHotelsByCity = async (cityCode) => {
  try {
    const url = `https://test.api.amadeus.com/v1/reference-data/locations/hotels/by-city?cityCode=${cityCode}`;
    console.log(`Fetching data from URL: ${url}`);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`Response Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers.get("Content-Type")}`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`API error: ${errorBody}`);
      throw new Error(`Network response was not ok: ${errorBody}`);
    }

    const data = await response.json();
    console.log("Data received:", data);
    return data;
  } catch (error) {
    console.error("Error fetching hotel data:", error);
    return null;
  }
};

// Usage
fetchHotelsByCity("PAR").then((data) => {
  console.log("Hotel Data:", data);
});
