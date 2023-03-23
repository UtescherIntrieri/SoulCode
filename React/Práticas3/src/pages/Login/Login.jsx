import { Button, Card, Form } from "react-bootstrap";
import "./Login.css";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";


export function Login() {
  const resultado = useContext(ThemeContext)
  const temaEscuro = resultado.temaEscuro
  return (
    <div className={temaEscuro ? "bg-dark text-light p-2 vh-100":"bg-light text-dark p-2 vh-100"}>
      <Card className={temaEscuro ? "bg-light text-dark w-50 p-2 m-auto":"bg-success text-dark w-50 p-2 m-auto"}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>E-mail</Form.Label>
            <Form.Control type="email" placeholder="exemplo@exemplo.com" />
            <Form.Text className="text-muted">
              Seu e-mail está seguro com a gente
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control type="password" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Manter-me conectado" />
          </Form.Group>
          <Button type="submit" className={temaEscuro ? "btn-dark": "btn-light"}>
            Entrar
          </Button>
        </Form>
      </Card>
    </div>
  );
}
