import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function Header() {
  return (
    <Navbar className="bg-dark neumorphic py-4" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="/">Harvest Guardian</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="neumorphic"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="btn">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="btn">
              About
            </Nav.Link>
            <Nav.Link href="/pricing" className="btn">
              Pricing
            </Nav.Link>
            <Nav.Link
              href="/signin"
              className="btn m-1 mt-0 btn-outline-success text-success"
            >
              Sign In
            </Nav.Link>
            <Nav.Link
              href="/signup"
              className="m-1 mr-0 btn btn-success text-light"
            >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
