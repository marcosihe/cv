import React, { Fragment } from "react";
import { Card } from "react-bootstrap";
import { Spinner } from "./Spinner";

export const Portfolio = () => {
  return (
    <Fragment>
      <Card className="text-center my-5 p-5">
        <Spinner></Spinner>
        <h2>Portfolio in progress...</h2>
      </Card>
    </Fragment>
  );
};
