const express = require('express');
const { sendStatus } = require('express/lib/response');
const { default: mongoose } = require('mongoose');
const router = express.Router()
const Drone = require("../models/Drone.model");

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find();
    res.status(200).json(drones);
  } catch (error) {
    next(error);
    console.log(error);
  }
  // ... your code here
})

router.post('/drones', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const newDrone = await Drone.create(req.body); 
    res.status(201).json(`You created ${newDrone.name}`);
  } catch(error) {
    console.log(error);
    next(400);
  }
  // ... your code here
})

router.post('/drones/:id', async (req, res, next) => {
  // Iteration #4: Update the drone
  try {
    const id = req.params.id;
    console.log("this is the body ", req.body)
    const updatedDrone = await Drone.findByIdAndUpdate(id, req.body,{new : true});
    console.log(updatedDrone)
    if (!updatedDrone) {
      res.status(404).json({ message: "id not found" });
    } else {
      res.status(200).json({message : 'Your drone is updated !', updatedDrone: updatedDrone});
    }
  } catch(error) {
    next(error);
  }
  // ... your code here
})

router.delete('/drones/:id', async (req, res, next) => {
  // Iteration #5: Delete the drone
  try{
    const id = req.params.id;
    const deleteDrone = await Drone.findByIdAndDelete(id);
    if (!deleteDrone) {
      res.status(404).json({ message: "id not found" });
    } else {
      res.status(200).json({message : 'Your drone is removed !', deleteDrone: deleteDrone});
    }
  } catch(error) {
    next(error);
  }
  // ... your code here
})

module.exports = router
