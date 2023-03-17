/* Atividade 3: Crie um novo componente chamados ListFruits.
Internamente, ele deve conter um vetor de frutas,
cada frutas deve ter nome e uma imagem 
(utilize links de imagens da internet).
O vetor deve conter no mínimo três frutas.
O componente vai ser formado por um campo de busca e uma lista de resultados.
A medida que for digitado o nome da fruta no campo de busca,
deve-se mostrar a imagem da frutas como resultado na lista.
OBS: A lista pode sim conter mais de um resultado uma vez que existe nomes de frutas parecidos (Ex. Maça, Maracujá). */
// import { useState } from "react";
import "./ListFruits.css";
import { frutas } from "../../data/frutas";
import { useState } from "react";


export function ListFruits() {

  const [resultados, setResultados] = useState([]);
  
  function filtrarFrutas(evento) {
    const valor = evento.target.value;
    let busca = [];
    for(let fruta of frutas) {
      let nomeFrutaMinusculo = fruta.nome.toLowerCase();
      let valorMinusculo = valor.toLowerCase();
      let indice = nomeFrutaMinusculo.indexOf(valorMinusculo);
      if(indice != -1) {
        busca.push(fruta);
      }
    }
    setResultados(busca);
  }
  
  return (
    <div className="frutas">
      <input type="text" placeholder="Digite o nome de uma fruta..." onChange={filtrarFrutas} />
      <br />
      
      <ul>
        {resultados.map(fruta => (
          <li>
            <img src={fruta.imagem} />
          </li>
        ))}
      </ul>
    </div>
  );
}


// const nome = []
// const imagem = []
// let linkImg
// export function ListFruits() {
//   frutas.forEach(fruta => {
//     nome.push(fruta.nome)
//     imagem.push(fruta.imagem)
//   });
//    for(let obj of nome) {
//      const verify = obj.indexOf("")
//      const index = obj.index
//     if(verify !== -1) {
//       linkImg = imagem[verify]
//     return <img src={linkImg} alt="" />
//     }
//   } 
//   return(
//     <>
//     <p>oioi</p> */
//     <p>{nome}</p> 
//     <p>{ListFruits}</p>
//     </>
//   )
// }