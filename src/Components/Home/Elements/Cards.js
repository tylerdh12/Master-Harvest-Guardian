import React from "react";

// Bootstrap Imports
import { Card, Button } from "react-bootstrap";

export default function Cards(props) {
  return (
    <Card className=" mb-5 text-center rounded-corners align-items-stretch bg-dark text-light neumorphic">
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className="d-flex flex-column">
        <Card.Title className="card-header">{props.title}</Card.Title>
        <Card.Text className="p-4">{props.description}</Card.Text>
        <Button className="mt-auto mx-auto" variant="outline-success">
          Go somewhere
        </Button>
      </Card.Body>
    </Card>
  );
}
