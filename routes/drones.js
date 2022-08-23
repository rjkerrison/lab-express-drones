const express = require('express');
const Drone = require('../models/Drone.model');
const router = express.Router()

// require the Drone model here

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  try {
    const drones = await Drone.find({});
    res.json({drones});
  } catch (error) {
    next(error);
  }
});

router.post('/drones', async (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  try{
    const addDrone = req.body;
    const newDrone = await Drone.create({
      name: addDrone.name,
      propellers: addDrone.propellers,
      maxSpeed: addDrone.maxSpeed,
    });
    console.log(newDrone)
    return res.status(201).json({ data: newDrone})
  } catch (error) {
    next(error)
  }
})
router.post('/drones/:id', async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const {id} = req.params.id;
    console.log("this is the body ", req.body)
    const updatedDrone = await Drone.findByIdAndUpdate(id, req.body,{new : true});
    if (!updatedDrone) {
      res.status(404).json({ message: "id not found" });
    } else {
      res.status(200).json({message : ' Drone is updated !', updatedDrone: updatedDrone});
    }
  } catch(error) {
    next(error);
  }
  // ... your code here

})

router.delete('/drones/:id', async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
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
})

module.exports = router
