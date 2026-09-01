import Produto from '../models/Produto.js'
import crypto from 'node:crypto'

export const criarProduto = async (req, res) => {

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
        res.status(500).json(err)
    }
}

export const totalProdutos = async (req, res) => {

    try{
        const produto = await Produto.findAll()
    res.status(200).json(produto)
}catch(err){
    res.status(500).json(err)
}

}

export const deletarProduto = async(req, res) => {

    
    try{
        const produto = await Produto.destroy({
        where: { id: req.params.id}
    })

    res.status(200).json(produto)
}catch(err){
    res.status(500).json(err)
}
}

export const editarProduto = async(req, res) => {

    try {
        const produtoEditar = {
            id: req.params.id,
            marca: req.body.marca,
            modelo: req.body.modelo,
            ano: req.body.ano,
            placa: req.body.placa,
            valor_diaria: req.body.valor_diaria,
            status: req.body.status
        }

        const produto = await Produto.update(produtoEditar,{
        where: { id: req.params.id}
    })

    const produtoup = await Produto.findByPk(req.params.id)
    res.status(200).json(produtoup)

}catch(err){
    res.status(500).json(err)
}
}