const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const generateJWT = require("../config/jwtGenerator");
const regController = asyncHandler(async (req, res) => {
  const { name, email, contact, password } = req.body;
  // Check if required data was submitted
  if (!name || !email || !contact || !password) {
    res.status(400);
    throw new Error("Kindly fill in all the fields");
  }

  // Check if user with said email already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists, kindly login");
  }
  // If user does not exist hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user in db

  const newUser = await User.create({
    name,
    email,
    contact,
    password: hashedPassword,
  });

  // Response including user object and an jwt access token

  if (newUser) {
    res.status(201).json({
      name: newUser.name,
      _id: newUser.id,
      token: generateJWT(newUser._id),
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Unable to create user");
  }
});

const authController = asyncHandler(async (req, res) => {});

module.exports = {
  regController,
  authController,
};
