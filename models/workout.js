//Require Mongoose
const mongoose = require('mongoose');
const ExcerciseSchema = require('./excercise')
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: { type: Date, default: new Date().setDate(new Date().getDate()) },
    exercises: [ExcerciseSchema]
});

const Workout = mongoose.model('Workout', WorkoutSchema);

module.exports = Workout;