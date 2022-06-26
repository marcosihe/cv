import React, { Fragment } from "react";
import { CardColumns, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'


export const Contacto = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Contacto</h2>
      <p>
        Si queres saber más sobre mi trabajo podes contactarme mediante los
        siguientes medios:
      </p>
      <CardColumns className="text-center py-2">
        <Card border="dark">
          <Card.Body>
            <Card.Title>Celular</Card.Title>
            <hr />
            <Card.Text>
              Podes llamarme o enviarme mensajes al número: <br />
              <span className="fw-bold">+54 9 381 6703322</span>
              <br /> o via whatsapp:
              <br />
              <br />
              <a
                target="_blank"
                rel="noreferrer"
                href="https://wa.me/5493816703322"
              >
                <FontAwesomeIcon icon={faWhatsappSquare} size="3x" className="text-success"></FontAwesomeIcon>
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="mt-3" border="dark">
          <Card.Body>
            <Card.Title>E-mail</Card.Title>
            <hr />
            <Card.Text>
              Enviarme un mail a:
              <br />
              <br />
              <span className="fw-bold">hemrcs@gmail.com</span>
              <br />
              <br />
              <FontAwesomeIcon
                icon={faEnvelope}
                size="3x"
                className="text-warning"
              ></FontAwesomeIcon>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardColumns>
    </Fragment>
  );
};
