// server/routes/hotels.js
const express = require("express");
const hotelRouter = express.Router();
const { hotelController } = require("../controllers/hotels");

// Route to get all hotels
hotelRouter.get("/", hotelController.getAllHotels);

// Route to get hotel details
hotelRouter.get("/:hotelId", hotelController.getHotelDetails);

module.exports = hotelRouter;
