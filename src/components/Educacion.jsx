import React, { Fragment } from "react";
import { CardGroup, Card } from "react-bootstrap";
import facetbio from "../img/education-facet001.jpg";
import facetpu from "../img/education-facet002.jpg";
import fcfyn from "../img/education-fcfyn-unc001.jpg";
import styles from '../css/Educacion.module.css'

export const Educacion = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">College</h2>
      <CardGroup className="my-5">
      <Card>
        <Card.Img variant="top" src={facetbio} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">Biomedical Engineering - UNT</Card.Title>
          <Card.Text>
          <br/>
            <h6>
            Facultad de Ciencias Exactas y Tecnología - Universidad Nacional de
            Tucumán.</h6>
            <p>I completed my course in Biomedical Engineering at 'Facultad de Ciencias Exactas y Tecnología</p>
            <p>Avance: 5th year</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">2013 - 2020</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={facetpu} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">College Programmer - UNT</Card.Title>
          <Card.Text>
              <br/>
            <h6>
            Facultad de Ciencias Exactas y Tecnología - Universidad Nacional de
            Tucumán</h6>
            <p>
            
            </p>
            <p>Avance: 2nd year</p>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-center">
          <small className="text-muted">2020 - 2021</small>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Img variant="top" src={fcfyn} className={styles.imgEducacion}/>
        <Card.Body>
          <Card.Title className="text-center">Biomedical Engineering - UNC</Card.Title>
          <Card.Text>
          <br/>
            <h6>
            Facultad de Ciencias Exactas, Físicas y Naturales - Univerdidad
            Nacional de Córdoba
            </h6>
            <p>
            SNRA Program: I was an exchange student at 'Facultad de Ciencias Exactas, Físicas y Naturales', at Biomedical Engineering career, where I studied and passed the subjects:
            <ul>
              <li>Rehabilitation Engineering (10)</li>
              <li>Medicine Images (6)</li>
              <li>Non-ionizing Radiation in Health (7)</li>
            </ul>
            </p>
            <p>Status: finished.</p>
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
