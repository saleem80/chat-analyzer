'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('visitors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Name Cannot Be NULL' },
          notEmpty: { msg: 'Name Cannot Be Empty' }
        }
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Email Cannot Be NULL' },
          notEmpty: { msg: 'Email Cannot Be Empty' },
          isEmail: { msg: 'Must be a valid email address' },
        }
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'Phone Number Cannot Be NULL' },
          notEmpty: { msg: 'Phone Number Cannot Be Empty' }
        }
      },
      msg: {
        type: DataTypes.STRING,
        allowNull: false
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
    await queryInterface.dropTable('visitors');
  }
};