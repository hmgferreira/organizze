import { useEffect, useState } from 'react';
import { Row, Col, FormControl, FormLabel, Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import api from '../../config/api';

function Despesas() {

    const[lista, setLista] = useState([]);
    const[pesquisa, setPesquisa] = useState('');
    

    async function getLista() {
        if(pesquisa === '') {

            const response = await api.get('despesas');
            setLista(response.data);

        } else {

            const response = await api.get('despesas', {
                params: {
                    descricao_like: pesquisa
                }
            });
            
            setLista(response.data);
        }
        
        
    }

    function editarRegistro(id) {
        alert("Editar");
    }

    async function deletarRegistro(id) {
        await api.delete('despesas/'+id);
        getLista();
        alert("Registro Deletado");
    }

    useEffect(() => {
        getLista();
    }, []);

    useEffect(() => {
        getLista();
    }, [pesquisa])

    return (
        <>
            <h1>Despesas</h1>
            <Row>
                <Col>
                    <FormLabel>Pesquisa: {pesquisa}</FormLabel>

                    <FormControl 
                        name="pesquisa"
                        onChange={e => setPesquisa(e.target.value)}
                    />
                    
                </Col>
                <Col md={2}>
                    <Link to="/despesas/novo">
                        <Button>Nova Despesa</Button>
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descrição</th>
                                <th>Valor</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {lista.map((item, indice) => (
                                <tr key={indice}>
                                    <td>{item.id}</td>
                                    <td>{item.descricao}</td>
                                    <td>{item.valor}</td>
                                    <td>
                                        <Link to={`/despesas/edit/${item.id}`}>
                                            <Button variant="primary" size="sm">
                                                Editar
                                            </Button>
                                        </Link>
                                        {` `}
                                        <Button onClick={() => deletarRegistro(item.id)} variant="danger" size="sm">
                                            Excluir
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </>
    )
}

export default Despesas;