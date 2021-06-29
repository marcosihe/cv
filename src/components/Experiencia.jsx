import React, { Fragment } from "react";
import { JobCard } from "./JobCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTools,
  faHandshake,
  faOilCan,
  faMicroscope,
  faPhoneSquare,
  faLaptopMedical,
  faChalkboardTeacher,
} from "@fortawesome/free-solid-svg-icons";
//import styles from '../css/Experiencia.module.css';

export const Experiencia = () => {
  const info = [
    {
      title: "Bioingeniería",
      subtitle: "Sanatorio 9 de Julio S.A.",
      textBody:
        "Mantenimiento preventivo y correctivo en el área de Bioingeniería del Sanatorio.",
      footerText: "Tucumán-Argentina",
    },
    {
      title: "Operario en Estación de Servicio YPF",
      subtitle: "Petronorte S.A.",
      textBody:
        "Consultor interno y asesor externo con orientación al cliente.",
      footerText: "Tucumán - Argentina",
    },
    {
      title: "Servicio Técnico",
      subtitle: "Freelancer - Taller Propio",
      textBody: "Reparación y mantenimiento de determinados equipos médicos",
      footerText: "Tucumán - Argentina",
    },
    {
      title: "Tutor estudiantil",
      subtitle: "Facultad de Ciencias Exactas y Tecnología",
      textBody:
        "Tutor Par. Miembro del equipo de trabajo de la Tutoría estudiantil de la FACET",
      footerText: "U.N.T.",
    },
    {
      title: "Ayudante de Cátedra",
      subtitle: "Facultad de Bioquímica, Química y Farmacia",
      textBody:
        "Auxiliar de 2º categoria de la materia Física I. Consultor de trabajos prácticos y ayudante de laboratorio.",
      footerText: "U.N.T.",
    },
    {
      title: "Recepción de llamadas de emergencias",
      subtitle: "Ministerio de Seguridad Ciudadana",
      textBody: "Recepción de llamadas de la línea de emergencia 911.",
      footerText: "Tucumán - Argentina",
    },
    {
      title: "Profesor particular",
      subtitle: "Nivel secundario y universitario",
      textBody:
        "Dictado de clases presenciales de diferentes materias: Matemática, Física, Química, entre otras.",
      footerText: "Tucumán - Argentina",
    },
  ];

  return (
    <Fragment>
      <h2 className="text-center my-5">Experiencia Laboral</h2>
      <div className="row">
        <div className={"col-sm-12 col-md-4 my-3"}>
          <JobCard
            info={info[0]}
            icon={
              <FontAwesomeIcon
                icon={faLaptopMedical}
                size="3x"
                className="text-success"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[1]}
            icon={
              <FontAwesomeIcon
                icon={faOilCan}
                size="3x"
                className="text-secondary"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[2]}
            icon={
              <FontAwesomeIcon
                icon={faTools}
                size="3x"
                className="text-dark"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[3]}
            icon={
              <FontAwesomeIcon
                icon={faHandshake}
                size="3x"
                className="text-danger"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[4]}
            icon={
              <FontAwesomeIcon
                icon={faMicroscope}
                size="3x"
                className="text-warning"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[5]}
            icon={
              <FontAwesomeIcon
                icon={faPhoneSquare}
                size="3x"
                className="text-primary"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[6]}
            icon={
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="3x"
                className="text-success"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
      </div>
    </Fragment>
  );
};
