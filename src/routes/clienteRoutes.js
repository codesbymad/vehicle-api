import express from 'express'
import { criarCliente } from '../controllers/ClienteController.js'

const router = express.Router()

router.post('/cadastro', criarCliente)

export default router