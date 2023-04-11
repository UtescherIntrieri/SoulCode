/** Exercício I: Crie dois arquivos html: inicio.html e
 * ajuda.html. Defina uma rota GET /inicio que lê o arquivo
 * inicio.html e responde com seu conteúdo. Defina outra
 * rota /ajuda que lê o arquivo ajuda.html e responde com
 * seu conteúdo. Dentro do arquivo inicio.html, deve haver
 * um link para a página de ajuda.
 * TEMPO = 15 min
 */

const express = require("express");
const fs = require("fs")
const CPF = require("cpf");


const app = express();

app.get("/", (requisicao, resposta) => {
  resposta.send("<h2>Hello, World! É top!</h2>");
});

app.get("/teste", (req, res) => {
  res.send("<p>Olá amigo, você é um amigo</p>")
})

app.get("/inicio", (req, res) => {
  res.send(fs.readFileSync("./html/inicio.html").toString());
});

app.get("/ajuda", (req, res) => {
  const ajudaPagina = fs.readFileSync("./html/ajuda.html").toString()
  res.send(ajudaPagina);
});

app.get("/pessoas/:nome/:empresa", (req, res) => {
  const { nome, empresa } = req.params 
  res.send(`${nome} e ${empresa}`)
})

// Exercício I: Crie uma calculadora IMC (/imc), receba via parâmetros
// fixos, um peso e uma altura (converter p/ number). E responde
// com o resultado do cálculo.
app.get("/imc/:peso/:altura", (req, res) => {
  const { peso, altura } = req.params
  const numpeso = Number(peso) 
  const numaltura = Number(altura)/100 
  res.send(`IMC: ${(numpeso/(numaltura*numaltura)).toFixed(2)}`)
})

// Exercício II: Na rota /funcionarios/:cpf, valide o cpf passado
// pelo cliente. Se for válido responda positivamente (200), caso contrário
// responda negativamente (400).
app.get("/funcionarios/:cpf", (req, res) => {
  const { cpf } = req.params
  if (CPF.isValid(cpf)) {
    res.status(200).send("O cpf é válido!")
  } else {
    res.status(400).send("O cpf é inválido!")
  }
  // const numcpf = Number(cpf)
  // if (numcpf.toString().length == 11) {
  //   res.sendStatus(200)
  // } else {
  //   res.sendStatus(400)
  // }
})

// Exercício III: Crie uma rota /cpfs/:numero. E responde com a quantidade de
// cpfs aleatórios solicitada.
app.get("/cpfs/:numero", (req, res) => {
  const { numero } = req.params

  for (let index = 0; index < numero; index++) {
    res.write(`<p>CPF ${index+1}: ${CPF.generate()}</p>`);
  }
})

app.get("/youtube", (req, res) => {
  // http://localhost:3000/youtube?canal=josealmir
  const { canal } = req.query
  res.send(req.query)
})

// Exercício I: Crie uma rota que receba um parâmetro query `nome` e retorne uma mensagem de boas-vindas personalizada. Se `nome` não for fornecido, exiba uma mensagem de erro.
app.get("/perfil", (req, res) => {
  const { nome } = req.query
  if (!nome) {
    res.sendStatus(400)
  } else {
    res.send(`Bem-vindo(a), ${nome}`)
  }
})

// Exercício II: Crie uma rota que receba dois parâmetros query, `num1` e `num2`. Retorne como resposta a soma dos números (se os dois numeros não forem fornecidos mostrar uma mensagem de erro).
app.get("/soma", (req, res) => {
  const { num1, num2 } = req.query
  if (num1 == undefined || num2 == undefined) {
    res.sendStatus(400)
  } else {
    soma = Number(num1)+Number(num2)
    res.send(`${soma}`)
  }
})

// Exercício III: Crie uma rota que receba um parâmetro query, `lang` e exiba uma mensagem de boas vindas no idioma (português ou inglês). Caso a linguagem não seja fornecida ou suportada exiba uma mensagem de erro.
app.get("/boasvindas", (req, res) => {
  const { lang } = req.query
  if (lang === "pt") {
    res.send("Bem-vindo")
  } else if (lang === "en"){
    res.send("Welcome")
  } else {
    res.status(400).send("Idioma não suportado")
  }
})

app.listen(3000);
