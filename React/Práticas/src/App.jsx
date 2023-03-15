// import { ListaCompras } from "./components/ListaCompras/ListaCompras";
// import { ListaFuncionarios } from "./components/ListaFuncionarios/ListaFuncionarios";
// import { NavBar } from "./components/NavBar/NavBar";
import { ListaAlunos } from "./components/ListaAlunos/ListaAlunos";
import { ParImpar } from "./components/ParImpar/ParImpar";

export function App() {
  return (
    <>
      {/* <ListaCompras /> */}
      {/* <ListaFuncionarios /> */}
      {/* <NavBar logado={true} nomeUsuario="José" /> */}
      <ListaAlunos />
      <ParImpar numero={Math.floor(Math.random()*10000)} />
    </>
  );
}