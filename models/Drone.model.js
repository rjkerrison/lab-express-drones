// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number,
});

Drone = mongoose.model("Drone", droneSchema);

module.exports = Drone;
