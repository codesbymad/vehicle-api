// ativar o servidor: node --env-file=.env src/server.js

import express from 'express'
import Produto from './models/Produto.js'
import Cliente from './models/Cliente.js'
import Aluguel from './models/Aluguel.js'
import Usuario from './models/Usuario.js'
import { sequelize }  from './database/index.js'
import ProdutoRotas from './routes/produtoRoutes.js'
import ClienteRotas from './routes/clienteRoutes.js'
import AluguelRotas from './routes/aluguelRoutes.js'
import UsuarioRotas from './routes/usuarioRoutes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerDocument from './docs/swagger.js'

const app = express()
app.use(express.json())

Produto.init(sequelize)
Cliente.init(sequelize)
Aluguel.init(sequelize)
Usuario.init(sequelize)

app.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/Produtos', ProdutoRotas)
app.use('/clientes', ClienteRotas)
app.use('/alugueis', AluguelRotas)
app.use('/usuarios', UsuarioRotas)
app.use((err, req, res, next) => {
    if (err.name === "SequelizeUniqueConstraintError" && err.errors[0].path == "placa") {
        return res.status(400).json({
            message: "A placa informada já está cadastrada"
        })
    }
    if (err.name === "SequelizeUniqueConstraintError" && err.errors[0].path == "email") {
        return res.status(400).json({
            message: "O email já está cadastrado"
        })
    }
    if (err.name === "SequelizeDatabaseError" && err.parent?.message?.includes("invalid input value for enum")) {
        return res.status(400).json({
            message: "Valor inválido atribuído ao status"
        })
    }
    if (err.name === "SequelizeValidationError") {
        return res.status(400).json({
            message: "Dados inválidos na requisição"
        })
    }
    if (err.name === "SequelizeForeignKeyConstraintError") {
        return res.status(400).json({
            message: "Não é possível excluir um veículo que possui histórico de aluguel"
        })
    }
    res.status(500).json({
        message: "Erro interno inesperado do servidor"
    })
})


sequelize.authenticate().then(() => {
    console.log("Banco de dados funcionando")
    app.listen(3000, () => console.log("Servidor ON"))
}).catch(err => {
    console.error("Erro ao conectar com o banco de dados:", err)
})

