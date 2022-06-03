const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model.js");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const allDrones = await Drone.find();
    console.log("im in the get drones thing");
    res.status(200).json(allDrones);
  } catch (err) {
    next(err);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  if (!req.body.name || !req.body.propellers || !req.body.maxSpeed) {
    console.log(`Missing name field`);
    return next(400);
  }
  try {
    const createdDrone = await Drone.create(req.body);
    res.status(201).json(createdDrone);
  } catch (err) {
    next(err);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  if (
    typeof req.body.name != "string" ||
    typeof !req.body.propellers != "number" ||
    typeof req.body.maxSpeed != "number"
  ) {
    console.log(`PLease follow this structure: ${Drone}`);
    return next(400);
  }
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(updatedDrone);
  } catch (err) {
    next();
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  await Drone.findByIdAndDelete(req.params.id);
  res.status(200).json(`Succesfully deleted ${req.params.id}`);
});

module.exports = router;
