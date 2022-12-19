import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Menu.css'
import secretAudio from "../Inc/among.mp3"
import terminated from "../Inc/connection_terminated.mp3"
import cheatBg from "../Img/image.jpg"
import secretMelissa from "../Img/teacher/Melissa/MelissaSecret.png"
import Rose from "../Img/Rose.webp"
import amongUs from "../Img/VR_The_Skeld_map.webp"

// a key map of allowed keys
let allowedKeys = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    65: 'a',
    66: 'b',
    77: 'm',
    79: 'o',
    78: 'n',
    71: 'g',
    85: 'u',
    83: 's'
};

// the 'official' Konami Code sequence
let konamiCode = ['up', 'up', 'down', 'down', 'left', 'right', 'left', 'right', 'b', 'a'];
let amongusCode = ['a', 'm', 'o', 'n', 'g', 'u', 's'];

// a variable to remember the 'position' the user has reached so far.
let konamiCodePosition = 0;
let amongusCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
    // get the value of the key code from the key map
    let key = allowedKeys[e.keyCode];
    // get the value of the required key from the konami code
    let requiredKey = konamiCode[konamiCodePosition];
    let ArequiredKey = amongusCodePosition[amongusCodePosition];

    // compare the key with the required key
    if (key === requiredKey) {

        // move to the next key in the konami code sequence
        konamiCodePosition++;

        // if the last key is reached, activate cheats
        if (konamiCodePosition === konamiCode.length) {
            activateCheats();
            konamiCodePosition = 0;
        }
    }
    else if(ArequiredKey === ArequiredKey) {
        amongusCodePosition++;

        if(amongusCodePosition === amongusCode.length) {
            activateAmongUs()
            amongusCodePosition = 0
        }
    }
    else {
        konamiCodePosition = 0;
        amongusCodePosition = 0;
    }
});

function activateCheats() {
    let Mellisa = document.getElementById("teacher")

    if(Mellisa !== null) {
        Mellisa.src = secretMelissa
    }

    document.body.style.backgroundImage = "url(" + cheatBg + ")";
    var audio1 = new Audio(terminated);
    audio1.play();

    alert("Ehmmm something weird happend what did you do " +  localStorage.getItem("username") + "?");
}

function activateAmongUs() {
    let Mellisa = document.getElementById("teacher")

    if(Mellisa !== null) {
        Mellisa.src = Rose
    }

    document.body.style.backgroundImage = "url(" + amongUs + ")";
    var audio = new Audio(secretAudio);
    audio.play();

    alert(localStorage.getItem("username") + " Did you say Amongus?");
}

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