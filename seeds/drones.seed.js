// Iteration #1
const Drone = require("../models/Drone.model");
const mongoose = require("mongoose");


const MONGO_URI = "mongodb://localhost:27017/lab-express-drones"

mongoose
.connect(MONGO_URI)
.then((db) => {
    console.log(`Connected to the db: ${db.connection.name}`)
})
.catch((error) => console.error(error))

const seedDrones = async () => {
    try {
        await Drone.deleteMany();
        const createDrones = await Drone.create(drones);
        console.log(`${createDrones.length} drones created !`);
        await mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
}

seedDrones();

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
  ]