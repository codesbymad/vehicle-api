//iniciar servidor: node src/server.js

import express from 'express'
import Produto from './models/Produto.js'
import Cliente from './models/Cliente.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import ProdutoRotas from './routes/produtoRoutes.js'
import ClienteRotas from './routes/clienteRoutes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
Produto.init(sequelize)
Cliente.init(sequelize)

app.use('/Produtos', ProdutoRotas)
app.use('/clientes', ClienteRotas)

sequelize.authenticate().then(() => {
    console.log("Banco de dados funcionando")
    app.listen(3000, () => console.log("Servidor ON"))
}).catch( err => (
    console.error(err)
))

