var Sequelize = require("sequelize");
var sequelize = require("../config/connection");

var Burger = sequelize.define("Burger", {
  burger_name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;

