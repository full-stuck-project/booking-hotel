const getNewAccessToken = async () => {
  const client_id = "eWbbgpJE1ZLqhtkNQs6MZwb2ADOjEKAt";
  const client_secret = "QR06nrh3yytgYfth";
  const tokenUrl = "https://test.api.amadeus.com/v1/security/oauth2/token";

  try {
    const response = await fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id,
        client_secret,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Error response: ${errorBody}`);
      throw new Error("Failed to obtain access token");
    }

    const data = await response.json();
    console.log("Access Token Data:", data);
    return data.access_token;
  } catch (error) {
    console.error("Error obtaining access token:", error);
    throw error;
  }
};

getNewAccessToken()
  .then((token) => {
    console.log("New Access Token:", token);
    // Use this token for further requests
  })
  .catch((error) => {
    console.error("Error:", error);
  });
