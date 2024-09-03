const AccessToken = "M19GRVjaQ7ddSto3VtAMvuAWM2Kh";

const fetchHotels = async (keyword) => {
  try {
    const url = `https://test.api.amadeus.com/v1/reference-data/locations/hotels?keyword=${keyword}`;
    console.log(`Fetching data from URL: ${url}`);

    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${AccessToken}`,
        "Content-Type": "application/json",
      },
    });

    // Log response status and headers
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
fetchHotels("Paris").then((data) => {
  console.log("Hotel Data:", data);
});
