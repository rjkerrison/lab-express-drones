// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model.js");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  {
    name: "spyX",
    propellers: 4,
    maxSpeed: 8,
  },
  {
    name: "DJI Agras T30",
    propellers: 6,
    maxSpeed: 10,
  },
  {
    name: "DJI Maveric 3",
    propellers: 4,
    maxSpeed: 9,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name:"${x.connections[0].name}"`);
  })
  .then(async () => {
    const newDrones = await Drone.create(drones);
    console.log(`Successfully seeded ${newDrones.length} new drones.`);
  })
  .finally(() => mongoose.connection.close())
  .catch((err) => {
    console.error("Error connecting to mongo:", err);
  });

