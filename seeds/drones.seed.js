// Iteration #1
const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

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

const drones = [
  {
    name: "super drone",
    propellers: 29,
    maxSpeed: 20,
  },
  {
    name: "mom's drone",
    propellers: 21212121,
    maxSpeed: 10000000,
  },
  {
    name: "mimi's drone",
    propellers: 2,
    maxSpeed: 2000,
  },
];

const seedDrone = async () => {
  await Drone.deleteMany({});
  await Drone.insertMany(drones);
};
seedDrone().then(() => {
  mongoose.connection.close();
});
