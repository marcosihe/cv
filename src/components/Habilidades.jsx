import React, { Fragment } from "react";
import {
  Card,
  CardColumns,
  CardGroup,
  ListGroup,
  ProgressBar,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFistRaised, faLightbulb } from "@fortawesome/free-solid-svg-icons";


export const Habilidades = () => {
  return (
    <Fragment>
      <CardColumns className="my-5">
        <Card.Title>
          <h2 className="text-center">Habilidades</h2>
        </Card.Title>
        <CardGroup className="my-3">
          <Card>
            <Card.Body>
              <Card.Text className="fw-bold">
                <div>
                  <ProgressBar animated now={95} variant="success" />
                  <p>HTML5</p>
                </div>
                <div>
                  <ProgressBar animated now={70} variant="success" />
                  <p>CSS3</p>
                </div>
                <div>
                  <ProgressBar animated now={80} variant="success" />
                  <p>Javascript</p>
                </div>
                <div>
                  <ProgressBar animated now={60} variant="success" />
                  <p>React</p>
                </div>
                <div>
                  <ProgressBar animated now={60} variant="success" />
                  <p>Mongo DB</p>
                </div>
                <div>
                  <ProgressBar animated now={60} variant="success" />
                  <p>Node js</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Conocimientos intermedios en...
              </Card.Title>
              <Card.Text>
                <ListGroup className="fw-bold">
                  <ListGroup.Item variant="warning">Java</ListGroup.Item>
                  <ListGroup.Item variant="dark">MySQL</ListGroup.Item>
                  <ListGroup.Item variant="warning">Lenguaje C</ListGroup.Item>
                  <ListGroup.Item variant="dark">C# & .NET</ListGroup.Item>
                  <ListGroup.Item variant="warning">Dart</ListGroup.Item>
                  <ListGroup.Item variant="dark">Flutter</ListGroup.Item>
                  <ListGroup.Item variant="warning">Bootstrap</ListGroup.Item>
                  <ListGroup.Item variant="dark">Git</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>

        <CardGroup>
          <Card>
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faFistRaised}
                size="5x"
                className="text-dark"
              ></FontAwesomeIcon>
              <Card.Title className="my-2">Fortalezas</Card.Title>
            </Card.Body>
            <Card.Text>
              <ListGroup variant="flush" className="">
                <ListGroup.Item>
                  Formación universitaria en ingeniería y programación
                </ListGroup.Item>
                <ListGroup.Item>
                  Capacidad de resolución de problemas
                </ListGroup.Item>
                <ListGroup.Item>
                  Enfoque lógico, creativo y metódico para trabajar
                </ListGroup.Item>
                <ListGroup.Item>
                  Capacidad para entender a personas que hablan en idioma Inglés
                </ListGroup.Item>
                <ListGroup.Item>
                  Habilidad para comunicar, empatía, paciencia y predisposición
                  para ayudar
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card>
          <Card>
            <Card.Body className="text-center">
              <FontAwesomeIcon
                icon={faLightbulb}
                size="5x"
                className="text-warning"
              ></FontAwesomeIcon>
              <Card.Title className="my-2">Debilidades</Card.Title>
            </Card.Body>
            <Card.Text>
              <ListGroup variant="flush" className="">
                <ListGroup.Item>
                  Nivel intermedio de Inglés para expresar ideas
                </ListGroup.Item>
                <ListGroup.Item>
                  Poca experiencia usando git en trabajos en equipo. Pero con más experiencia usándola de manera individual.
                </ListGroup.Item>
                <ListGroup.Item>
                  Tendencia a querer realizar muchas actividades en "simultaneo"
                </ListGroup.Item>
                <ListGroup.Item>
                  Autoexigencia al momento de elaborar y concretar proyectos
                </ListGroup.Item>
                <ListGroup.Item>
                  En proceso continuo de deconstrucción
                </ListGroup.Item>
              </ListGroup>
            </Card.Text>
          </Card>
        </CardGroup>
      </CardColumns>
    </Fragment>
  );
};