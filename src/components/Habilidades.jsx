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
          <h2 className="text-center">Skills</h2>
        </Card.Title>
        <CardGroup className="my-3">
          <Card>
            <Card.Body>
            <Card.Title className="text-center">
                MERN Stack
              </Card.Title>
              <Card.Text className="fw-bold">
                <div>
                  <ProgressBar animated now={95} variant="success" />
                  <p>HTML5</p>
                </div>
                <div>
                  <ProgressBar animated now={95} variant="success" />
                  <p>CSS3</p>
                </div>
                <div>
                  <ProgressBar animated now={90} variant="success" />
                  <p>Javascript</p>
                </div>
                <div>
                  <ProgressBar animated now={90} variant="success" />
                  <p>React</p>
                </div>
                <div>
                  <ProgressBar animated now={90} variant="success" />
                  <p>Mongo DB</p>
                </div>
                <div>
                  <ProgressBar animated now={90} variant="success" />
                  <p>Node js</p>
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title className="text-center">
                Languages & Frameworks
              </Card.Title>
              <Card.Text>
                <ListGroup className="fw-bold">
                  <ListGroup.Item variant="warning">Java</ListGroup.Item>
                  <ListGroup.Item variant="dark">MySQL</ListGroup.Item>
                  <ListGroup.Item variant="warning">TailwindCss</ListGroup.Item>
                  <ListGroup.Item variant="dark">Bootstrap 5</ListGroup.Item>
                  <ListGroup.Item variant="warning">Express JS</ListGroup.Item>
                  <ListGroup.Item variant="dark">Material UI</ListGroup.Item>
                  <ListGroup.Item variant="warning">Selenium</ListGroup.Item>
                  <ListGroup.Item variant="dark">WebDriverIO</ListGroup.Item>
                </ListGroup>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </CardColumns>
    </Fragment>
  );
};