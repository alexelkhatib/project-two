	// insert into Auc_Items values(1,'Markhor','Animal','has ears','Ama',10,20.00,20.00); 
    var db = require("../models");

    // Routes
    // =============================================================
    module.exports = function(app) {
    
      // GET route for getting all of the todos
      app.get("/inventory", function(req, res) {
        // findAll returns all entries for a table when used with no options
        db.Product.findAll({}).then(function(data) {
          // We have access to the todos as an argument inside of the callback function
          res.json(data);
        });
      });
    
      // POST route for saving a new todo
      app.post("/add_inventory", function(req, res) {
        // create takes an argument of an object describing the item we want to
        // insert into our table. In this case we just we pass in an object with a text
        // and complete property
        // console.log(req.body);
        db.Inventory.create({
          "Item_name":"Diamond Tennis Necklace",
          "Item_Desc":"100 carat",
          "Item_Category": "Jewelry",
          "Item_img":"https://cdn.shopify.com/s/files/1/2426/2913/products/product-image-576446496_1200x1200.jpg?v=1528090146%27",
          "Item_Qty":"1",
          "Starting_Bid_Price":"10,000,000",
          "Ending_Bid_Price": ""
            },
            {

           "Item_name":"Markhor",
           "Item_Desc":"Rare Moutain Goat",
           "Item_Category": "Animal",
           "Item_img":"http://1.bp.blogspot.com/-nZ8Ej-dSi_U/Udxy7qvmXMI/AAAAAAAAAu8/hjwFHpXKAQY/s1600/Markhor.jpg",
           "Item_Qty":"3",
           "Starting_Bid_Price":"500,000",
           "Ending_Bid_Price": ""},
        {
            "Item_name":"Bugatti",
            "Item_Desc":"250 miles",
            "Item_Category": "Vehicle",
             "Item_img":"https://assets.bugatti.com/fileadmin/_processed_/sei/p54/se-image-4d7e0aefef47f54a3b7f7c4c8d619141.jpg",
             "Item_Qty":"2",
             "Starting_Bid_Price":"1,000,000",
             "Ending_Bid_Price": ""},

        { "Item_name":"Diamond Tennis Necklace",
           "Item_Desc":"100 carat",
           "Item_Category": "Jewelry",
            "Item_img":"https://cdn.shopify.com/s/files/1/2426/2913/products/product-image-576446496_1200x1200.jpg?v=1528090146%27",
            "Item_Qty":"1",
            "Starting_Bid_Price":"10,000,000",
            "Ending_Bid_Price": ""}


           
        ).then(function(data) {
          // We have access to the new todo as an argument inside of the callback function
          // res.json(data);
          console.log(data);
        });
      });
    
     
    };
      