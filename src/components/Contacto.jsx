import React, { Fragment } from "react";
import { CardColumns, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsappSquare } from '@fortawesome/free-brands-svg-icons'


export const Contacto = () => {
  return (
    <Fragment>
      <h2 className="text-center my-5">Contact</h2>
      <p>
        If you want to know more about my job, you can contact me through the following medias
      </p>
      <CardColumns className="text-center py-2">
        <Card border="dark">
          <Card.Body>
            <Card.Title>Mobile Phone</Card.Title>
            <hr />
            <Card.Text>
              Phone Call or Text Message <br />
              <span className="fw-bold">+5493816703322</span>
              <br /> Whatsapp:
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
              Send E-mail to:
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
