'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ip_address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ip_address.init({
    name: DataTypes.STRING,
    ip: DataTypes.STRING
  }, {
    sequelize,
    tableName:'ip_address',
    modelName: 'ip_address',
  });
  return ip_address;
};