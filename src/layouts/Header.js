import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

const HeaderStyle = styled.header`
    height: 70px;
    background: black;
    color: white;
    padding: 10px;
`;

function Header() {
    return (
        <HeaderStyle>
            <Container fluid>
                <Row>
                    <Col md={2}>
                        Logo
                    </Col>
                    <Col md={9}>
                        contato@sistema.com.br
                    </Col>
                    <Col md={1}>
                        Avatar
                    </Col>
                </Row>
            </Container>
        </HeaderStyle>
    );
}

export default Header;