import React, { Fragment } from "react";
import { CardGroup, Card } from "react-bootstrap";
import facetbio from "../img/education-facet001.jpg";
import facetpu from "../img/education-facet002.jpg";
import fcfyn from "../img/education-fcfyn-unc001.jpg";
import styles from '../css/Educacion.module.css'

export const Educacion = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Educación Universitaria</h2>
      <CardGroup className="my-5">
      <Card>
        <Card.Img variant="top" src={facetbio} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">Ingeniería Biomédica - UNT</Card.Title>
          <Card.Text>
          <br/>
            <h6>
            Facultad de Ciencias Exactas y Tecnología - Universidad Nacional de
            Tucumán.</h6>
            <p>Cuento con el cursado finalizado de la carrera, habiendo concretado
            de manera exitosa la Práctica Profesional Supervisada (PPS) en el
            Sanatorio 9 de Julio SA.</p>
            <p>Avance: 5º año.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">2013 - 2020</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={facetpu} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">Programador Universitario - UNT</Card.Title>
          <Card.Text>
              <br/>
            <h6>
            Facultad de Ciencias Exactas y Tecnología - Universidad Nacional de
            Tucumán</h6>
            <p>
            Actualemnte soy alumno regular de la carrera de Programador, y me encuentro cursando materias de 2º año.
            </p>
            <p>Avance: 2º año</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">2020 - 2021</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={fcfyn} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">Ingeniería Biomédica - UNC</Card.Title>
          <Card.Text>
          <br/>
            <h6>
            Facultad de Ciencias Exactas, Físicas y Naturales - Univerdidad
            Nacional de Córdoba
            </h6>
            <p>
            Programa SNRA: Llevé a cabo, durante el año
            2019, un intercambio en la mencionada Facultad, en la cual cursé y
            aprobé las materias:
            <ul>
              <li>Ingeniería en Rehabilitación (10)</li>
              <li>Imágenes en Medicina (6)</li>
              <li>Radiaciones No Ionizantes en Salud (7)</li>
            </ul>
            </p>
            <p>Estado: finalizado.</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">2019</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </Fragment>
  );
};
