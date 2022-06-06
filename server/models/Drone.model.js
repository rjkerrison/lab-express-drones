// Iteration #1
const { Schema, SchemaTypes, model } = require("mongoose");

const DroneSchema = new Schema({
  name: { type: String, required: true },
  propellers: { type: Number, required: true },
  maxSpeed: Number,
});

const Drone = model("Drone", DroneSchema);

module.exports = Drone;
