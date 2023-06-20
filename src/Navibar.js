import React from 'react';
import { Navbar } from 'react-bootstrap';

export function NaviBar() {

    return (
    <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand>Web-site main page</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Users</Nav.Link>
                <Nav.Link>About</Nav.Link>
            </Nav>
            <Nav>
                <Button variant="primary" className="mr-2">Log In</Button>
                <Button variant="primary">Sign out</Button>
            </Nav>    

            </Navbar.Collapse>
        </Navbar>
    </>
)}