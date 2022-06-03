const express = require("express");
const router = express.Router();
const Drones = require("../models/Drone.model.js");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const allDrones = await Drones.find();
    res.status(200).json(allDrones);
  } catch (err) {
    next(err);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const addDrone = await Drones.create(req.body);
    res.status(201).json({ message: ` New created drone: ${addDrone}` });
  } catch (err) {
    next(400);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const id = req.params.id;
    const updatedDrone = await Drones.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (updatedDrone === null) {
      res.status(404);
    }
    res.status(200).json(updatedDrone);
  } catch (err) {
    console.error(err);
    next(400);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  try {
    const id = req.params.id;
    const deleteDrone = await Drones.findByIdAndDelete(req.param.id);
    res.status(201).json({ message: `Drone ${id} successfully deleted` });
  } catch (err) {
    console.error(err);
    next(400);
  }
});
module.exports = router;
