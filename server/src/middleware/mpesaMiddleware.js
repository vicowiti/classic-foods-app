const axios = require("axios");

const mpesaMiddleware = async (req, res, next) => {
  let buffer = new Buffer(
    process.env.consumer_key + ":" + process.env.consumer_secret
  ).toString("base64");

  const config = {
    headers: {
      Authorization: "Basic " + buffer,
    },
  };

  try {
    const token = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      config
    );

    req.body.accessToken = token.data.access_token;
    next();
  } catch (error) {
    if (error) {
      res.status(400);
    }
  }
};

module.exports = mpesaMiddleware;
