const path = require('path')

module.exports = function (app) {

    app.get("/exercise", (req, res) => {
        res.redirect('/exercise.html')
    })

    app.get("/stats", (req, res) => {
        res.redirect('/stats.html')
    })

    app.get("/", (req, res) => {
        res.redirect('/index.html')
    })

}