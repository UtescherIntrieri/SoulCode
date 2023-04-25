const { Router } = require("express");
const Tarefa = require("../models/tarefa");

const router = Router();

router.post("/tarefas", async (req, res) => {
  try {
    const { titulo, descricao, status } = req.body;
    const tarefa = new Tarefa({ titulo, descricao, status });
    await tarefa.save();
    res.status(201).json(tarefa);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.get("/tarefas", async (req, res) => {
  const tarefas = await Tarefa.find();
  res.json(tarefas);
});

router.get("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarefaExistente = await Tarefa.findById(id);
    if (tarefaExistente) {
      res.json(tarefaExistente);
    } else {
      res.status(404).json({ message: "Tarefa não encontrada." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.put("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { titulo, descricao, status } = req.body;
    const tarefaExistente = await Tarefa.findByIdAndUpdate(id, {
      titulo,
      descricao,
      status,
    });
    if (tarefaExistente) {
      res.json({ message: "Tarefa editada." });
    } else {
      res.status(404).json({ message: "Tarefa não encontrada." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

router.delete("/tarefas/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const tarefaExistente = await Tarefa.findByIdAndRemove(id);
    const tarefasRestantes = await Tarefa.find();
    if (tarefaExistente) {
      res.json({ message: "Tarefa excluída.", tarefasRestantes });
    } else {
      res.status(404).json({ message: "Tarefa não encontrada." });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Um erro aconteceu." });
  }
});

module.exports = router;