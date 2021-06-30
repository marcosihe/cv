import React, { Fragment } from "react";
import styles from './Footer.module.css'

export const Footer = () => {
  return (
    <Fragment>
      <div className="bg-dark py-4 my-5">
        <div className="d-flex justify-content-center">
        <a target="_blank" rel="noreferrer" href="https://github.com/marcosihe">
          <img src={process.env.PUBLIC_URL + "github-icon.svg"} alt="Logo de github" className={styles.logo} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/marcoseherrera/"><img src={process.env.PUBLIC_URL + "linkedin-icon.svg"} alt="Logo de Linkedin" className={styles.logo}/></a>
        </div>
        <p className="text-center text-light pt-2">Marcos Ezequiel Herrera</p>
      </div>
    </Fragment>
  );
};
