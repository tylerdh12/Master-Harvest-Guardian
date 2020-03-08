import React from "react";

// Bootstrap Imports
import { Card, Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <Card className=" mb-5 text-center rounded-corners align-items-stretch bg-light text-dark neumorphic">
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="p-4">{props.description}</Card.Text>
        <Button
          href={props.link}
          className="mt-auto mx-auto"
          variant="outline-success"
        >
          {props.linkTitle}
        </Button>
      </Card.Body>
    </Card>
  );
}
