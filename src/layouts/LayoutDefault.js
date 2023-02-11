import { Container, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Menu from './Menu';

function LayoutDefault(props) {
    return (
        <div>
            <Header />
            <Container fluid>
                <Row>
                    <Col>
                        <Menu />
                    </Col>
                </Row>

                <Row>
                    <Col style={{ padding: '0px 20px' }}>
                        {props.children}
                    </Col>
                </Row>
            </Container>
            
        </div>
    );
}

export default LayoutDefault;