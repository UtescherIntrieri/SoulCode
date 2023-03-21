import { Link } from "react-router-dom";
import { Button , Card, Form, InputGroup } from "react-bootstrap"

export function Login() {
  return (
    <div className="login">
    <Card className="p-2 m-3 mx-auto" style={{width: '500px'}}>
      <Form className="mt-1">
        <Form.Group className="mb-1" controlId="formBasicEmail">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">E-mail</InputGroup.Text>
            <Form.Control type="email" placeholder="exemplo@exemplo.com" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mb-1" controlId="formBasicPassword">
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Senha</InputGroup.Text>
            <Form.Control type="password" />
          </InputGroup>
        </Form.Group>
        <Form.Group className="mt-2 d-flex justify-content-between" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Lembrar de mim" />
            <Button variant="link">
              <Link to="#">Esqueci minha senha</Link>
            </Button>        
          </Form.Group>
        <div className="text-center">
        <Button variant="dark" type="submit" className="m-2">
          Entrar
        </Button>
        <Button type="submit" className="m-2">
          Entrar com o Google
        </Button>
        </div>
      </Form>
    </Card>
    </div>
  )
}