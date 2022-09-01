const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

const drones = [
  {
    name: "kater",
    propellers: 2,
    maxSpeed: 100,
  },
  {
    name: "lacharte",
    propellers: 1,
    maxSpeed: 200,
  },
  {
    name: "guillaume",
    propellers: 4,
    maxSpeed: 50,
  },
];

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });
Drone.create(drones)
  .then((drones) => {
    console.log(`${drones.length} drones added to the database !`);
  })
  .catch((err) => {
    console.log(err);
    mongoose.connection.close();
  });
