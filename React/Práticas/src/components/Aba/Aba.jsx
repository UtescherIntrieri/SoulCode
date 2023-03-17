import { useState } from "react"
import "./Aba.css"

export function Abas() {
  const [aba,setAba] = useState("home")
  let conteudoAba
  
  function irParaHome() {
    setAba("home")
  }
  function irParaPerfil() {
    setAba("perfil")
  }
  function irParaAjuda() {
    setAba("ajuda")
  }
  
  if (aba=== "home") {
    conteudoAba = <div>HOME</div> 
  } else if (aba=== "perfil") {
    conteudoAba = <div>PERFIL</div> 
  } else if (aba=== "ajuda") {
    conteudoAba = <div>AJUDA</div> 
  }
    
  return (
    <div>
    <button onClick={irParaHome}>HOME</button>
    <button onClick={irParaPerfil}>PERFIL</button>
    <button onClick={irParaAjuda}>AJUDA</button>
    <hr />
    {conteudoAba}
    </div>
  )
}



//   return(
//     <div>
//       <button>Perfil</button>
//       <button>Home</button>
//       <button>Ajuda</button>
//       <hr />
//       <div>PERFIL</div>
//     </div>
//   )
// } else if(aba === "ajuda") {
// }