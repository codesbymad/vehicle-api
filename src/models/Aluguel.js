import Sequelize, { Model } from 'sequelize'

class Aluguel extends Model {
    static init(sequelize) {
        super.init(
            {

                cliente_id: {
                    type: Sequelize.UUID,
                    allowNull: false
                },

                produto_id: {
                    type: Sequelize.UUID,
                    allowNull: false
                },

                data_inicio: {
                    type: Sequelize.DATE,
                    allowNull: false
                },

                data_fim: {
                    type: Sequelize.DATE,
                    allowNull: false
                }
            },
            { sequelize, tableName: 'alugueis'
            }
        )
    }
}

export default Aluguel