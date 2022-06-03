// Iteration #1

const Drones = require("../models/Drone.model.js");
const MONGO_URI = require("../db/index.js");
const { default: mongoose } = require("mongoose");

const drones = [
  {
    name: "Terminator",
    propellers: 8,
    maxSpeed: 88,
  },
  {
    name: "Orange Mécanique",
    propellers: 2,
    maxSpeed: 15,
  },
  {
    name: "TurboGT 200",
    propellers: 4,
    maxSpeed: 20,
  },
];

async function seedDrones() {
    await MONGO_URI
    const createdDrones = await Drones.create(drones)
    console.log(`Created ${createdDrones.length} bears.`)
    await mongoose.connection.close()
    console.log('Connection closed.')
  }
  
  seedDrones()
