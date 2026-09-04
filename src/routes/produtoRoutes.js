import express from 'express'
import {
    criarProduto,
    totalProdutos,
    deletarProduto,
    editarProduto,
    buscarProdutoId,
    buscarProdutoPlaca
} from '../controllers/ProdutoController.js'
import { autenticacao } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.post('/cadastro', autenticacao, criarProduto)
router.get('/todosProdutos', autenticacao, totalProdutos)
router.delete('/deletar/:id', autenticacao, deletarProduto)
router.put('/editar/:id', autenticacao, editarProduto)
router.get('/buscarProdutoId/:id', autenticacao, buscarProdutoId)
router.get('/buscarProdutoPlaca/:placa', autenticacao, buscarProdutoPlaca)

export default router