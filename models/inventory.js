module.exports = function(sequelize, DataTypes) {

    var Inventory = sequelize.define("Inventory", {

        Item_name:{
            type:DataTypes.STRING,
            validate:{
                len: [1]
            }
        },
        Item_Desc:{
            type:DataTypes.STRING,
            allowNull: false,
            validate:{
                len:[1]
            }


        },
        Item_Img:{

            type:DataTypes.STRING,
            type:DataTypes.blob


        },
        Item_Qty:{

            type:DataTypes.integer


        },

        Starting_Bid_Price:{

            type:DataTypes.decimal
        },
        Starting_Bid_Price:{

            type:DataTypes.decimal
        },


    });
    return(Student)

}