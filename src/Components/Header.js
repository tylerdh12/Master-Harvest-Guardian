import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="header masthead py-4 mb-auto"
      expand="lg"
    >
      <div className="container">
        <Navbar.Brand href="/">Harvest Guardian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/" className="btn m-2">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="btn m-2">
              About
            </Nav.Link>
            <Nav.Link href="/pricing" className="btn m-2">
              Pricing
            </Nav.Link>
            <Nav.Link
              href="/signin"
              className="btn btn-outline-success text-success m-2"
            >
              Sign In
            </Nav.Link>
            <Nav.Link href="/signup" className="btn btn-success text-light m-2">
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
