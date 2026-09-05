import Cliente from '../models/Cliente.js'
import crypto from 'node:crypto'

export const criarCliente = async (req, res, next) => {

    try {
        if (!req.body.nome || req.body.nome.trim() === "") {
            return res.status(400).json({
                message: "O nome é obrigatório"
            })
        }
        if (!req.body.endereco || req.body.endereco.trim() === "") {
            return res.status(400).json({
                message: "O endereço é obrigatório"
            })
        }
        if (!req.body.telefone || req.body.telefone.trim() === "") {
            return res.status(400).json({
                message: "O telefone é obrigatório"
            })
        }
        const email = req.body.email?.trim() || undefined
        const clienteCriar = {
            id: crypto.randomUUID(),
            nome: req.body.nome,
            endereco: req.body.endereco,
            telefone: req.body.telefone,
            email: email
        }

        const cliente = await Cliente.create(clienteCriar)

        res.status(201).json(cliente)
    } catch (err) {
        next(err)
    }
}