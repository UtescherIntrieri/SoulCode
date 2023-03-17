// 1) Crie um componente de <Sorteio>, ao clicar no botão deve gerar um
// número aleatório. Use o esquema Math.floor(Math.random()* 100).
// - Caso o número gerado seja par, mostrar em verde.
// - Caso o número gerado seja ímpar, mostrar em amarelo.
import { useState } from "react";
import "./Sorteio.css"

let color = "black"
export function Sorteio() {
  const [numero, setNumero] = useState(0)
  
  function newNum() {
    setNumero(Math.floor(Math.random()*100))
  }
    if (numero%2==0) {
      color = "green"
    } else {
      color = "red"
    }
    const objectStyle = { color };
  
  return (
    <>
    <div className="card-aluno">
      <h2>Sorteio</h2>
      <p>Se for par será <mark className="green">verde</mark>, 
      se for impar será <mark className="red">vermelho</mark></p>
      <h2  style={objectStyle}>{numero}</h2>
      <button onClick={newNum}>Gerar</button>
    </div>
    </>
  )
}