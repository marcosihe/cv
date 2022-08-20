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
            <h5>Software Developer</h5>
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
      <Card className="mt-5" border="dark">
        <Card.Body>
          <Card.Title className="text-center">
            <h2>About Marcos</h2>
          </Card.Title>
          <Card.Text>
            Marcos is a problem-solving person who always tries to provide
            efficient, scalable, and readable solutions to problems that arise
            daily in software development. He also has experience working with
            agile methodologies thanks to working as part of software
            development teams at Globant, Entropy Labs, among others. So far, he
            has added different Front-end, Back-end, and QA Automation
            technologies to his technical skills. Moreover, he continues
            training in these technologies, mainly those related to the MERN
            stack. He feels committed to himself to make a difference leaving
            his mark as he did in every place where he worked before. He
            believes good communication is one of the keys to success in this
            area
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};
