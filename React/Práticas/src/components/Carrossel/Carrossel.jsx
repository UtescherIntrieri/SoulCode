import { useState } from "react";
import "./Carrossel.css"
import arrowleft from "./arrowleft.png"
import arrowright from "./arrowright.png"

const dados = [
  {
    titulo: "Praia",
    imagem: "https://previews.123rf.com/images/farang/farang1303/farang130300044/18532463-perfect-tropical-beach-square-composition.jpg"
  },
  {
    titulo: "Cidade",
    imagem: "https://traveljunkiegirl.com/wp-content/uploads/2016/08/IMG_4535.jpg"
  },
  {
    titulo: "Campo",
    imagem: "https://previews.123rf.com/images/davidmartyn/davidmartyn1309/davidmartyn130900120/22161154-a-footpath-and-public-bridleway-through-the-countryside-in-the-cotswolds-oxfordshire-england-uk.jpg"
  },
  {
    titulo: "Cachoeira",
    imagem: "https://previews.123rf.com/images/goodolga/goodolga1001/goodolga100100083/6322923-beautiful-dambri-waterfall-in-tropical-forest-vietnam.jpg"
  },
]
let dado1
let dado2

export function Carrossel() {
  const [card, setCard] = useState(0)
  dado1 = dados[card].titulo
  dado2 = dados[card].imagem
 
  function Proximo() {
    if (card===dados.length-1) {
      setCard(0)
    } else {
      setCard(card+1)
    }
    
  }
  function Anterior() {
    if (card===0) {
      setCard(dados.length-1)
    } else{
      setCard(card-1)
    }
    
  }  
  
  return(
  <div className="card">
    <h1>Carrosel</h1>
    <button type="submit" onClick={Anterior}>
        <img src={arrowleft} alt="buttonpng" border="0" className="arrow"/>
      </button>
    <img src={dado2} alt="" className="mainimg"/>
      <button type="submit" onClick={Proximo}>
        <img src={arrowright} alt="buttonpng" border="0" className="arrow" />
      </button>
    <h3>{dado1}</h3>
  </div>
  )
 }