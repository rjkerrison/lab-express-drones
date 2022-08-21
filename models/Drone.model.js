const { Schema, model } = require(`mongoose`);

const droneSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  propellers: {
    type: Number,
    min: 0,
    required: true,
  },
  maxSpeed: {
    type: Number,
    min: 0,
    required: true,
  },
});

const Drone = model(`Drone`, droneSchema);

module.exports = Drone;
