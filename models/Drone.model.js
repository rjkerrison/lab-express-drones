// Iteration #1

const { Schema, model } = require('mongoose');

const droneSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Please give a name to your new drone.']
  },
  propellers: {
    type: Number,
    required: [true, 'Please input the number of propellers on your new drone.']
  },
  maxSpeed: {
    type: Number,
    required: [true, 'Please input the maximum speed of your new drone.']
  }
});

const Drone = model('Drone', droneSchema);
module.exports = Drone;

