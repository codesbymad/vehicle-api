import Sequelize, { Model } from 'sequelize'

class Produto extends Model {
    static init(sequelize) {
        super.init(
            {

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
                }
            },
            { sequelize, tableName: 'products'
            }
        )
    }
}

export default Produto