import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Jumbotron className="text-center">
      <h1 className="mb-4">Creating a Greener Garden</h1>
      <p className="mb-4">
        Harvest Gardner is a gardening tool that will help to manage the gardening process
      </p>
      <p>
        <Button href="/signup" variant="success">
          Sign Up
        </Button>
      </p>
    </Jumbotron>
  );
}
