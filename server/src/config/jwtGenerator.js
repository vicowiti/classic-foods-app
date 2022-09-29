const jwt = require("jsonwebtoken");

const generateJWT = (id) => {
  return jwt.sign({ id }, process.env.JWT_STRING, {
    expiresIn: "3d",
  });
};

module.exports = generateJWT;
