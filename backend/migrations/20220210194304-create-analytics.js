'use strict';
module.exports = {
  async up(queryInterface, DataTypes) {
    await queryInterface.createTable('analytics', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      user_count: {
        type: DataTypes.INTEGER
      },
      zip_count: {
        type: DataTypes.INTEGER
      },
      txt_count: {
        type: DataTypes.INTEGER
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
    await queryInterface.dropTable('analytics');
  }
};