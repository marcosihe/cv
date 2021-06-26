import React from 'react'
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export const Navegacion = () => {
    return (
        <Navbar bg="dark" expand="lg" variant="dark">
  <Navbar.Brand href="#home" className="ms-3">Marcos E. Herrera</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ms-auto">
      <NavLink exact={true} to="/marcos" className="nav-link">Sobre mí</NavLink>
      <NavLink exact={true} to="/marcos/educacion" className="nav-link">Educación</NavLink>
      <NavLink exact={true} to="/marcos/habilidades" className="nav-link">Habilidades</NavLink>
      <NavLink exact={true} to="/marcos/experiencialaboral" className="nav-link">Experiencia Laboral</NavLink>
      <NavLink exact={true} to="/marcos/cursos" className="nav-link">Cursos</NavLink>
      <NavLink exact={true} to="/marcos/portfolio" className="nav-link">Portfolio</NavLink>
      <NavLink exact={true} to="/marcos/contacto" className="nav-link">Contacto</NavLink>
      <NavDropdown title="Idioma" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.2">Inglés</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}
