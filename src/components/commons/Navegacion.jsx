import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
//import { NavDropdown } from 'react-bootstrap'

export const Navegacion = () => {
  return (
    <div>
      <Navbar bg="dark" expand="lg" variant="dark" fixed="top">
        <Navbar.Brand href="#home" className="ms-3">
          Marcos E. Herrera
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink exact={true} to="/marcos" className="nav-link ms-1">
              Sobre mí
            </NavLink>
            <NavLink exact={true} to="/marcos/educacion" className="nav-link ms-1">
              Educación
            </NavLink>
            <NavLink exact={true} to="/marcos/habilidades" className="nav-link ms-1">
              Habilidades
            </NavLink>
            <NavLink
              exact={true}
              to="/marcos/experiencialaboral"
              className="nav-link ms-1"
            >
              Experiencia Laboral
            </NavLink>
            <NavLink exact={true} to="/marcos/portfolio" className="nav-link ms-1">
              Portfolio
            </NavLink>
            <NavLink exact={true} to="/marcos/contacto" className="nav-link ms-1 me-3">
              Contacto
            </NavLink>
            {/** 
             <NavDropdown title="Idioma" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Español</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Inglés</NavDropdown.Item>
            </NavDropdown>
            */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <br />
      <br />
    </div>
  );
};
