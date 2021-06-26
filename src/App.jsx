import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navegacion } from "./components/commons/Navegacion";
import { Footer } from "./components/commons/Footer";
import { SobreMi } from "./components/SobreMi";
import { Educacion } from "./components/Educacion";
import { Habilidades } from "./components/Habilidades";
import { Experiencia } from "./components/Experiencia";
import { Cursos } from "./components/Cursos";
import { Portfolio } from "./components/Portfolio";
import { Contacto } from "./components/Contacto";
import { Container } from "react-bootstrap";
import React from "react";

function App() {
  return (
    
      <Router>
        <Navegacion></Navegacion>
        <Container>
        <Switch>
          <Route exact path="/">
            <SobreMi></SobreMi>
          </Route>
          <Route exact path="/marcos">
            <SobreMi></SobreMi>
          </Route>
          <Route exact path="/marcos/educacion">
            <Educacion></Educacion>
          </Route>
          <Route exact path="/marcos/experiencialaboral">
            <Experiencia></Experiencia>
          </Route>
          <Route exact path="/marcos/habilidades">
            <Habilidades></Habilidades>
          </Route>
          <Route exact path="/marcos/cursos">
            <Cursos></Cursos>
          </Route>
          <Route exact path="/marcos/portfolio">
            <Portfolio></Portfolio>
          </Route>
          <Route exact path="/marcos/contacto">
            <Contacto></Contacto>
          </Route>
        </Switch>
        </Container>
        <Footer></Footer>
      </Router>    
  );
}

export default App;
