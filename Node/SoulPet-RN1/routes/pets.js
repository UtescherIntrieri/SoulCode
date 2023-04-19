const Cliente = require('../database/cliente')
const Pet = require('../database/pet')
const { Router } = require("express")


const router = Router()

router.get("/pets", async (req, res) => {
  const listaPets = await Pet.findAll()
  res.json(listaPets)
})

router.post("/pets", async (req, res) => {
  const { nome, tipo, dataNasc, porte, clienteId } = req.body
  try {
    const cliente = await Cliente.findOne({ where: { id: clienteId } })
    if (cliente) {
    const petNovo = await Pet.create({ nome, tipo, dataNasc, porte, clienteId })
    res.status(201).json(petNovo)
    } else {
      res.status(404).json({ message: "Cliente não encontrado." });
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ message: "Um erro aconteceu." })
  }
})

router.put("/pets/:id", async (req, res) => {
  const { nome, tipo, dataNasc, porte } = req.body;
  const pet = await Pet.findByPk(req.params.id);
  try {
    if (pet) {
      await Pet.update(
        { nome, tipo, dataNasc, porte },
        { where: { id: req.params.id } }
      );
      res.json({ message: "O pet foi editado." });
    } else {
      res.status(404).json({ message: "O pet não foi encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.delete("/pets/:id", async (req, res) => {
  const pet = await Pet.findByPk(req.params.id);
  try {
    if (pet) {
      await pet.destroy();
      res.json({ message: "O pet foi removido." });
    } else {
      res.status(404).json({ message: "O pet não foi encontrado." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router