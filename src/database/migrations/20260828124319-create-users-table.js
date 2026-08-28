'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        AllowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },
      modelo: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      marca: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      placa: {
        type: Sequelize.STRING,
        AllowNull: false,
      },
      ano: {
        type: Sequelize.INTEGER,
        AllowNull: false,
      },
      update_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        AllowNull: false,
      },
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('products');

  }
};
