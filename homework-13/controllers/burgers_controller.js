var Burger = require("../models/burger.js");
var express = require("express")
var router = express.Router()


  // GET ALL BURGERS
  router.get("/api/burgers", function(req, res) {
    Burger.findAll({}).then(function(results) {
      res.json(results);
    });
  });

    // GET BURGER BY ID
    router.get("/api/burgers/:id", function(req, res) {
      Burger.findAll({where: {id: req.params.id}}).then(function(results) {
        res.json(results);
      });
    });

//INDEX
router.get("/", function(req,res){
  Burger.findAll({}).then(function(results) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

//POST REQUEST
router.post("/api/burgers", function(req, res) {
  Burger.create({
    burger_name: req.body.burger_name,
    devoured: false
  }).then(function(results) {
    res.send(results);
  });
});

//PUT(UPDATE) REQUEST
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
