// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function (req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });
  app.get("/animals", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/animals.html"));
  });
  app.get("/art", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/art.html"));
  }); app.get("/cars", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/cars.html"));
  }); app.get("/jewelry", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/jewelry.html"));
  });

  // Once a specific item from the inventory page has been selected, user will be taken to the bidding page for the final step of their UX.
  app.get("/bidding", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bidding.html"));
  });

  app.get("/admin/Inventory", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/Inventory.html"));
  });

};
