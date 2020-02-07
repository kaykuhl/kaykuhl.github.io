const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var burgerSchema = new Schema({

  burger_name: {
    type: String,
    trim: true,
  },
  devoured: {
    type: Boolean,
    default: false,
  }
  });

const Burger = mongoose.model("Burger", burgerSchema);

module.exports = Burger;

