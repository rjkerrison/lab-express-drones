const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.json(drones);
  } catch (err) {
    next(err);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = await Drone.create(req.body);
    res.json(newDrone);
  } catch (err) {
    next(err);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  if (!newDrone) {
    return res.status(404).json(`sorry this drone doesn't exist babe`);
  }
  try {
    const newDrone = await Drone.findOneAndUpdate(req.body);
    res.json(newDrone);
    return res.status(200).json(`new drone update ${newDrone}`);
  } catch (err) {
    next(err);
    return res.status(400).json(`drone not found`);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    await Drone.findByIdAndDelete(req.params.id);
    res.status(204).json(`drone deleted`);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
