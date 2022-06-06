const express = require("express");
const router = express.Router();

// require the Drone model here
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // http://localhost:3000/drones
  // ... your code here
  try {
    const allDrones = await Drone.find();
    console.log(allDrones);
    res.status(200).json(allDrones);
  } catch (error) {
    next(error);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const newDrone = req.body;
  let message = "";
  if (
    typeof newDrone.name !== "string" ||
    typeof newDrone.propellers !== "number"
  ) {
    message = "wrong data type";
    res.status(400).json(message);
  }
  if (!newDrone.name || !newDrone.propellers) {
    message = "missing field";
    res.status(400).json(message);
  }
  try {
    const newCreatedDrone = await Drone.create(newDrone);
    console.log(`${newCreatedDrone.name} successfully created`);
    res.status(201).json(newCreatedDrone);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const myId = req.params.id;
  const updateDrone = req.body;
  try {
    const myDrone = await Drone.findByIdAndUpdate(myId, updateDrone, {
      new: true,
    });
    if (!myDrone) {
      res.status(404).json({ message: "id not found" });
    }
    res.sendStatus(200);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const myId = req.params.id;
  try {
    const deletedDrone = await Drone.findByIdAndDelete(myId);
    if (!deletedDrone) {
      res.status(404).json({ message: "id not found" });
    }
    res.status(200).json({ message: "Drone deleted", deletedDrone });
  } catch (error) {
    console.error(error);
    res.status(400).json(error.message);
  }
});

module.exports = router;
