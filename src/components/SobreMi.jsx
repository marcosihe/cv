import React from "react";
import banner from "../img/fotocv.png";
import iconArg from "../img/argentina.svg";
import styles from "../css/SobreMi.module.css";
import { Card, CardDeck } from "react-bootstrap";

export const SobreMi = () => {
  return (
    <CardDeck className="my-5">
      <Card className={styles.divImg}>
        <img
          src={banner}
          alt="Foto de perfil de Marcos Herrera"
          className={styles.imgProfile}
        />
        <Card.Body>
          <Card.Title>
            <h1>Marcos Ezequiel Herrera</h1>
          </Card.Title>
          <Card.Text>
            <h5>Full-Stack Developer - Jr</h5>
            <div className="d-flex justify-content-center">
              <img
                src={iconArg}
                alt="Logo de Argentina"
                className={styles.logo}
              />
              <p className="fw-bold d-flex align-item-center">Argentina</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="mt-5" border="warning">
        <Card.Body>
          <Card.Title className="text-center">
            <h2>Sobre mí</h2>
          </Card.Title>
          <Card.Text>
            Desde que descubrí cuánto me apasiona la programación, lo convertí
            en mi estilo de vida. Lo aplico día a día y disfruto del desarrollo
            tanto como del aprendizaje diario. Durante varios años me he formado
            de una manera técnica, por la Ingeniería, desarrollando ciertas
            habilidades para la resolución de problemas, las cuales también
            aplico de manera cotidiana. Además fui adquiriendo habilidades
            blandas por las diferentes actividades que he llevado a cabo,
            incluyendo talleres, capacitaciones, viajes, y muchos tipos de
            trabajos que no tienen que ver con mi profesión y objetivos
            profesional actual. Hola, soy Marcos! y soy una construcción de todo
            eso que he transitado.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};
