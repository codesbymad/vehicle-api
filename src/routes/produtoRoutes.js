import express from 'express'
import {
    criarProduto,
    totalProdutos,
    deletarProduto,
    editarProduto,
    buscarProdutoId,
    buscarProdutoPlaca
} from '../controllers/ProdutoController.js'

const router = express.Router()

router.post('/cadastro', criarProduto)
router.get('/todosProdutos', totalProdutos)
router.delete('/deletar/:id', deletarProduto)
router.put('/editar/:id', editarProduto)
router.get('/buscarProdutoId/:id', buscarProdutoId)
router.get('/buscarProdutoPlaca/:placa', buscarProdutoPlaca)

export default router