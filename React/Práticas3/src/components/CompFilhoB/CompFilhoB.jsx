import {Form} from 'react-bootstrap'
import { useContext } from "react";
import "./CompFilhoB.css";
import { BatataContext } from "../../contexts/BatataContext";


export function CompFilhoB() {
  // Capturando os dados do "value" do Provider
  const resultado = useContext(BatataContext);

  return (
    <div className="filho-b">
      <h3>FILHO B</h3>
      <Form className="m-2">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder={resultado} />
        </Form.Group>
      </Form>
      <br />
    </div>
  );
}
