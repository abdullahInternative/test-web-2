const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./src/routes/userRoutes");
const errorHandler = require("./src/middlewares/errorMiddleware");

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000", "https://testweb.vercel.app"],
    credientials: true,
  })
);

// Routes
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("Home page");
});

// Error Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on ${PORT} and db connected.`);
    });
  })
  .catch((err) => console.log(err, "error while connect db"));
