var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // 
  app.get("/inventory", function(req, res) {
    // findAll returns all entries for a table when used with no options
    db.Inventory.findAll({}).then(function(data) {
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
    db.inventory.create(
        {
        "Item_name":"Big Foot",
        "Item_Desc":"Big Foot",
        "Item_Category":"Animal",
        "Item_img":"http://www.todayifoundout.com/wp-content/uploads/2013/05/bigfoot.jpg",
        "Item_Qty":"10",
        "Starting_bid":"100"
      
    },
    {"Item_name":"Markhor",
    "Item_Desc":"Mountain Goat",
    "Item_Category":"Animal",
    "Item_img":"http://1.bp.blogspot.com/-nZ8Ej-dSi_U/Udxy7qvmXMI/AAAAAAAAAu8/hjwFHpXKAQY/s1600/Markhor.jpg,",
    "Item_Qty":"10",
    "Starting_bid":"100",
},

    {"Item_name":"Big Foot",
        "Item_Desc":"Big Foot",
        "Item_Category":"Animal",
        "Item_img":"http://www.todayifoundout.com/wp-content/uploads/2013/05/bigfoot.jpg",
        "Item_Qty":"10",
        "Starting_bid":"100",
        
},

{"Item_name":"Big Foot",
        "Item_Desc":"Big Foot",
        "Item_Category":"Animal",
        "Item_img":"http://www.todayifoundout.com/wp-content/uploads/2013/05/bigfoot.jpg",
        "Item_Qty":"10",
        "Starting_bid":"100",
        
}

    
    ).then(function(data) {
      // We have access to the new todo as an argument inside of the callback function
      // res.json(data);
      console.log(data);
    });
  });


  const newData = {  
    Item_Qty: '5'
  };
  
  db.pets.update(newData, {where: { Item_Qty: '1' } })  
  .then(updatedMax => {
    console.log(updatedMax)
  })

  app.delete('/inventory/:id', (req, res) => {
    const id = req.params.id;
    db.owners.destroy({
      where: { id: id }
    })
      .then(deletedOwner => {
        res.json(deletedOwner);
      });

};
