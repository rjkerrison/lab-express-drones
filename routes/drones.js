const express = require("express");
const router = express.Router();
const Drones = require("../models/Drone.model");
const connectToDB = require("../db/index");

// require the Drone model here

connectToDB();

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const foundDrones = await Drones.find();
    res.json(foundDrones);
  } catch (err) {
    next(err);
    return;
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = await {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  try {
    const createdDrone = await Drones.create(newDrone);
    res.status(201).send("Created drone successfuly");
  } catch (err) {
    res.status(400).send("");
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const newDroneValue = await {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  try {
    const updateDrone = await Drones.findByIdAndUpdate(
      req.params.id,
      newDroneValue
    );
    res.status(200).send("Updated drone successfuly");
  } catch (err) {
    res
      .status(400)
      .send("Please enter a valid name, number of propellers and max speed");
    res.status(404).send("No matching id");
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const deleteDrone = await Drones.findByIdAndDelete(req.params.id);
    res.status(200).send("Deleted drone successfuly");
  } catch (err) {
    res.status(400).send("No matching id");
  }
});

module.exports = router;
