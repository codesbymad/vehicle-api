'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      marca: {
        type: Sequelize.STRING,
        allowNull: false
      },

      modelo: {
        type: Sequelize.STRING,
        allowNull: false
      },

      ano: {
        type: Sequelize.INTEGER,
        allowNull: false
      },

      placa: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },

      valor_diaria: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false
      },

      status: {
        type: Sequelize.ENUM('disponivel', 'alugado'),
        allowNull: false,
        defaultValue: 'disponivel'
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.dropTable('products');

  }
};
