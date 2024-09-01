const axios = require("axios");

async function getAccessToken() {
  const data = new URLSearchParams();
  data.append("grant_type", "client_credentials");
  data.append("client_id", "eWbbgpJE1ZLqhtkNQs6MZwb2ADOjEKAt");
  data.append("client_secret", "QR06nrh3yytgYfth");

  try {
    const response = await axios.post(
      "https://test.api.amadeus.com/v1/security/oauth2/token",
      data,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    console.log("Access Token:", response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error("Error fetching access token:", error.response.data);
  }
}

getAccessToken();
