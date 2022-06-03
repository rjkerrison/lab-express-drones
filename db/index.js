// ℹ️ package responsible to make the connection with mongodb
// https://www.npmjs.com/package/mongoose
const mongoose = require("mongoose");

// ℹ️ Sets the MongoDB URI for our app to have access to it.
// If no env has been set, we dynamically set it to whatever the folder name was upon the creation of the app

const MONGO_URI =
  process.env.MONGODB_URI || "mongodb://localhost/lab-express-drones";

async function openConnection() {
  const connection = await mongoose.connect(MONGO_URI);
  console.log("connected to the db");
}

module.exports = openConnection;
