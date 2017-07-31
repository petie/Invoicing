"use strict";

module.exports = (sequelize, DataTypes) => {
  var Invoice = sequelize.define("Invoice", {
    title:{
      type: DataTypes.STRING,
      allowNull: false
    },
    documentDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    netTotal: {
      type: DataTypes.DECIMAL(10, 2)
    },
    grossTotal: {
      type: DataTypes.DECIMAL(10, 2)
    },
    taxTotal: {
      type: DataTypes.DECIMAL(10, 2)
    },
    recipientName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientStreet: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientCity: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientZip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientNip: {
      type: DataTypes.STRING,
      allowNull: false
    }

  });

  Invoice.associate = (models) => {
    Invoice.hasMany(models.Item)
  }

  return Invoice;
};
