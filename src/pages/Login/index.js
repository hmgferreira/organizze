import React, { useContext } from 'react';
import { Col, Container, Row, Form, Button } from 'react-bootstrap';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import AuthContext from '../../contexts/AuthContext';

function Login() {

    const contexts = useContext(AuthContext);

    function acessar(values){
        console.log(values);
        // CODIGO CONSULTAR API COM AXIOS
        // CODIGO VERIFICAR SENHA
        // CODIGO SE LOGADO ENTAO
        contexts.setLogged(true);
    }

    const styles = {
        marginTop: '100px',
        border: '1px solid gray',
        borderRadius: '5px',
        padding: '20px'
    };

    const validacao = yup.object().shape({
        email: yup.string().required("Campo obrigatório").email("E-mail inválido    "),
        senha: yup.string().required("Campo obrigatório").min(8, "Informe no mínimo 8 caracteres."),
    });


    return (
        <>
            <Container>
                <Row>
                    <Col md={{ span: '4', offset: '4' }} style={styles}>
                        <h4>Login</h4>
                        <Formik
                            initialValues={{ 
                                email: '',
                                senha: '',
                            }}
                            validationSchema={validacao}
                            onSubmit={(values, funcoes) => {
                                acessar(values);
                            }}
                        >
                            {({ handleSubmit, handleChange, errors }) => (
                                <Form>
                                    <Form.Group>
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control 
                                            type="email" 
                                            name="email" 
                                            placeholder="E-mail" 
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>
                                            <ErrorMessage name="email" />
                                            {/* {errors.email ? errors.email : ''} */}
                                        </span>
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Label>Senha</Form.Label>
                                        <Form.Control 
                                            type="password" 
                                            name="senha" 
                                            placeholder="Senha" 
                                            required 
                                            onChange={handleChange}
                                        />
                                        <span style={{ color: 'red' }}>
                                            <ErrorMessage name="senha" />
                                            {/* {errors.senha ? errors.senha : ''} */}
                                        </span>
                                    </Form.Group>
                                    <Button 
                                        variant="primary" 
                                        size="sm" 
                                        type="button" 
                                        onClick={handleSubmit}
                                    >
                                        Acessar
                                    </Button>
                                </Form>
                            )}
                        </Formik>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Login;