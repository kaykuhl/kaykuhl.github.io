var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.updateOne({ _id: req.params.id }).then(function(result) {
      res.json(result);
    });
  });


  app.put("/api/workouts/range", function(req, res) {
    // db.Workout.updateOne({ _id: req.params.id }).then(function(result) {
    //   res.json(result);
    });
  });

};
