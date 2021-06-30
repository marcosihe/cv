import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Fragment } from "react";
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <Fragment>
      <div className="bg-dark py-4 my-5">
        <div className="d-flex justify-content-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/marcosihe">
        <FontAwesomeIcon icon={faGithubSquare} size="2x" alt="Logo de Github" className="text-light me-2"></FontAwesomeIcon>
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcoseherrera/">
          <FontAwesomeIcon icon={faLinkedin} size="2x" alt="Logo de Linkedin" className="text-light"></FontAwesomeIcon>
          </a>
        </div>
        <p className="text-center text-light pt-2">Marcos Ezequiel Herrera</p>
      </div>
    </Fragment>
  );
};
