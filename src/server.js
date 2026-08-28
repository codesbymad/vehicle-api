//iniciar servidor: node src/server.js

import express from 'express'
import ProdutoRotas from './routes.js'

const app = express()
app.use(express.json())

app.use('/Produtos', ProdutoRotas)
//app.use('/veiculos', veiculoRotas)

app.listen(3000, () => console.log("Servidor ON"))