var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var Burger = sequelize.define("burger", {
  name: Sequelize.STRING,
  devoured: Sequelize.BOOLEAN
});

Burger.sync();

module.exports = Burger;
