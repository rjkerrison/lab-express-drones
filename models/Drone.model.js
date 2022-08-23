// Iteration #1

const { Schema, model } = require("mongoose");

const droneSchema = new Schema({
  name: {
    type: Schema.Types.String,
  },
  propellers: {
    type: Schema.Types.Number,
  },
  masSpeed: {
    type: Schema.Types.Number,
  },
});

const Drone = model("Drone", droneSchema);

module.exports = Drone;
