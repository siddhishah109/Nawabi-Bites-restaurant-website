import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../img/logo4.png';
import {Link } from 'react-router-dom';

export const NavbarC = () => {
  return (
    <>
    <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/" className='nav-logo'><img src={logo} height='45px'alt='logo' className='nav-l'/>Nawabi Bites</Navbar.Brand>
          <Nav className=" justify-content-end" >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Menu</Nav.Link>
            <Nav.Link as={Link}  to="/about">About Us</Nav.Link>
            <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
