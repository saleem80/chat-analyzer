'use strict';

//const { DataTypes } = require("sequelize/types");

module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      order_id: {
        type:DataTypes.STRING,
        defaultValue:DataTypes.UUIDV4
      },
      name: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Name Cannot Be NULL' },
          notEmpty: { msg: 'Name Cannot Be Empty' }
        }
      },
      phone:  {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Phone Cannot Be NULL' },
          notEmpty: { msg: 'Phone Cannot Be Empty' }
        }
      },
      address: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Address Cannot Be NULL' },
          notEmpty: { msg: 'Address Cannot Be Empty' }
        }
      },
      city: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'City Cannot Be NULL' },
          notEmpty: { msg: 'City Cannot Be Empty' }
        }
      },
      pincode: {
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Pincode Cannot Be NULL' },
          notEmpty: { msg: 'Pincode Cannot Be Empty' }
        }
      },
      email:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Email Cannot Be NULL' },
          notEmpty: { msg: 'Email Cannot Be Empty' },
          isEmail:{msg:"Must be valid Email"}
        }
      },
      from_ip:{
        type:DataTypes.STRING,
        allowNull:false
      },
      from_browser: {
        type:DataTypes.STRING,
        allowNull:false
      },
      payment_id:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Payment id Cannot Be NULL' },
          notEmpty: { msg: 'Payment id Cannot Be Empty' }
        }
      },
      payment_method:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: {
          notNull: { msg: 'Payment Method Cannot Be NULL' },
          notEmpty: { msg: 'Payment Method Cannot Be Empty' }
        }
      },
      status: {
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"pending"
      },
      capture_status: {
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:"NO"
      },
      date: {
        type:DataTypes.DATE,
        allowNull:false
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },
  async down(queryInterface, DataTypes) {
    await queryInterface.dropTable('orders');
  }
};