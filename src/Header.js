import Home from './Pages/Home';
import Contacts from './Pages/Contacts';
import About from './Pages/About';
import Blog from './Pages/Blog';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, { Component, useState } from "react";
import {
    Navbar,
    Nav,
    FormControl,
    Container,
    Form,
    Button,
    Modal
} from "react-bootstrap";

import logo from "./logo192.png";

// const [email, setEmail] = useState('')
// const [password, setPassword] = useState('')
// const [emailDirty, setEmailDirty] = useState( false)
// const [passwordDirty, setPasswordDirty] = useState( false)
// const [emailError, setEmailError] = useState( 'Email не може бути порожнім')
// const [passwordError, setPasswordError] = useState( 'Пароль не може бути порожнім')
// const [formValid, setFormValid] = useState(false)

// const emailHandler = (e) => {
//     setEmail(e.target.value)
//     const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//     if (!re.test(String(e.target.value.toLowerCase()))) {
//         setEmailError('Некоректний email')
//     } else {
//         setEmailError('')
//     }
// }

// const passwordHandler = (e) => {
//     setPassword(e.target.value)
//     if (e.target.value.length < 3 || e.target.length > 8) {
//         setPasswordError('Пароль повинен мати не менше 3 і не більше 8 символів')
//         if (!e.target.value) {
//             setPasswordError('Пароль не може бути порожнім')
//         }
//     } else {
//         setPasswordError('')
//     }
// }

// const blurHandler = (e) => {
//     switch (e.target.name) {
//         case 'email':
//             setEmailDirty(true)
//             break
//         case 'password':
//             setPasswordDirty(true)
//             break
//     }
// }

// export default function Header() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     <Button className="ms-2" onClick={handleShow}>Login</Button>
// }
export default class Header extends Component {
    render() {
        return (
            <>
            <Router>
            <Navbar fixed="top" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                       <img
                       src={logo}
                       height="30"
                       width="30"
                       className="d-inline-block align-top"
                       alt = "Logo"
                       /> React Site
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/"> Home </Nav.Link>
                            <Nav.Link href="/about"> About us </Nav.Link>
                            <Nav.Link href="/contacts"> Contacts </Nav.Link>
                            <Nav.Link href="/blog"> Blog </Nav.Link>
                        </Nav>

                            <Routes>
                                <Route path="/" element={<Home/>}/>
                                <Route path="/about" element={<About/>}/>
                                <Route path="/contacts" element={<Contacts/>}/>
                                <Route path="/blog" element={<Blog/>}/>
                            </Routes>

                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
        </>
        )
    }
}
