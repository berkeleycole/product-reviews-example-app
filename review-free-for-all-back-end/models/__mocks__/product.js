'use strict'
var SequelizeMock = require('sequelize-mock')
var dbMock = new SequelizeMock()

module.exports = function(sequelize, DataTypes){
  return dbMock.define('Product', {
    name: 'Pencil',
    description: 'wood with a pointy end.'
  })
}
