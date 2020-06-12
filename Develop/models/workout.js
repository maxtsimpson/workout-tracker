//Require Mongoose
const mongoose = require('mongoose');
const ExcerciseSchema = require('./excercise.js')

//Define a schema
const Schema = mongoose.Schema;

//excercises should be an array of excercise schemas

const WorkoutSchema = new Schema({
    day: { type: Date, default: new Date().setDate(new Date().getDate()) },
    excercises: [ExcerciseSchema]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;