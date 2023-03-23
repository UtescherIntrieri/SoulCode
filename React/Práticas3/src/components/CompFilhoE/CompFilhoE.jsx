import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import "./CompFilhoE.css";

// hook useContext = capturar o valor que é fornecido
// por algum Provider

export function CompFilhoE() {
  // Capturando os dados do "value" do Provider
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-e">
      <h3>FILHO E</h3>
      <p>
        <b>Valor: </b>
        {resultado}
      </p>
    </div>
  );
}
