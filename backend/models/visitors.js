'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Visitors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Visitors.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: 'Name Cannot Be NULL' },
        notEmpty: { msg: 'Name Cannot Be Empty' }
      }
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: 'Email Cannot Be NULL' },
        notEmpty: { msg: 'Email Cannot Be Empty' },
        isEmail: { msg: 'Must be a valid email address' },
      }
    },
    phone: {
      type:DataTypes.STRING,
      allowNull:false,
      validate: {
        notNull: { msg: 'Phone Number Cannot Be NULL' },
        notEmpty: { msg: 'Phone Number Cannot Be Empty' }
      }
    },
    msg: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    tableName:'visitors',
    modelName: 'Visitors',
  });
  return Visitors;
};