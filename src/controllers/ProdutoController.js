import Produto from '../models/Produto.js'
import crypto from 'node:crypto'
import { uuidValido } from '../utils/validarUuid.js'

export const criarProduto = async (req, res, next) => {

    try {
 
        const produtoCriar = {
            id: crypto.randomUUID(),
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            valor_diaria: req.body.valor_diaria,
            status: req.body.status
        }

        const produto = await Produto.create(produtoCriar)


        res.status(201).json(produto)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

export const totalProdutos = async (req, res, next) => {

    try {
        const produto = await Produto.findAll()
        res.status(200).json(produto)
    } catch (err) {
        next(err)
    }

}

export const deletarProduto = async (req, res, next) => {


    try {
        if (!uuidValido(req.params.id)) {
            return res.status(400).json({
                message: "O id deve ser um UUID válido"
            })
        }
        const produto = await Produto.destroy({
            where: { id: req.params.id }
        })
        
        if (produto == 0){
            return res.status(404).json(produto)
        }

        res.status(200).json(produto)
    } catch (err) {
        next(err)
    }
}

export const editarProduto = async (req, res, next) => {

    try {

        if (!uuidValido(req.params.id)) {
            return res.status(400).json({
                message: "O id deve ser um UUID válido"
            })
        }

        const produtoEditar = {
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            valor_diaria: req.body.valor_diaria,
            status: req.body.status
        }

        

        const produto = await Produto.update(produtoEditar, {
            where: { id: req.params.id }
        })

        if (produto[0] == 0){
            return res.status(404).json(produto)
        }

        
        const produtoup = await Produto.findByPk(req.params.id)

        
        
        res.status(200).json(produtoup)

    } catch (err) {
        next(err)
    }
}

export const buscarProdutoId = async (req, res, next) => {

    try {
        if (!uuidValido(req.params.id)) {
            return res.status(400).json({
                message: "O id deve ser um UUID válido"
            })
        }
        const produto = await Produto.findByPk(req.params.id)
        if (produto == null){
            return res.status(404).json(produto)
        }
        res.status(200).json(produto)
    } catch (err) {
        next(err)
    }

}

export const buscarProdutoPlaca = async (req, res, next) => {

    try {
       
        const produto = await Produto.findOne({where: { placa: req.params.placa }})
        if (produto == null){
            return res.status(404).json(produto)
        }
        res.status(200).json(produto)
    } catch (err) {
        next(err)
    }

}