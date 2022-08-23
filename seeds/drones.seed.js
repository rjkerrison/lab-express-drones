// Iteration #1
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");

const drones = [
  { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
  { name: "Racer 57", propellers: 4, maxSpeed: 20 },
  { name: "Courier 3000i", propellers: 6, maxSpeed: 18 },
];

async function dbLauch() {
  await require("../db/index");
  await Drone.deleteMany();
  try {
    const createDrone = await Drone.create(drones);
    console.log("created drones", createDrone);
  } catch (error) {
    next(error);
  }
  mongoose.disconnect();
}

dbLauch();
