const fs = require("fs")

const alunos = [
  { 
    nome: "Almir",
    media: "5",
    matricula: "1"
  },
  { 
    nome: "Gabriel",
    media: "8",
    matricula: "2"
  },
  {
    nome: "Nai",
    media: "10",
    matricula: "3"
  },
  {
    nome: "Caique",
    media: "10",
    matricula: "4"
  }
];

function adicionar(req, res) {
  const {nome, matricula, media} = req.query
  const novoAluno = {nome: nome, matricula: matricula, media: media}
  if (nome !== undefined && matricula !== undefined && media !== undefined) {
    alunos.push(novoAluno)
    res.send("Tudo Certo!")
  } else {
    res.status(400).send("Dados Faltando!")
  }
  fs.writeFile('./db.json', JSON.stringify(alunos))
}

function atualizar(req, res) {
  const { index } = req.params 
  const { nome, media } = req.query
  alunos[index].nome = nome
  alunos[index].media = media
  res.send(alunos)
  fs.writeFile('./db.json', JSON.stringify(alunos))
}

function deletar(req, res) {
  const { index } = req.params 
  if (index <= alunos.length-1) {
    alunos.splice(index, 1);
    res.send(alunos)
  } else {
    res.status(404).send("Aluno não encontrado!")
  }
  fs.writeFile('./db.json', JSON.stringify(alunos))

}

module.exports = { alunos, atualizar, adicionar, deletar };