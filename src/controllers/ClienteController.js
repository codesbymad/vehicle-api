import Cliente from '../models/Cliente.js'
import crypto from 'node:crypto'

export const criarCliente = async (req, res, next) => {

    try {
        const clienteCriar = {
            id: crypto.randomUUID(),
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            email: req.body.email
        }

        const cliente = await Cliente.create(clienteCriar)

        res.status(201).json(cliente)
    } catch (err) {
        console.log(err)
        next(err)
    }
}

/*export const totalClientes = async (req, res) => {

    try {
        const cliente = await Cliente.findAll()
        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }

}

export const deletarCliente = async (req, res) => {


    try {
        const cliente = await Cliente.destroy({
            where: { id: req.params.id }
        })

        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }
}

export const editarCliente = async (req, res) => {

    try {
        const clienteEditar = {
            id: req.params.id,
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            email: req.body.email,
            valor_diaria: req.body.valor_diaria,
            status: req.body.status
        }

        const cliente = await Cliente.update(clienteEditar, {
            where: { id: req.params.id }
        })

        const clienteup = await Cliente.findByPk(req.params.id)
        res.status(200).json(clienteup)

    } catch (err) {
        res.status(500).json(err)
    }
}

export const buscarClienteId = async (req, res) => {

    try {
        const cliente = await Cliente.findByPk(req.params.id)
        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }

}

export const buscarClienteemail = async (req, res) => {

    try {
        const cliente = await Cliente.findOne({where: { email: req.params.email }})
        res.status(200).json(cliente)
    } catch (err) {
        res.status(500).json(err)
    }

}*/