const express = require("express")
const route = express.Router()

const {listar,criar,buscar, atualizar, deletar} = require("../controllers/pedidos.controller.js")






route.get("/listar",listar)
route.get("/buscar/:id",buscar)
route.post("/criar",criar)
route.put("/atualizar/:id",atualizar)
route.delete("/deletar/:id",deletar)






module.exports = route;