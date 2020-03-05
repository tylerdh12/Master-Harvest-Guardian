import React from "react";
import { Jumbotron, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Jumbotron className="neumorphic rounded-corners text-center bg-dark text-light">
      <h1 className="mb-4 mt-4">Creating a Greener Garden</h1>
      <p className="mb-4 px-5">
        Harvest Gardner is a gardening tool that will help to manage the
        gardening process
      </p>
      <p>
        <Button href="/signup" variant="success">
          Sign Up
        </Button>
      </p>
    </Jumbotron>
  );
}
