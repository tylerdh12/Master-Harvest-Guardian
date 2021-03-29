import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <Navbar
      bg="light"
      variant="light"
      className="header masthead py-2 mb-auto"
      expand="md"
    >
      <div className="container">
        <Navbar.Brand href="/">Harvest Guardian</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="nav-button"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="https://app.harvestguardian.com" className="btn btn-success text-light m-2">
              Sign In / Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;
