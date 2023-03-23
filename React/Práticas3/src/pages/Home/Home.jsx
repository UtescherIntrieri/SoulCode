import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext)
  const temaEscuro = resultado.temaEscuro
  return (
    <div className={temaEscuro ? "bg-dark text-light vh-100":"bg-light text-dark vh-100"}>
      <h1>Home</h1>
      <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </div>
  );
}