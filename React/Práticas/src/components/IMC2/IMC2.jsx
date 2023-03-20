import { useEffect, useState } from "react";
import "./IMC2.css";

export function IMC2() {
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [imc, setImc] = useState(-1);

  useEffect(() => {
    const resultado = (peso/((altura/100)*(altura/100)));
    setImc(resultado);
  }, [peso, altura]);

  function limpar() {
    setPeso();
    setAltura();
    setImc(-1);
  }

  return (
    <div className="card">
      <h1>Calculadora de IMC</h1>
      <input
        type="number"
        placeholder="Peso em Kg '80'"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <br />
      <input
        type="number"
        placeholder="Altura em Cm '170'"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br /><br />
      <button onClick={limpar}>Limpar</button>
      {(imc !== Infinity && !isNaN(imc)) && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>
  );
}
