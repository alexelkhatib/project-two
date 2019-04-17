

// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Book" model that matches up with DB
var Inventory = sequelize.define("Inventory", {
  title: Sequelize.STRING,
  author: Sequelize.STRING,
  genre: Sequelize.STRING,
  pages: Sequelize.INTEGER
});

// Syncs with DB
Inventory.sync();

// Makes the Book Model available for other files (will also create a table)
module.exports = Book;