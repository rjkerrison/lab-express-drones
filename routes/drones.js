const express = require("express"),
  mongoose = require(`mongoose`),
  // require the Drone model here
  Drone = require(`../models/Drone.model`),
  router = express.Router();

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find();

    return res.status(200).json(drones);
  } catch (error) {
    next(error);
  }
});

router.post("/drones", async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try {
    const newDrone = req.body,
      insertedDrone = await Drone.create(newDrone);

    return res.status(201).json(insertedDrone);
  } catch ({ message }) {
    return res.status(400).json({ message });
  }
});

router.post("/drones/:id", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const [droneId, droneUpdate] = [req.params.id, req.body],
      updatedDrone = await Drone.findByIdAndUpdate(droneId, droneUpdate, {
        new: true,
      });

    return res.status(200).json(updatedDrone);
  } catch (error) {
    if (error.kind === `ObjectId`) {
      return res
        .status(404)
        .json({ message: `No such drone with id: ${req.params.id}` });
    }
    return res.status(400).json({ message: error.message });
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    const droneId = req.params.id;

    await Drone.findByIdAndDelete(droneId);

    return res.status(204).send();
  } catch (error) {
    if (error.kind === `ObjectId`) {
      return res
        .status(404)
        .json({ message: `No such drone with id: ${req.params.id}` });
    }
    return res.status(400).json({ message: error.message });
  }
});

module.exports = router;
