"use strict";

module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define("Item", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    count: {
      type: DataTypes.INTEGER
    },
    unitPrice: {
      type: DataTypes.DECIMAL(10,2)
    },
    itemTax: {
      type: DataTypes.DECIMAL(10,2)
    },
    itemTotal: {
      type: DataTypes.DECIMAL(10,2)
    }
  })

  Item.associate = (models) => {
    Item.belongsTo(models.Invoice, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    })
  }

  return Item;
}
