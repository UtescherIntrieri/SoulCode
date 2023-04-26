import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";

export function Clientes() {
  const [clientes, setClientes] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/clientes")
      .then(response => {
        setClientes(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <div className="clientes container">
      <div className="d-flex justify-content-between align-items-center">
        <h1>Clientes</h1>
        <Button as={Link} to="/clientes/novo"><i className="bi bi-plus-lg me-2" />Cliente</Button>
      </div>
      {
        clientes === null ?
        <Loader />
        :
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => {
            return (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td className="d-flex gap-2">
                  <Button><i className="bi bi-pencil-fill" /></Button>
                  <Button><i className="bi bi-trash-fill" /></Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      }
    </div>
  );
}