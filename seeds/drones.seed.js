// Iteration #1

const mongoose = require('mongoose');
const Drone = require('../models/Drone.model.js');
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  {
    name: 'blossom',
    propellers: 2,
    maxSpeed: 100
  },
  {
    name: 'bubbles',
    propellers: 1,
    maxSpeed: 200
  },
  {
    name: 'buttercup',
    propellers: 4,
    maxSpeed: 50
  },  
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .then(async () => {
    const newDrones = await Drone.create(drones);
    console.log(`Successfully seeded ${newDrones.length} new drones.`);
  })
  .finally(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
