// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const drones = [
  { name: "Kevin", propellers: 3, maxSpeed: 12 },
  { name: "Marvin the Paranoid Android", propellers: 4, maxSpeed: 20 },
  { name: "Superspeed 500 America n°1", propellers: 6, maxSpeed: 18 },
];

const MONGO_URI = "mongodb://127.0.0.1:27017/lab-express-drones";

async function executeDatabaseThings() {
  try {
    const connection = await mongoose.connect(MONGO_URI);
    console.log(
      `Connected to Mongo! Database name: "${connection.connections[0].name}"`
    );
  } catch (err) {
    console.error(`Error connecting to mongo: ${MONGO_URI}.`, err);
    return;
  }
  try {
    const createdDrones = await Drone.create(drones);
    console.log(`Successfuly created ${createdDrones.length} drones`);
  } catch (err) {
    console.error(`Error creating drones`, err);
    return;
  }
  return mongoose.connection.close();
}

executeDatabaseThings();
