import React from 'react'
import './header.css'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Navbar,Container,Nav} from 'react-bootstrap'
const Header = () => {
  return (
    
       <Navbar expand="lg" className="khaled">
      <Container>
        <Navbar.Brand href="#home">Khaled</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto kmd">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#link">about</Nav.Link>
          </Nav>
          <div className="contact">
          <a href="#">contact</a>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default Header