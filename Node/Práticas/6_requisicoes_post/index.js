const express = require("express")

const app = express()
app.use(express.json())

app.post("/enviar", (req, res) => {
  const {nome, email, senha } = req.body
  res.json(`Recebido: ${nome}, ${email}, ${senha}`)
})

app.post("/imc", (req, res) => {
  const {peso, altura} = req.body
  if (peso !== undefined && altura !== undefined) {
    const imc = peso / altura **2
    res.json({ resultado: imc })
  } else {
    res.status(400).json({ message: "Dados inválidos para calcular"})
  }
})

app.listen(3000, () => {
  console.log("http://localhost:3000/");
})