const prisma = require("../data/prisma.js")


const listar = async (req, res) => {

    try {

        const lista = await prisma.pedido.findMany()

        if (lista.length === 0) {
            return res.status(404).json({
                msg: "Nenhum pedido encontrado"
            }).end()
        }

        res.status(200).json(lista).end()

    } catch (error) {

        res.status(400).json({
            msg: "Erro ao listar pedidos",
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

        const lista = await prisma.pedido.findUnique({
            where: {
                id: id
            }
        })

        if (!lista) {
            return res.status(404).json({
                msg: "Pedido não encontrado"
            }).end()
        }

        res.status(200).json(lista).end()

    } catch (error) {

        res.status(400).json({
            msg: "Erro ao buscar pedido",
            error: error.message
        }).end()

    }

}






const criar = async (req, res) => {

    try {

        const data = req.body

        if (!data.produto || !data.usuarioId) {
            return res.status(400).json({
                msg: "Produto e usuarioId são obrigatórios"
            }).end()
        }

        const criarPedido = await prisma.pedido.create({
            data: data
        })

        res.status(201).json(criarPedido).end()

    } catch (error) {

        res.status(400).json({
            msg: "Erro ao criar pedido",
            error: error.message
        }).end()

    }

}




const atualizar = async (req,res)=>{
    const id = Number(req.params.id)
    const data = req.body
    const atualizarPedido = await prisma.pedido.update({
        where:{
            id: id
        },
        data: data

    })
    res.status(200).json(atualizarPedido).end()


}


const deletar = async (req, res) => {

    try {

        const id = Number(req.params.id)

        if (!id) {
            return res.status(400).json({
                msg: "ID inválido"
            }).end()
        }

        const deletarProduto = await prisma.pedido.delete({
            where: {
                id: id
            }
        })

        res.status(200).json({
            msg: "Pedido deletado com sucesso",
            deletarProduto
        }).end()

    } catch (error) {

        res.status(400).json({
            msg: "Erro ao deletar pedido",
            error: error.message
        }).end()

    }

}










module.exports = {
    listar,
    criar,
    buscar,
    atualizar,
    deletar
}