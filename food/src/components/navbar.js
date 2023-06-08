import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavbarC = () => {
  return (
    <>
    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Lazeez</Navbar.Brand>
          <Nav className=" justify-content-end" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/menu">Menu</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/login">Login</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
