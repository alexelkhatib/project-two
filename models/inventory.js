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

            type:DataTypes.STRING
            // type:DataTypes.blob


        },
        Item_Qty:{

            type:DataTypes.INTEGER


        },

        Starting_Bid_Price:{

            type:DataTypes.DECIMAL
        },
        Ending_Bid_Price:{

            type:DataTypes.DECIMAL
        },


    });
    return Inventory;

}