import React from "react";

// Bootstrap Imports
import { Card } from "react-bootstrap";

export default function Cards(props) {
  return (
    <Card className="text-center align-items-stretch" bg="success" text="white">
      <Card.Img variant="top" src="/public/logo512.png" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text className="px-3">
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}
