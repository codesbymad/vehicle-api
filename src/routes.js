import express from 'express'
import { criarUsuario } from './controllers/usuarioController.js'
import { totalUsuarios } from './controllers/usuarioController.js'
import { deletarUsuario } from './controllers/usuarioController.js'

const router = express.Router()

router.post('/cadastro', criarUsuario)
router.get('/todosUsuarios', totalUsuarios)
router.delete('/deletar', deletarUsuario)

export default router