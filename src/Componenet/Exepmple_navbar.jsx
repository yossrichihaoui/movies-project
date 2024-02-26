import React from 'react'
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap'
import Add_movie from './Formulair'

function ExempleNav({logo}) {
   console.log (logo)
   return (
    <div>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <img src={logo}  style={{height:"50px", width:"50px" ,marginRight:"10px" ,borderRadius:"25%"}} alt="img"/>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Add_movie/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default ExempleNav