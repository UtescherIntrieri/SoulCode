// Atividade 2:
// No componente Cadastro, crie um novo campo e um novo estado para digitação de um resumo,
// esse resumo deve ser uma descrição do usuário.
// A medida que o conteúdo for digitado,
// deve-se mudar o estado do resumo e ser mostrado na tela com as demais informações.
// Para isso utilize a tag <textarea>, juntamente com o evento onChange do React.
import { useState } from "react";
import "./Cadastro.css";

export function Cadastro() {
  
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [resumo, setResumo] = useState("")
  
  function obterNome(evento) {
    setNome(evento.target.value)
  }
  function obterEmail(evento) {
    setEmail(evento.target.value)
  }
  function obterResumo(evento) {
    setResumo(evento.target.value)
  }
  
  return (
    <div>
      <strong>Formulário de cadastro</strong>
      <br />
      <input type="text" placeholder="Digite seu nome" onChange={obterNome}/>
      <br />
      <input type="text" placeholder="Digite seu e-mail" onChange={obterEmail}/>
      <br />
      <textarea name="resumo" id="resumo" placeholder="Fale sobre você..." onChange={obterResumo}></textarea>
      <br />
      <strong>{nome}</strong>
      <br />
      <strong>{email}</strong>
      <br />
      <strong>{resumo}</strong>
    </div>
  )
}