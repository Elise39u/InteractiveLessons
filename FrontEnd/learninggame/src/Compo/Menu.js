import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Menu.css'

function NavBarMenu() {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">Go Back</Nav.Link>

                        <NavDropdown title="Profile" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#">Profile Page</NavDropdown.Item>
                            <NavDropdown.Item href="#">
                                Lessons Overview
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#">Class/Group Overview</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#">
                                Progress in the app
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarMenu;