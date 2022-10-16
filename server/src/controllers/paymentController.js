const { default: axios } = require("axios");
const { config } = require("dotenv");
const AsyncHandler = require("express-async-handler");

// Generates an access token that is valid for an hour
const getAccessToken = AsyncHandler(async (req, res) => {
  const { accessToken } = req.body;

  if (accessToken) {
    res.status(200).json({ token: accessToken });
  } else {
    res.status(400).send("Operation failed!");
  }
});

// RegisterUrls

const registerUrls = AsyncHandler(async (req, res) => {
  let url = "https://sandbox.safaricom.co.ke/mpesa/c2b/v1/registerurl";
  const { accessToken } = req.body;

  const config = {
    headers: {
      Authorization: "Bearer " + accessToken,
    },
    json: {
      shortCode: 600426,
      ResponseType: "Complete",
      ConfirmationURL: "http://102.5.59.44:3333/confirmation",
      ValidationURL: "http://102.5.59.44:3333/validation",
    },
  };
  try {
    const response = await axios.post(url, config);

    res.status(200).json(response.data);
  } catch (error) {}
});

module.exports = {
  getAccessToken,
  registerUrls,
};
