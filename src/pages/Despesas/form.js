import { Button, Row, Col, FormLabel, FormControl } from "react-bootstrap";
import { Formik } from 'formik';
import { Link, useParams, useNavigate } from "react-router-dom";
import api from '../../config/api';
import { useEffect, useState } from "react";

function DespesasForm() {

    const { id } = useParams();
    const navigate = useNavigate();
    const[data, setData] = useState({
        descricao: '',
        valor: '',
    });
    
    async function salvarDados(values, funcoes) {
        if(id === undefined) {
            await api.post('despesas', values);
            funcoes.resetForm();
            alert("Registro Salvo com Sucesso.");
        } else {
            const response = await api.put('despesas/'+id, values);
            setData(response.data);
            alert("Registro Atualizado com Sucesso.");
        }
        navigate('/despesas');
    }

    async function getData() {
        const response = await api.get('despesas/'+id);
        setData(response.data);
    }

    useEffect(() => {
        if(id !== undefined) {
            getData();
        }
    }, []);

    return (
        <>
            <h1>Form</h1>
            <Link to="/despesas">
                <Button variant="warning" size="sm">Voltar</Button>
            </Link>
            <Row>
                <Col>
                    <Formik
                        enableReinitialize
                        initialValues={data}
                        onSubmit={(values, funcoes) => {
                            salvarDados(values, funcoes);
                        }}
                    >
                        {({ handleSubmit, handleChange, values }) => (
                            <form>
                                <FormLabel>Descrição</FormLabel>
                                <FormControl 
                                    name="descricao"
                                    id="descricao"
                                    value={values.descricao}
                                    onChange={handleChange}
                                />
                                <FormLabel>Valor</FormLabel>
                                <FormControl 
                                    name="valor"
                                    id="valor"
                                    value={values.valor}
                                    onChange={handleChange}
                                />
                                <Button onClick={handleSubmit} variant="primary" size="sm">Salvar</Button>
                            </form>
                        )}
                    </Formik>

                    
                </Col>
            </Row>
        </>
    )
}

export default DespesasForm;