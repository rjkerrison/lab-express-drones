const express = require('express');
const router = express.Router();

// require the Drone model here
const Drone = require('../models/Drone.model.js');

router.get('/drones', async (req, res, next) => {
  // Iteration #2: List the drones
  try {
    const drones = await Drone.find({});
    res.json({drones});
  } catch (error) {
    next(error);
  }
});

router.post('/drones', async (req, res, next) => {
  // Iteration #3: Add a new drone
  try {
    const inputDrone = req.body;
    const newDrone = await Drone.create({
      name: inputDrone.name,
      propellers: inputDrone.propellers,
      maxSpeed: inputDrone.maxSpeed
    });
    return (res.status(201).json({ newDrone }));
  } catch (error) {
    console.log(error.message);
    return (res.sendStatus(400));
  }
});

router.post('/drones/:id', (req, res, next) => {
  // Iteration #4: Update the drone
  Drone.countDocuments({_id: req.params.id}, async function (err, count){ 
    try {
      if(count > 0){
	const inputDrone = req.body;
	const newDrone = await Drone.findByIdAndUpdate(
	  req.params.id,
	  {
	    name: inputDrone.name,
	    propellers: inputDrone.propellers,
	    maxSpeed: inputDrone.maxSpeed,
	  },
	  { new: true }
	);
	return (res.status(200).json({ newDrone }));
      }
      else {
	const err = new Error('Please provide a valid ID.');
	err.name = 'idNotFound';
	throw (err);
      }
    } catch (error) {
      if (error.name === 'CastError')
	status = 400;
      else if (error.name === 'idNotFound')
	status = 404;
      console.log(error.message);
      return (res.sendStatus(status));
    }
  });
});


router.delete('/drones/:id', (req, res, next) => {
  // Iteration #5: Delete the drone
  Drone.countDocuments({_id: req.params.id}, async function (err, count){ 
    if(count > 0){
      await Drone.findByIdAndDelete(req.params.id);
      return (res.sendStatus(204));
    }
    else {
      console.log('Please provide a valid ID.');
      return (res.sendStatus(404));
    }
  });
});

module.exports = router;
