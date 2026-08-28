import express from 'express'
import { criarProduto } from './controllers/ProdutoController.js'
import { totalProdutos } from './controllers/ProdutoController.js'
import { deletarProduto } from './controllers/ProdutoController.js'

const router = express.Router()

router.post('/cadastro', criarProduto)
router.get('/todosProdutos', totalProdutos)
router.delete('/deletar/:id', deletarProduto)

export default router