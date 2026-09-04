import express from 'express'
import { criarCliente } from '../controllers/ClienteController.js'
import { autenticacao } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/cadastro', autenticacao, criarCliente)

export default router