let db = require("../models");

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
        const startDate = new Date(Date.now()).getDate()-days
        console.log(new Date(startDate).toDateString())
        console.log({startDate})
        db.Workout.find({day: {$lte: startDate }})
            .then((workouts) => {
                console.log({workouts})
                res.json(workouts)
            })
            .catch(error => res.json(error))
    })

    app.put("/api/workouts", (req, res) => {
        db.Workout.find({})
            .then((workouts) => {
                console.log(workouts)
                res.json(workouts)
            })
            .catch(error => res.json(error))
    })

    app.post("/api/workouts", (req, res) => {
        db.Workout.Create(req.body)
            .then((workouts) => {
                console.log(workouts)
                res.json(workouts)
            })
            .catch(error => res.json(error))
    })

}