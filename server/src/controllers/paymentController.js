const axios = require("axios");
const unirest = require("unirest");
const { config } = require("dotenv");
const AsyncHandler = require("express-async-handler");
const timeStamp = require("../middleware/timestamp");

// Env vars
const endpoint = process.env.endpoint;

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
  const time = datetime.format("");
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

const setStk = AsyncHandler(async (req, res) => {
  const { accessToken } = req.body;
  let auth = "Bearer " + accessToken;

  const password = new Buffer.from(
    process.env.shortcode +
      "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" +
      timeStamp()
  ).toString("base64");

  console.log(password);
  try {
    const { data } = await axios.post(
      "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest",

      {
        BusinessShortCode: parseInt(process.env.shortcode),
        Password: password,
        Timestamp: timeStamp(),
        TransactionType: "CustomerBuyGoodsOnline",
        Amount: 1,
        PartyA: 254794181582,
        PartyB: parseInt(process.env.shortcode),
        PhoneNumber: 254794181582,
        CallBackURL: "https://mydomain.com/path",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: auth,
        },
      }
    );

    res.status(200).json(data);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = {
  getAccessToken,
  registerUrls,
  setStk,
};
