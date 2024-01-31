const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/userModel.js");

// Register user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  //  validation;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all required fields");
  }
  if (password.length < 6) {
    res.status(400);
    throw new Error("Password must be atleast 6 characters long");
  }
  // if user exist
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("Email has already been registered");
  }

  // Create new user
  const user = await User.create({
    name,
    email,
    password,
  });

  res.send({
    message: "User created successfully",
    status: "success",
    data: {
      name: user.name,
      email: user.email,
    },
  });
});

module.exports = { registerUser };
