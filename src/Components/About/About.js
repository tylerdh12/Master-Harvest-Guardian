import React from "react";

// Bootstrap Imports
import { Jumbotron, Button } from "react-bootstrap";

export default function About(props) {
  return (
    <header className="masthead m-5">
      <div className="container rounded-corners neumorphic text-light h-100">
        <div className="row h-100 align-items-center">
          <div className="col-12 text-center">
            <h1 className="font-weight-light p-4">
              Vertically Centered Masthead Content
            </h1>
            <p className="lead p-4">
              A great starter layout for a landing page
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
