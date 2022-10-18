const axios = require("axios");
const unirest = require("unirest");
const { config } = require("dotenv");
const AsyncHandler = require("express-async-handler");
const datetime = require("datetime");

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

const setStk = AsyncHandler((req, res) => {
  const endpoint =
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest";

  const { accessToken } = req.body;
  let auth = "Bearer " + accessToken;
  let dateNow = new Date();

  const timeStamp =
    dateNow.getFullYear() +
    "" +
    (dateNow.getMonth() + 1) +
    "" +
    dateNow.getDate() +
    "" +
    dateNow.getHours() +
    "" +
    dateNow.getMinutes() +
    "" +
    dateNow.getSeconds();

  const password = new Buffer.from(
    "5028763" +
      "bfb279f9aa9bdbcf158e97dd71a467cd2e0c893059b10f78e6b72ada1ed2c919" +
      timeStamp
  ).toString("base64");

  let request = unirest(
    "POST",
    "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest"
  )
    .headers({
      "Content-Type": "application/json",
      Authorization: auth,
    })
    .send(
      JSON.stringify({
        BusinessShortCode: 174379,
        Password: password,
        Timestamp: timeStamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: 1,
        PartyA: 254794181582,
        PartyB: 174379,
        PhoneNumber: 254794181582,
        CallBackURL: "https://mydomain.com/path",
        AccountReference: "CompanyXLTD",
        TransactionDesc: "Payment of X",
      })
    )
    .end((res) => {
      if (res.error) throw new Error(res.error);
      console.log(res.raw_body);
    });
});

module.exports = {
  getAccessToken,
  registerUrls,
  setStk,
};

/*

let req = unirest('POST', 'https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest')
.headers({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer SxPBDtOsSb2pSwUF39luoT2A2DTl'
})
.send(JSON.stringify({
    "BusinessShortCode": 5028763,
    "Password": ,
    "Timestamp": ,
    "TransactionType": "CustomerBuyGoodsOnline",
    "Amount": 1,
    "PartyA": 254794181582,
    "PartyB": 5028763,
    "PhoneNumber": 254794181582,
    "CallBackURL": "https://mydomain.com/path",
    "AccountReference": "CompanyXLTD",
    "TransactionDesc": "Payment of X" 
  }))
.end(res => {
    if (res.error) throw new Error(res.error);
    res.status(200).json(res.raw_body);
});

*/
