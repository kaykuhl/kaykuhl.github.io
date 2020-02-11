var Burger = require("../models/burger.js");
var express = require("express")
var router = express.Router()

  // GET API OF ALL BURGERS
  router.get("/api/burgers", function(req, res) {
    Burger.find({}).then(function(results) {
      res.json(results);
    });
  });

// GET BURGER BY API/ID
    router.get("/api/burgers/:_id", function(req, res) {
      Burger.find({where: {_id: req.params._id}}).then(function(results) {
        res.json(results);
      });
    });
    
//RENDER INDEX (GET REQUEST)
router.get("/", function(req,res){
  Burger.find({}).then(function(results) {
    var hbsObject = {
      burgers: results
    };
    res.render("index", hbsObject);
  })
});

//ADD BURGER(POST REQUEST)
router.post("/api/burgers", function(req, res) {
  Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(results) {
    res.json(results);
  })      .catch(err => {
    res.status(400).json(err);
  });;
});

router.post("/api/burgers/bulk", function(req, res) {
  console.log(req.body)
  Burger.insertMany(req.body).then(function(results) {
    res.json(results);
  })
  .catch(err => {
    res.status(400).json(err);
  });;
});


//DEVOUR BURGER (PUT/UPDATE REQUEST)
router.put("/api/burgers/:id", function(req, res) {
  Burger.update(
    {id:req.params.id}, {devoured: true}
  ).then(function(results) {
    res.send(results)
    })
    .catch(err => {
      res.status(400).json(err);
    });
  });

//DELETE REQUEST  
router.delete("/api/burgers/:id", function(req, res) {
  Burger.destroy(
    { where: { id: req.params._id}}).then(function(results){
      res.json(results)})
      .catch(err => {
        res.status(400).json(err);
      });
    })

module.exports = router;
