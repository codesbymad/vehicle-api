import express from 'express'
import { criarAluguel } from '../controllers/AluguelController.js'
import { devolverAluguel } from '../controllers/AluguelController.js'
//import { deletarAluguel } from '../controllers/AluguelController.js'
//import { editarAluguel } from '../controllers/AluguelController.js'
//import { buscarAluguelId} from '../controllers/AluguelController.js'
//import { buscarAluguelPlaca} from '../controllers/AluguelController.js'

const router = express.Router()

router.post('/cadastro', criarAluguel)
router.get('/devolverAluguel/:id', devolverAluguel)
//router.delete('/deletar/:id', deletarAluguel)
//router.put('/editar/:id', editarAluguel)
//router.get('/buscarAluguelId/:id', buscarAluguelId)
//router.get('/buscarAluguelPlaca/:placa', buscarAluguelPlaca)

export default router