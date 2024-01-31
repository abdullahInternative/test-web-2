const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minLength: [6, "Password must be upto 6 characters"],
  },
  role: {
    type: String,
    required: [true],
    default: "customer",
    enum: ["customer", "admin"],
  },
  photo: {
    type: String,
    // required: [true, "Photo is required"],
  },
  phone: {
    type: String,
    default: "+234",
  },
  address: {
    type: Object,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
