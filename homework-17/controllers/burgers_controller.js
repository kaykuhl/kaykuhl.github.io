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
    router.get("/api/burgers/:id", function(req, res) {
      Burger.find({where: {id: req.params.id}}).then(function(results) {
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
    res.send(results);
  });
});

//DEVOUR BURGER (PUT/UPDATE REQUEST)
router.put("/api/burgers/:id", function(req, res) {
  Burger.update(
    {devoured: true}, 
    { where: { id: req.params.id}}
  ).then(function(results) {
    res.json(results)
    })
  });

//DELETE REQUEST  
router.delete("/api/burgers/:id", function(req, res) {
  Burger.destroy(
    { where: { id: req.params.id}}).then(function(results){
      res.json(results)})})

module.exports = router;
