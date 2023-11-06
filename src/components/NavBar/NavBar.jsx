import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget, {  } from "../Cart/CartWidget";

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://www.soulswaymusic.com.ar/assets/images/logo1.png" width={50} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#academia">La Academia</Nav.Link>
                        <Nav.Link href="#clases">Clases</Nav.Link>
                        <Nav.Link href="#alumnos">Nuestros Alumnos</Nav.Link>
                        <Nav.Link href="#muestras">Muestras y Producciones</Nav.Link>
                        <Nav.Link href="#cursos">Cursos</Nav.Link>
                        <Nav.Link href="#contacto">Contacto</Nav.Link>
                    </Nav>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;