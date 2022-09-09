const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect();
  } catch (error) {
    console.log(error.message);
  }
};
