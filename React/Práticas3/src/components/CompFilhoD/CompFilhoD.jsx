import { useContext } from "react";
import { BatataContext } from "../../contexts/BatataContext";
import {Badge} from 'react-bootstrap/';
import "./CompFilhoD.css";

export function CompFilhoD() {
  // Capturando os dados do "value" do Provider
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-d">
      <h3>FILHO D</h3>
      <p>
        <b>Valor: </b>
        <Badge bg="secondary">{resultado}</Badge>
      </p>
    </div>
  );
}
