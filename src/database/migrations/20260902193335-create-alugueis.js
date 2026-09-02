'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('alugueis', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
      },

      cliente_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'clientes',
          key: 'id'
        }
      },

      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'products',
          key: 'id'
        }
      },

      data_inicio: {
        type: Sequelize.DATE,
        allowNull: false
      },

      data_fim: {
        type: Sequelize.DATE,
        allowNull: false
      },

      data_devolucao: {
        type: Sequelize.DATE
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

    await queryInterface.dropTable('alugueis');

  }
};
