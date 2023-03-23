import "./Propriedades.css";

// As props são informações que podemos
// enviar para os componentes e influenciar
// no seu visual e comportamento

export function Propriedades(props) {
  return <code>{JSON.stringify(props)}</code>;
}
