import express from 'express'
import { buscarProdutoPlaca, criarProduto } from './controllers/ProdutoController.js'
import { totalProdutos } from './controllers/ProdutoController.js'
import { deletarProduto } from './controllers/ProdutoController.js'
import { editarProduto } from './controllers/ProdutoController.js'
import { buscarProdutoId} from './controllers/ProdutoController.js'

const router = express.Router()

router.post('/cadastro', criarProduto)
router.get('/todosProdutos', totalProdutos)
router.delete('/deletar/:id', deletarProduto)
router.put('/editar/:id', editarProduto)
router.get('/buscarProdutoId/:id', buscarProdutoId)
router.get('/buscarProdutoPlaca/:placa', buscarProdutoPlaca)

export default router