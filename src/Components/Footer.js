import React from "react";

import { Navbar } from "react-bootstrap";

export default function Footer(props) {
  return (
    <Navbar className="neumorphic bottom" bg="dark" variant="dark">
      <Navbar.Brand href="/"></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-center">
        <Navbar.Text>
          Copyright &copy; 2020 |{" "}
          <a href="https://resume.jsstack.dev">JSStack Development</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
