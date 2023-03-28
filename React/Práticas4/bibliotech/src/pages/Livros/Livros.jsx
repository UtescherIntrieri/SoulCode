import { useEffect, useState } from "react";
import { Button, Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getLivros } from "../../firebase/livros";

export function Livros() {

    const [livros, setLivros] = useState([]);

    useEffect(async () => {
        const busca = await getLivros();
        setLivros(busca)
    }, []);

    return (
        <div className="livros">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Livros</h1>
                    <Button as={Link} to="/livros/adicionar" variant="success">
                        Adicionar Livro
                    </Button>
                </div>
                <hr />
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Título</th>
                            <th>Autor</th>
                            <th>Categoria</th>
                            <th>ISBN</th>
                            <th>Imagem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map(livro => {
                            return (
                                <tr>
                                    <td>{livro.titulo}</td>
                                    <td>{livro.autor}</td>
                                    <td>{livro.categoria}</td>
                                    <td>{livro.isbn}</td>
                                    <td>
                                        <img src={livro.urlCapa} alt={livro.titulo} />
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </Container>
        </div>
    )
}