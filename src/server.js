//iniciar servidor: node src/server.js

import express from 'express'
import Produto from './models/Produto.js'
import Cliente from './models/Cliente.js'
import Aluguel from './models/Aluguel.js'
import Sequelize from 'sequelize'
import config from './config/database.js'
import ProdutoRotas from './routes/produtoRoutes.js'
import ClienteRotas from './routes/clienteRoutes.js'
import AluguelRotas from './routes/aluguelRoutes.js'

const app = express()
app.use(express.json())

const sequelize = new Sequelize(config)
Produto.init(sequelize)
Cliente.init(sequelize)
Aluguel.init(sequelize)

app.use('/Produtos', ProdutoRotas)
app.use('/clientes', ClienteRotas)
app.use('/alugueis', AluguelRotas)

sequelize.authenticate().then(() => {
    console.log("Banco de dados funcionando")
    app.listen(3000, () => console.log("Servidor ON"))
}).catch( err => (
    console.error(err)
))

