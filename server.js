require('dotenv').config();

const express = require('express');
const cors = require("cors");

const usuariosRoutes = require('./src/routes/usuarios.route.js')
const pedidosRoutes = require('./src/routes/pedidos.route.js')

const app = express();
app.use(express.json());
app.use(cors());


app.use("/usuarios",usuariosRoutes);
app.use("/pedidos",pedidosRoutes)




app.get("/", (req, res) =>{
    res.json({
      msg:"hello world"
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
