import jwt from 'jsonwebtoken'

export const autenticacao = (req, res, next) => {
    const valorHeader = req.headers.authorization

    if (!valorHeader) {
        return res.status(401).json({
            message: "Token não informado"
        })
    }

    const separar = valorHeader.split(' ')

    if (separar[0] != "Bearer" || separar[1] == null) {
        return res.status(401).json({
            message: "Autorização malformada"
        })
    }

    const tokenAuten = separar[1]

    try {
        const decodificacao = jwt.verify(tokenAuten, process.env.JWT_SECRET)
        req.usuario = decodificacao.id
        next()
    } catch {
        return res.status(401).json({
            message: "Token inválido"
        })
    }
}