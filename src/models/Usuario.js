import Sequelize, { Model } from 'sequelize'

class Usuario extends Model {
    static init(sequelize) {
        super.init(
            {

                nome: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

                email: {
                    type: Sequelize.STRING,
                    allowNull: false,
                    unique: true,
                    validate: {
                        isEmail: true
                    }
                },

                senha: {
                    type: Sequelize.STRING,
                    allowNull: false
                },

            },
            { sequelize, tableName: 'usuarios'
            }
        )
    }
}

export default Usuario