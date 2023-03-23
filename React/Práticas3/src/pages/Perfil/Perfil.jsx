import { Button, Card, Form } from "react-bootstrap";
import "./Perfil.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Perfil() {
  const resultado = useContext(ThemeContext)
  const temaEscuro = resultado.temaEscuro
  const alternar = resultado.alternar
  
  let iconeBtn = "https://cdn-icons-png.flaticon.com/512/581/581601.png";
  if (temaEscuro) {
    iconeBtn = "https://cdn-icons-png.flaticon.com/512/3073/3073665.png";
  }

  return (
    <div className={temaEscuro ? "bg-dark text-light p-2 vh-100":"bg-light text-dark p-2 vh-100"}>
      <Card className={temaEscuro ? "bg-light text-dark w-50 p-2 m-auto":"bg-success text-dark w-50 p-2 m-auto"}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Nai Abreu" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Data de Nascimento</Form.Label>
            <Form.Control type="email" placeholder="18/06/1999" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="exemplo@exemplo.com" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Button className={temaEscuro ? "btn-dark": "btn-light"} onClick={alternar}>
            <img src={iconeBtn} width="16"></img>
          </Button>
        </Form>
      </Card>
    </div>
  );
}
