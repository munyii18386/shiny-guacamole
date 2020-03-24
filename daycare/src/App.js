import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import { Routes } from './Routes';

function App() {
  const logo = require('./img/khd.png')  
  return (
    <Router>
      <Container className="App container">
        <Navbar bg="light" expand="lg" >
          <Navbar.Brand>
            <Link to="/"> <Image src={logo} height="100" width="100" fluid /> Khadija Home Daycare </Link>
          </Navbar.Brand>
          <Navbar.Toggle/>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="/About">FAQ</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes/>
      </Container>
    </Router>
  );
}

export default App;
