import React from 'react';
// import { Link} from 'react-router-dom';
import './Header.css';
import { Nav, Navbar, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="./home">SL <span className="text-design">KING </span>RIDERS</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav>
                    <Nav.Link href="./home">Home</Nav.Link>
                    <Nav.Link href="./login">Destination</Nav.Link>
                    <Nav.Link href="./home">Blog</Nav.Link>
                    <Nav.Link href="./home">Contact</Nav.Link>
                    <Nav.Link href="./login"><Button variant="warning">Login</Button></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;