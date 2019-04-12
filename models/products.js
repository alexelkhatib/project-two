// Requiring bcrypt for password hashing. Using the bcrypt-nodejs version as the regular bcrypt module
// sometimes causes errors on Windows machines
// var bcrypt = require("bcrypt-nodejs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
  
    prod_name: {
      type: DataTypes.STRING,
      allowNull: false
    //   unique: true,
    
    },
    bid_price: DataTypes.INTEGER,
    // The password cannot be null
    prod_Category: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prod_img: {
        type: DataTypes.STRING,
        allowNull: false
      }
//     Prod_name varchar(25),
// prod_Category varchar(25),
// Prod_img varchar(100),
  });

  Product.associate = function(models) {
    // We're saying that a Product should belong to an Author
    // A Product can't be created without an Author due to the foreign key constraint
    Product.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  }
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
//   U.prototype.validPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
//   };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
//   User.hook("beforeCreate", function(user) {
//     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
//   });
// Product.sync({force:true}).then(function(){})
//   return Product.create({
//     prod_name:"Big Foot",
//     prod_Category:"Unknown",
//     prod_img:"Unknown"

//   }) ;
return Product;
};
// product.findAll({})
