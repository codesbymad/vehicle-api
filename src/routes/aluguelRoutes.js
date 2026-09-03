import express from 'express'
import { criarAluguel, devolverAluguel } from '../controllers/AluguelController.js'

const router = express.Router()

router.post('/cadastro', criarAluguel)
router.put('/devolverAluguel/:id', devolverAluguel)

export default router