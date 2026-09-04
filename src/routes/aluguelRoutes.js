import express from 'express'
import { criarAluguel, devolverAluguel } from '../controllers/AluguelController.js'
import { autenticacao } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/cadastro', autenticacao, criarAluguel)
router.put('/devolverAluguel/:id', autenticacao, devolverAluguel)

export default router