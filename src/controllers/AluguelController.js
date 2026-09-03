import Aluguel from '../models/Aluguel.js'
import Produto from '../models/Produto.js'
import Cliente from '../models/Cliente.js'
import crypto from 'node:crypto'
import { uuidValido } from '../utils/validarUuid.js'

export const criarAluguel = async (req, res, next) => {

    try {

        if (req.body.produto_id == "" || req.body.produto_id == null) {
            return res.status(400).json({
                message: "O produto_id é obrigatório"
            })
        }
        if (req.body.cliente_id == "" || req.body.cliente_id == null) {
            return res.status(400).json({
                message: "O cliente_id é obrigatório"
            })
        }

        const dataInicio = new Date(req.body.data_inicio)
        const dataFim = new Date(req.body.data_fim)

        if (isNaN(dataInicio.getTime()) || isNaN(dataFim.getTime())) {
            return res.status(400).json({
                message: "Data de início ou data de fim inválidas"
            })
        }

        if (dataFim < dataInicio) {
            return res.status(400).json({
                message: "A data de devolução informada acontece antes da data do aluguel"
            })
        }


        if (!uuidValido(req.body.produto_id)) {
            return res.status(400).json({
                message: "O produto_id deve ser um UUID válido"
            })
        }

        if (!uuidValido(req.body.cliente_id)) {
            return res.status(400).json({
                message: "O cliente_id deve ser um UUID válido"
            })
        }

        

        const produtoVer = await Produto.findByPk(req.body.produto_id)
        const clienteVer = await Cliente.findByPk(req.body.cliente_id)
        

        if (produtoVer == null) {
            return res.status(404).json({
                message: "Esse veículo não existe"
            })
        } else if (produtoVer.status == "alugado") {
            return res.status(400).json({
                message: "Veículo já está alugado"
            })
        }

        if (clienteVer == null) {
            return res.status(404).json({
                message: "Esse cliente não existe"
            })
        }

        const aluguelCriar = {
            id: crypto.randomUUID(),
            cliente_id: req.body.cliente_id,
            produto_id: req.body.produto_id,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim
        }

        const aluguel = await Aluguel.create(aluguelCriar)
        await Produto.update({ status: "alugado" }, {
            where: { id: req.body.produto_id }
        })

        const produtoup = await Produto.findByPk(req.body.produto_id)

        res.status(201).json({
            aluguel: aluguel,
            produto: produtoup
        })

    } catch (err) {
        next(err)
    }
}

export const devolverAluguel = async (req, res, next) => {

    try {

        if (req.params.id == "" || req.params.id == null) {
            return res.status(400).json({
                message: "O id é obrigatório"
            })
        }

        if (!uuidValido(req.params.id)) {
            return res.status(400).json({
                message: "O id deve ser um UUID válido"
            })
        }

        const aluguel = await Aluguel.findByPk(req.params.id)
        
        if (aluguel == null) {
            return res.status(404).json({
                message: "Esse id não existe"
            })
        }

        await Produto.update({ status: "disponivel" }, {
            where: { id: aluguel.produto_id}
        })

        const produtoup = await Produto.findByPk(aluguel.produto_id)
        
        res.status(200).json({
            aluguel: aluguel,
            produto: produtoup
        })
    } catch (err) {
        next(err)
    }

}

/*
export const deletarAluguel = async (req, res) => {


    try {
        const aluguel = await Aluguel.destroy({
            where: { id: req.params.id }
        })

        res.status(200).json(aluguel)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const editarAluguel = async (req, res) => {

    try {
        const aluguelEditar = {
            id: req.params.id,
            cliente_id: req.body.cliente_id,
            produto_id: req.body.produto_id,
            data_inicio: req.body.data_inicio,
            data_fim: req.body.data_fim,
            valor_diaria: req.body.valor_diaria,
            status: req.body.status
        }

        const aluguel = await Aluguel.update(aluguelEditar, {
            where: { id: req.params.id }
        })

        const aluguelup = await Aluguel.findByPk(req.params.id)
        res.status(200).json(aluguelup)

    } catch (err) {
        res.status(500).json(err)
    }
}

export const buscarAluguelId = async (req, res) => {

    try {
        const aluguel = await Aluguel.findByPk(req.params.id)
        res.status(200).json(aluguel)
    } catch (err) {
        res.status(500).json(err)
    }

}

export const buscarAlugueldata_fim = async (req, res) => {

    try {
        const aluguel = await Aluguel.findOne({where: { data_fim: req.params.data_fim }})
        res.status(200).json(aluguel)
    } catch (err) {
        res.status(500).json(err)
    }

}*/