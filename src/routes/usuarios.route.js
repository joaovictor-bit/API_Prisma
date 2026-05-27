const express = require("express")


const route = express.Router()

const {listar,criar,buscar, editar, deletar} = require("../controllers/usuarios.controller.js")



route.get("/listar",listar)
route.get("/buscar/:id",buscar)
route.post("/criar",criar)
route.put("/editar/:id",editar)
route.delete("/deletar/:id",deletar)





module.exports = route;