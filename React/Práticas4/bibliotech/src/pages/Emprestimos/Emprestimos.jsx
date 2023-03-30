// No componente de empréstimos possibilite a visualização de
// informações de empréstimos previamente cadastradas.
// Para isso crie uma tabela com React Bootstrap.
// A tabela deve ter as colunas leitor, email, telefone, titulo do livro,
// status e data. O status deve ser um mostrado como um badge.
// Para trazer as informações crie uma nova função de busca no arquivo
// emprestimos.js.

import { useEffect, useState } from "react";
import { Badge, Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { getEmprestimos } from "../../firebase/emprestimos";

export function Emprestimos() {
  const [emprestimos, setEmprestimos] = useState(null);

  useEffect(() => {
    getEmprestimos().then(busca => {
      setEmprestimos(busca)
    })
  }, []);

  return (
    <div className="emprestimos">
    <Container>
      <div className="d-flex justify-content-between align-items-center">
      <h1>Empréstimos</h1>
      <Button as={Link} to="/emprestimos/adicionar">Adicionar emprestimo</Button>
      </div>
      <hr />
      
      {emprestimos === null ?
          <Loader />
          :
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Título</th>
                <th>Data</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {emprestimos.map(emprestimo => {
                const dataEmprestimo = emprestimo.dataEmprestimo.toDate().toLocaleDateString('pt-br')
                return (
                  <tr key={emprestimo.id}>
                    <td>{emprestimo.leitor}</td>
                    <td>{emprestimo.email}</td>
                    <td>{emprestimo.telefone}</td>
                    <td>{emprestimo.livro.titulo}</td>
                    <td>{dataEmprestimo}</td>
                    <td><Badge bg={emprestimo.status==="Pendente"?"warning":"success"}>{emprestimo.status}</Badge></td>
                    <td>
                      <Button
                        as={Link}
                        to={`/emprestimos/editar/${emprestimo.id}`}
                        variant="warning"
                        size="sm"
                        className="me-2"
                      >
                        <i className="bi bi-pencil-fill"></i>
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
        }
    </Container>
  </div>
  )
}