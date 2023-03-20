import { useState } from "react";
import "./CadastroPessoas.css"

const dados = []
const dado = {}

export function CadastroPessoas() {
  const [nome, setNome] = useState()
  const [email, setEmail] = useState()
  const [cpf, setCpf] = useState()
  const [salario, setSalario] = useState()
  const [varN, setVarN] = useState()
  const [varE, setVarE] = useState()
  const [varC, setVarC] = useState()
  const [varS, setVarS] = useState()
  
  function capturarNome(evento) {
    setNome(evento.target.value)
  }
  function capturarEmail(evento) {
    setEmail(evento.target.value)
  }
  function capturarCpf(evento) {
    setCpf(evento.target.value)
  }
  function capturarSalario(evento) {
    setSalario(evento.target.value)
  }
  function sendForm(){
    dado.nome = nome
    dado.email = email
    dado.cpf = cpf
    dado.salario = salario
    setVarN(nome)
    setVarE(email)
    setVarC(cpf)
    setVarS(salario)
    dados.push(dado)
  }


  return (
    <div className="card">
    <input type="text" placeholder="Nome" onChange={capturarNome}/>
    <br />
    <input type="text" placeholder="E-mail" onChange={capturarEmail}/>
    <br />
    <input type="number" placeholder="CPF" onChange={capturarCpf}/>
    <br />
    <input type="number" placeholder="Salário" onChange={capturarSalario}/>
    <br />
    <button onClick={sendForm}>Enviar</button>
    <table>
      <tr>
        <th>Nome</th>
        <th>Email</th>
        <th>Cpf</th>
        <th>Salario</th>
      </tr>
      {dados.map(d => (
        <tr>
          <td>{d.nome}</td>
          <td>{d.email}</td>
          <td>{d.cpf}</td>
          <td>{d.salario}</td>
        </tr>
      ))}
    </table>
    </div>
  )
}