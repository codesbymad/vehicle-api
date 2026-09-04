'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('usuarios', {
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

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },


      senha: {
        type: Sequelize.STRING,
        allowNull: false
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

    await queryInterface.dropTable('usuarios');

  }
};
