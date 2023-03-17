// Atividade 1:
// Faça uma melhoria do contador desenvolvido em aula.
// Crie novas opões de incrementação e decrementarão mudando o estado do contador.
// Crie as seguintes opções: +10, +100, *3, /2, -50, -5.
// Para isso utilize botões para cada novo recurso.
// Para acionar as funções, utilize o evento onClick do React.

import { useState } from "react"

export function Contador(props) {
  // const array = useState(0)
  // let numero = array[0]
  // let setNumero = array[1]
  
  const [numero, setNumero] = useState(props.numInicial)
  function inc1() {
    const novoNumero = numero+1
    setNumero(novoNumero)
  }
  function inc10() {
    const novoNumero = numero+10
    setNumero(novoNumero)
  }
  function inc100() {
    const novoNumero = numero+100
    setNumero(novoNumero)
  }
  function mult3() {
    const novoNumero = numero*3
    setNumero(novoNumero)
  }
  function dec1() {
    const novoNumero = numero-1
    setNumero(novoNumero)
  }
  function dec5() {
    const novoNumero = numero-5
    setNumero(novoNumero)
  }
  function dec50() {
    const novoNumero = numero-50
    setNumero(novoNumero)
  }
  function div2() {
    const novoNumero = numero/2
    setNumero(novoNumero)
  }
  function reset() {
    setNumero(props.numInicial)  
  }
  
  return (
    <div>
      <h1 id="displayNumero">{numero}</h1>
      <button onClick={div2}>/2</button>
      <button onClick={dec50}>-50</button>
      <button onClick={dec5}>-5</button>
      <button onClick={dec1}>-1</button>
      <button onClick={reset}>RESET</button>
      <button onClick={inc1}>+1</button>
      <button onClick={inc10}>+10</button>
      <button onClick={inc100}>+100</button>
      <button onClick={mult3}>x3</button>
    </div>
  )
}