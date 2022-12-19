import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Menu.css'

function goBackAPage() {
    if(window.location.href.includes("Questions") || window.location.href.includes("Answer") || window.location.href.includes("EndLesson")) {
        window.location.href = "/Lessons"
    }
    else if(window.location.href.includes("Lessons")) {
        window.location.href = "/"
    }
    else {
        window.history.back()
    }
}

/*
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
 */

function NavBarMenu() {
    return (
        <Navbar className={"Navbar"} expand="lg" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={goBackAPage} href="#">Go Back</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBarMenu;