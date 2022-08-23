// Iteration #1
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
  },

  propellers: {
    type: Schema.Types.Number,
    required: true,
  },

  maxSpeed: {
    type: Schema.Types.Number,
    required: true,
  },
});

const Drone = mongoose.model("drones", droneSchema);

module.exports = Drone;
