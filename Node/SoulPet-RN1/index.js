require("dotenv").config()

const express = require("express");
const morgan = require("morgan");
const app = express()
app.use(express.json())
app.use(morgan("dev"))

const { connection, authenticate } = require("./database/database")
authenticate(connection)

const rotasClientes = require("./routes/clientes")
const rotasPets = require("./routes/pets")

app.use(rotasClientes)
app.use(rotasPets)

app.listen(3000, () => {
  connection.sync({ force: true })
  console.log("Servidor rodando em http://localhost:3000/");
})