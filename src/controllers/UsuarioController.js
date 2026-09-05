import Usuario from '../models/Usuario.js'
import crypto from 'node:crypto'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const criarUsuario = async (req, res, next) => {

    try {

        if (!req.body.senha || req.body.senha.trim() === "") {
            return res.status(400).json({
                message: "Preencha o campo senha"
            })
        }
        if (!req.body.nome || req.body.nome.trim() === "") {
            return res.status(400).json({
                message: "O nome é obrigatório"
            })
        }
        if (!req.body.email || req.body.email.trim() === "") {
            return res.status(400).json({
                message: "O email é obrigatório"
            })
        }
        const senhaHash = await bcrypt.hash(req.body.senha, 10)

        const usuarioCriar = {
            id: crypto.randomUUID(),
            nome: req.body.nome,
            email: req.body.email,
            senha: senhaHash
        }

        const usuario = await Usuario.create(usuarioCriar)

        res.status(201).json({
            id: usuario.id,
            nome: usuario.nome,
            email: usuario.email
        })
    } catch (err) {
        next(err)
    }
}

export const loginUsuario = async (req, res, next) => {

    try {
        if (!req.body.email || req.body.email.trim() === "") {
            return res.status(400).json({
                message: "O email é obrigatório"
            })
        }
        if (!req.body.senha || req.body.senha.trim() === "") {
            return res.status(400).json({
                message: "Preencha o campo senha"
            })
        }
        const usuario = await Usuario.findOne({ where: { email: req.body.email } })
        if (usuario == null) {
            return res.status(401).json({
                message: "Email ou senha inválidos"
            })
        }


        const senhaValida = await bcrypt.compare(req.body.senha, usuario.senha)
        if (senhaValida == false) {
            return res.status(401).json({
                message: "Email ou senha inválidos"
            })
        }

        const token = jwt.sign({ id: usuario.id }, process.env.JWT_SECRET, { expiresIn: '1h' })

        res.status(200).json({
            token: token
        })

    } catch (err) {
        next(err)
    }
}