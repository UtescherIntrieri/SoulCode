import { useState } from "react";
import "./IMC.css"

export function IMC() {
  const [peso, setPeso] = useState()
  const [altura, setAltura] = useState()
  const [calculo, setCalculo] = useState(0)
  const [var1, setVar1] = useState()
  const [var2, setVar2] = useState()
  let res = <h2></h2>
  
  function obterPeso(evento) {
    setPeso(evento.target.value)
  }
  function obterAltura(evento) {
    setAltura((evento.target.value)/100)
  }
  function calcularIMC() {
   setCalculo(1)
   setVar1(peso) 
   setVar2(altura) 
  }
  if(calculo===1){
    res = <h2>Seu Imc é: {(var1/(var2*var2)).toFixed(2)}</h2>
  }
  return (
    <div className="card">
      <h2>Calculadora de IMC</h2>
      <input type="number" placeholder="Peso em Kg '80'" onChange={obterPeso}/>
      <br />
      <input type="number" placeholder="Altura em Cm '170'"  onChange={obterAltura}/>
      <br />
      <br />
      <button onClick={calcularIMC}>Calcular</button>
      <br />
      {res}
      <br />
    </div>
    )
}
