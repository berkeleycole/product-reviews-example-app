'use strict';
module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
		Product.hasMany(models.Review,{
			foreignKey: 'productId',
			as: 'reviews'
		})
      }
    }
  });
  return Product;
};
