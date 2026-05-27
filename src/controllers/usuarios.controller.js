const prisma = require("../data/prisma.js");



const listar = async (req, res) => {
    
    try {
        const lista = await prisma.usuario.findMany();
        res.status(200).json(lista).end()
    } catch (error) {

        res.status(500).json({
            msg: "Erro ao listar usuários",
            error: error.message
        }).end()

    }

}




const buscar = async (req, res) => {

    try {

        const id = Number(req.params.id)

        if (!id) {
            return res.status(400).json({
                msg: "ID inválido"
            }).end()
        }

        const buscarUsuario = await prisma.usuario.findUnique({
            where: {
                id: id
            }
        });

        if (!buscarUsuario) {
            return res.status(404).json({
                msg: "Usuário não encontrado"
            }).end()
        }

        res.status(200).json(buscarUsuario).end()

    } catch (error) {

        res.status(500).json({
            msg: "Erro ao buscar usuário",
            error: error.message
        }).end()

    }

}






const criar = async (req, res) => {

    try {

        const data = req.body

        if (!data.nome || !data.email|| !data.senha || !data.idade) {
            return res.status(400).json({
                msg: "Nome, email, senha, e idade são obrigatórios"
            }).end()
        }

        const criarUsuario = await prisma.usuario.create({
            data: data
        });

        res.status(201).json(criarUsuario).end()

    } catch (error) {

        res.status(500).json({
            msg: "Erro ao criar usuário",
            error: error.message
        }).end()

    }

}





const editar = async (req, res) => {
    const id = Number(req.params.id)
    const data = req.body

    const editarUsuario = await prisma.usuario.update({
        where: {
            id: id
        },
        data: data
    })
    res.status(200).json(editarUsuario).end()
}


const deletar = async (req, res) => {

    try {

        const id = Number(req.params.id)

        if (!id) {
            return res.status(400).json({
                msg: "ID inválido"
            }).end()
        }

        await prisma.usuario.delete({
            where: {
                id: id
            }
        })

        res.status(200).json({
            msg: "Usuário deletado com sucesso"
        }).end()

    } catch (error) {

        res.status(500).json({
            msg: "Erro ao deletar usuário",
            error: error.message
        }).end()

    }

}





module.exports = {
    listar,
    criar,
    buscar,
    editar,
    deletar
}
