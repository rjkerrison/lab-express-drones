// Iteration #1
const drones = require(`./drones.data`),
  mongoose = require(`mongoose`),
  Drone = require(`../models/Drone.model`);

// ℹ️ Connects to the database
require(`../db/index`)();

(async () => {
  try {
    await Drone.deleteMany();

    const insertedDrones = await Drone.insertMany(drones);

    console.log(`${insertedDrones.length} drones were created`);

    return mongoose.disconnect();
  } catch (error) {
    console.error(error);
  }
})()