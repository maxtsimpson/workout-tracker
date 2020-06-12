//Require Mongoose
const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;

//excercises should be an array of excercise schemas

const ExcerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number
});

module.exports = ExcerciseSchema;