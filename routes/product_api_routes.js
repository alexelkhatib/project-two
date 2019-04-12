var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/products", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Product.findAll({}).then(function(data) {
      // We have access to the todos as an argument inside of the callback function
      res.json(data);
    });
  });

  // POST route for saving a new todo
  app.post("/add_product", function(req, res) {
    // create takes an argument of an object describing the item we want to
    // insert into our table. In this case we just we pass in an object with a text
    // and complete property
    db.Product.create({
        prod_name:"Big Foot",
        prod_Category:"Unknown",
        prod_img:"Unknown"
    }).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      res.json(data);
    });
  });

  // DELETE route for deleting todos. We can get the id of the todo to be deleted from
  // req.params.id
//   app.delete("/api/todos/:id", function(req, res) {
//     // Use the sequelize destroy method to delete a record from our table with the
//     // id in req.params.id. res.json the result back to the user

//   });

  // PUT route for updating todos. We can get the updated todo data from req.body
//   app.put("/api/todos", function(req, res) {
//     // Use the sequelize update method to update a todo to be equal to the value of req.body
//     // req.body will contain the id of the todo we need to update
//   });
};
