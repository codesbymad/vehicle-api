import Sequelize, { Model } from 'sequelize'

class Cliente extends Model {
    static init(sequelize) {
        super.init(
            {

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
                    type: Sequelize.STRING,
                    validate: {
                        isEmail: true
                    }
                }
            },
            {
                sequelize, tableName: 'clientes'
            }
        )
    }
}

export default Cliente