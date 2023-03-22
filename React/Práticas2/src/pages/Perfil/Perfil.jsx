import { usuarios } from "../../data/usuarios";
import { useParams } from "react-router-dom";

export function Perfil(){
  let id = useParams().id
  return(
      <div className="edita-usuario">
          <h2>{usuarios[id].nome}</h2>
          <span>{usuarios[id].email}</span>
          <br />
          <span>{usuarios[id].idade}</span>
          <br />
      </div>
  );
};