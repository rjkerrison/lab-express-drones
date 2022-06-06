// Iteration #1
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const droneSchema = new Schema({
  // TODO: write the schema
  name : {type : String},
  propellers : Number,
  maxSpeed : Number,  
});

const Drone = mongoose.model('drone', droneSchema);

module.exports = Drone;