// Iteration #1

const { Schema, model } = require('mongoose')
// const mongoose = require('mongoose')


// TODO: Please make sure you edit the user model to whatever makes sense in this case
const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
     maxSpeed: Number,
  }
)

const Drones = model('Drones', droneSchema)

module.exports = Drones