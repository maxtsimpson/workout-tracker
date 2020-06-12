const db = require("../models");
const mongoose = require("mongoose")

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((workouts) => {
                res.json(workouts)
            })
            .catch(error => res.json(error))
    })

    app.get("/api/workouts/range", (req, res) => {
        const days = req.body.numberOfDays || 7
        const startDate = new Date().setDate(new Date().getDate() - days)
        console.log({ startDate })
        db.Workout.find({ day: { $gte: startDate } })
            .then((workouts) => {
                console.log({ workouts })
                res.json(workouts)
            })
            .catch(error => res.json(error))
    })

    app.put("/api/workouts/:id", (req, res) => {
        console.log(`getting workout with id: ${req.params.id}`)
        console.log(req.body)
        db.Workout.findOneAndUpdate(req.params.id, { $push: { exercises: req.body} }, {new: true})
            .then((newWorkout) => {
                console.log("updated")
                console.log(newWorkout)
                res.json(newWorkout)
            })
            .catch(error => res.json(error))
    })

    app.post("/api/workouts", (req, res) => {
        const workout = new db.Workout()
        workout.save()
            .then((results) => {
                console.log(results)
                res.json(results)
            })
            .catch(error => res.json(error))
    })

}