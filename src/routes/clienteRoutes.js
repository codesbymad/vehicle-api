import express from 'express'
import { criarCliente } from '../controllers/ClienteController.js'
//import { totalClientes } from '../controllers/ClienteController.js'
//import { deletarCliente } from '../controllers/ClienteController.js'
//import { editarCliente } from '../controllers/ClienteController.js'
//import { buscarClienteId} from '../controllers/ClienteController.js'

const router = express.Router()

router.post('/cadastro', criarCliente)
//router.get('/todosClientes', totalClientes)
//router.delete('/deletar/:id', deletarCliente)
//router.put('/editar/:id', editarCliente)
//router.get('/buscarClienteId/:id', buscarClienteId)
//router.get('/buscarClientePlaca/:placa', buscarClientePlaca)

export default router