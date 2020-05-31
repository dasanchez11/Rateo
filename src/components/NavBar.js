import React from 'react'
import './NavBar.css'
import { Button, Form, FormControl, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
const NavigationBar = () =>{
  return(
    <div className="NavigationBar">
      <Navbar  className="color-nav"  expand="lg" variant="dark" sticky  >
        <Navbar.Brand href="#home"><i href="http://gruting.com.s3-website-us-east-1.amazonaws.com/images/Logo_Blanco.png"></i></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="elementos"  variant="light">
            <Nav.Link  href="#inicio">INICIO</Nav.Link>
            <Nav.Link  href="#servicio">SERVICIO DE RUTEO</Nav.Link>
            <Nav.Link  href="#nosotros">NOSOTROS</Nav.Link>
            <Nav.Link  href="#estadisticas">ESTADÍSTICAS</Nav.Link>
            <Nav.Link  href="#registro">REGISTRO</Nav.Link>
            <Nav.Link  href="#ingresar">INGRESAR</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavigationBar
