var db = require("../models");

module.exports = function(app) {
  app.get("/api/workouts", function(req, res) {
    db.Workout.find({}).then(function(result) {
      res.json(result);
    });
  });

  app.put("/api/workouts/:id", function(req, res) {
    db.Workout.update({ _id: req.params.id }, {
      "type": req.body.type,
      "name": req.body.name,
      "distance": req.body.distance,
      "duration": req.body.duration,
      "weight": req.body.weight,
      "sets": req.body.sets,
      "reps": req.body.reps,
    }).then(function(result) {
      res.json(result);
    });
  });

  app.get("/api/workouts/range", ({ body }, res) => {
    db.Workout.find({})
      .then(dbTransaction => {
    db.Workout.find({}).then(function(result) {
      res.json(result);
    });
  });
  })
  
  app.post("/api/workouts/", function(req, res) {
    db.Workout.create({ _id: req.params.id }, {
      "type": req.body.type,
      "name": req.body.name,
      "distance": req.body.distance,
      "duration": req.body.duration,
      "weight": req.body.weight,
      "sets": req.body.sets,
      "reps": req.body.reps,
    }).then(function(result) {
      res.json(result);
    });
  })
  
};
