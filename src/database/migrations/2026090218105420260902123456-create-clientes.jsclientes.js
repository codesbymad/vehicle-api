'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },

      endereco: {
        type: Sequelize.STRING,
        allowNull: false
      },


      telefone: {
        type: Sequelize.STRING,
        allowNull: false
      },

      email: {
        type: Sequelize.STRING
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

    await queryInterface.dropTable('clientes');

  }
};
