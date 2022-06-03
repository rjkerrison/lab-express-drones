// // Iteration #1


// Create an array of 3 objects, each with name, propellers and maxSpeed as our initial drones.

const feedingArray = [
  { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
  { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
  { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 },
]

// Establish a connection to the database. You can use the same code in db/index.js.
// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose

const mongoose = require("mongoose");
const Drone = require("../models/Drone.model");
// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

mongoose
  .connect(MONGO_URI)
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  });


// Once the database connection is established, call the Drone model's .create() method with the array as an argument.
async function feedDatabase() {
  try {
    const myResponse = await Drone.create(feedingArray)
    // If the .create() method successfully creates the drones collection, output (using console.log()) 
    //how many drones have been created. 
    console.log(`Success: ${myResponse.length} drones have been created`)
    mongoose.connection.close()
    console.log(`Successfully disconnected from the database`)
    //In case, the seeding of the database fails, catch the error and output it.
  } catch (error) {
    console.error(error)

  }
}

feedDatabase()


