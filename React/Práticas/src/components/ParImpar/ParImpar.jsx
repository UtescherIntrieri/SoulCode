// - Crie um componente que recebe uma prop numero, e mostra se é par ou ímpar;
import "./ParImpar.css";
export function ParImpar(props) {
  let num
  props.numero %2 === 0 ? num = `${props.numero} é par` : num = `${props.numero} é impar`
    
  return (
    <h2 className="res">{num}</h2>
  )
}