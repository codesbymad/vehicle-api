//iniciar servidor: node src/server.js

import express from 'express'
import usuarioRotas from './routes.js'

const app = express()
app.use(express.json())

app.use('/usuarios', usuarioRotas)
//app.use('/veiculos', veiculoRotas)

app.listen(3000, () => console.log("Servidor ON"))