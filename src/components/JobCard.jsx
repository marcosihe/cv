import React from "react";
import { Card } from "react-bootstrap";

export const JobCard = (props) => {
  return (
    <Card className="text-center">
      <Card.Body>
        {props.icon}
        <Card.Title>{props.info.title}</Card.Title>
        <Card.Text>
          <h6>{props.info.subtitle}</h6>
          <p>{props.info.textBody}</p>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        {props.info.footerText}
      </Card.Footer>
    </Card>
  );
};
