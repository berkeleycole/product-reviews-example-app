'use strict';
module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define('Review', {
    review: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
		  Review.belongsTo(models.Product,{
			  foreignKey: 'productId',
			  onDelete:'CASCADE'
		  })
      }
    }
  });
  return Review;
};
