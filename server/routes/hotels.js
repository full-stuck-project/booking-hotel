const express = require("express");
const hotelRouter = express.Router();
const { hotelController } = require("../controllers/hotels");

// Route to get all hotels
hotelRouter.get("/", hotelController.getAllHotels);

module.exports = hotelRouter;
