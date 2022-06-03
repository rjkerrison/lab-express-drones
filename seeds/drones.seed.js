// Iteration #1
const Drone = require("../models/Drone.model.js");
const { default: mongoose } = require("mongoose");
const openConnection = require("../db/index.js");

const drones = [
  { name: "Very fancy drone", propellers: 3, maxSpeed: 25 },
  { name: "Very fast drone", propellers: 2, maxSpeed: 40 },
  { name: "I know nothing about drones drone", propellers: 4, maxSpeed: 20 },
];

async function seedDrones() {
  try {
    await openConnection();
    const createdDrones = await Drone.create(drones);
    console.log(`Created ${createdDrones.length} drones.`);
    await mongoose.connection.close();
    console.log("Connection closed.");
  } catch (err) {
    console.error(err);
  }
}

seedDrones();
