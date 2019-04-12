// Requiring path to so we can use relative routes to our HTML files
var path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, function(req, res) {
    res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  // Here we are setting the inventory path. The data which will populate this is dependent on the api route and button clicked form our drop-down menu
  app.get("/inventory", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/inventory.html"));
  });

  // Once a specific item from the inventory page has been selected, user will be taken to the bidding page for the final step of their UX.
  app.get("/bidding", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/bidding.html"));
  });

};
