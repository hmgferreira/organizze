import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

function Menu() {

    const { logout } = useContext(AuthContext);

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#home">Organizze</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className="nav-link">Painel</Link>
                        <Link to="/graficos" className="nav-link">Gráficos</Link>
                        <Link to="/receitas" className="nav-link">Receitas</Link>
                        <Link to="/despesas" className="nav-link">Despesas</Link>
                        <Link to="/sonhos" className="nav-link">Sonhos</Link>
                        <Link to="/configuracoes" className="nav-link">Configurações</Link>
                        <Link to="/usuarios" className="nav-link">Usuários</Link>
                        <Nav.Link onClick={() => logout()}>Sair</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
                </Navbar>
        </>
    )
}

export default Menu;