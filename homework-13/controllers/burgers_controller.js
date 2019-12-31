var Burger = require("../models/burger.js");
var express = require("express")
var router = express.Router()



router.get("/", function(req, res) {
  Burger.findAll({}).then(function(data) {
    var hbsObject = {
      burger: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  Burger.create({
    name: req.body.name,
    devoured: req.body.devoured
  }).then(function(result) {
    res.json({ id: result.id });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  Burger.update({
    devoured: true}, {
        where: {
            id: req.params.id
        }
    }
  ).then(function(result) {
    res.json(result)
    })
  });

module.exports = router;
