const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model");

router.get("/drones", async (req, res, next) => {
  try {
    const allDrones = await Drone.find(req.body);
    res.json(allDrones);
  } catch (error) {
    next(error);
  }
});

router.post("/drones", async (req, res, next) => {
  try {
    const { name, propellers, maxSpeed } = req.body;
    const newDrone = await Drone.create({
      name,
      propellers,
      maxSpeed,
    });
    res.status(201).json(newDrone);
  } catch (error) {
    return res.status(400).json({ message: "BAD REQUEST" });
  }
});

router.post("/drones/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res.status(404).json({ message: "NOT FOUND" });
    }
    const { name, propellers, maxSpeed } = req.body;
    const updateDrone = await Drone.findByIdAndUpdate(
      id,
      {
        name,
        propellers,
        maxSpeed,
      },
      { new: true }
    );
    res.status(200).json({ updateDrone });
  } catch (error) {
    return res.status(400).json({ message: "BAD REQUEST" });
  }
});

router.delete("/drones/:id", async (req, res, next) => {
  await Drone.findByIdAndDelete(req.params.id);
  res.sendStatus(204);
});
module.exports = router;
