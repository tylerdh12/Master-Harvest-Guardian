import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Home(props) {
  return (
    <Jumbotron className="text-center text-dark">
      <h1 className="mb-4 mt-4">{props.heading}</h1>
      <p className="mb-4 px-5">{props.content}</p>
      <p>
        <Button href="/signup" variant="success">
          {props.button}
        </Button>
      </p>
    </Jumbotron>
  );
}
