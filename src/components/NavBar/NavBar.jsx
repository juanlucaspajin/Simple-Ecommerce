import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget, {  } from "../Cart/CartWidget";
import { Link, NavLink } from "react-router-dom";
function NavBar() {
    const curso1 = 'canto';
    const curso2 = 'piano';
    return (
        <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand>
                    <Link to={`/`}>
                        <img src="https://www.soulswaymusic.com.ar/assets/images/logo1.png" width={50} />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to={`/category/${curso1}`} activeClassName="active" className="nav-link">
                            Cursos de canto
                        </NavLink>
                        <NavLink to={`/category/${curso2}`} activeClassName="active" className="nav-link">
                            Cursos de piano
                        </NavLink>
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