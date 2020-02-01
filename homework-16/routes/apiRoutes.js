var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    var newExercise = req.body
    db.Workout.updateOne({ _id: req.params.id }, { $push: { exercises: newExercise } }).then(function(result) {
      return res.json(result);
    });
  });

  app.get("/api/workouts/range", function(req, res) {
    db.Workout.find({}).then(function(result) {
        res.json(result);
    });
});
  
  app.post("/api/workouts/", function(req, res) {
    db.Workout.create({
      day: new Date().setDate(new Date().getDate()),
      exercises: []
    }).then(function(result) {
      res.json(result);
    });
  })
  
};
