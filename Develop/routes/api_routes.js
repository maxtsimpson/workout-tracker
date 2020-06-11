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
        db.Workout.findOneAndUpdate(req.params.id, { $set: req.body })
            .then((results) => {
                console.log("successfully updated")
                console.log(results)
                res.json(results)
            })
            .catch(error => res.json(error))
    })

    app.post("/api/workouts", (req, res) => {
        const workout = new db.Workout(req.body)
        workout.save()
            .then((results) => {
                console.log(results)
                res.json(results)
            })
            .catch(error => res.json(error))
    })

}