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
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
//import styles from '../css/Experiencia.module.css';

export const Experiencia = () => {
  const info = [
    {
      title: "Clinical Engineer",
      subtitle: "9 de Julio S.A. Private Hospital",
      textBody:
        "Provides cost-effective equipment inspection, maintenance, calibration, and repair service on a variety of medical devices. Plan and execute technical support and maintenance to the sanatorium’s medical equipment (corrective and preventive tasks). Communicates with clinical staff on the topics of equipment features, functionality, etc. Provides fast and efficient responses to problems that may arise within the sanatorium.",
      footerText: "7 months - Tucumán-Argentina",
    },
    {
      title: "Front-End Developer",
      subtitle: "Thalú",
      textBody:
        "Carry out the building process of user interfaces for websties, applying technologies such as HTML, CSS, Javascript and Bootstrap 5.",
      footerText: "3 months - Tucumán-Argentina",
    },
    {
      title: "Test Automation Engineer JR",
      subtitle: "Globant",
      textBody: "Project: Investing ES - for Disney Media",
      footerText: "6 months - Tucumán-Argentina",
    },
    {
      title: "Volunteering: Student Council",
      subtitle: "Facultad de Ciencias Exactas y Tecnología",
      textBody:
        "Advise students on academic and administrative issues. Promote inclusion and encourage collaborative work through different activities such as workshops and trainings.",
      footerText: "1 year - U.N.T.",
    },
    {
      title: "Assistant Professor",
      subtitle: "Facultad de Bioquímica, Química y Farmacia",
      textBody:
        "Teach the practical and laboratory part, to first-year college’s students, in Physics I subject. I also took a part in the design of the exercising guide book.",
      footerText: "2 years - U.N.T.",
    },
    {
      title: "Call Center Agent - Intership",
      subtitle: "Security Citizen Ministry",
      textBody:
        "Categorize emergency calls in order to achieve correct and fast intervention.",
      footerText: "6 months - Tucumán-Argentina",
    },
    {
      title: "Back-End Developer",
      subtitle: "Entropy Labs - Workstride",
      textBody: "Part of the Operations Team for Workstride. Working with Java and SQL. Besides, I also work in an internal project for Entropy Labs, developing in React JS.",
      footerText: "Since May 2022 - Remote Work"
    }
  ];

  return (
    <Fragment>
      <h2 className="text-center my-5">Carrer Summary</h2>
      <div className="row">
        {/** Entropy */}
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[6]}
            icon={
              <FontAwesomeIcon
                icon={faLaptop}
                size="3x"
                className="text-secondary"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        {/** Globant */}
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
        {/** Thalú */}
        <div className="col-sm-12 col-md-4 my-3">
          <JobCard
            info={info[1]}
            icon={
              <FontAwesomeIcon
                icon={faChalkboardTeacher}
                size="3x"
                className="text-success"
              ></FontAwesomeIcon>
            }
          ></JobCard>
        </div>
        {/** Tutoría */}
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
        {/** ING. Clínico */}
        <div className="col-sm-12 col-md-4 my-3">
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
        {/** Ayudante de Cátedra */}
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
        {/** 911 */}
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
      </div>
    </Fragment>
  );
};
