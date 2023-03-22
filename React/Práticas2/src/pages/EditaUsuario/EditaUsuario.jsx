import { Button } from "react-bootstrap";
import { usuarios } from "../../data/usuarios";
import { useParams, useNavigate } from "react-router-dom";

export function EditaUsuario(){
  let id = useParams().id
  
  let navigate = useNavigate()
  
  function editar() {
    navigate("/usuarios")
  }
  
  return(
      <div className="edita-usuario">
          <h2>{usuarios[id].nome}</h2>
          <span>{usuarios[id].email}</span>
          <br />
          <span>{usuarios[id].idade}</span>
          <br />
          <Button onClick={editar} variant="dark">Salvar</Button>
      </div>
  );
};