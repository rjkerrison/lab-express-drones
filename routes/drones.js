const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");
// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find();
    res.json({ drones });
  } catch (error) {
    next(error);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = req.body;
  try {
    const addedDrone = await Drone.create({
      name: newDrone.name,
      propellers: newDrone.propellers,
      maxSpeed: newDrone.maxSpeed,
    });
    res.status(201).json({ addedDrone });
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    next(error);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const newDrone = req.body;
  try {
    const updatedDrone = await Drone.findByIdAndUpdate(
      req.params.id,
      {
        name: newDrone.name,
        propellers: newDrone.propellers,
        maxSpeed: newDrone.maxSpeed,
      },
      { new: true }
    );
    res.status(201).json({ updatedDrone });
  } catch (error) {
    res.status(400).json({ message: "400 BAD REQUEST" });
    res.status(404).json({ message: "404 NOT FOUND" });
    next(error);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  await Drone.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});

module.exports = router;
