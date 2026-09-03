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
        next(err)
    }
}