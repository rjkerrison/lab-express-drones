// Iteration #1

const mongoose = require("mongoose");

const dronesSchema = new mongoose.Schema({
    name : { type: mongoose.SchemaTypes.String},
    propellers : { type : mongoose.SchemaTypes.Number},
    maxSpeed : {
        type: Number,
        min: 0, 
    }
})

const Drones = mongoose.model("Drones", dronesSchema);

module.exports = Drones;