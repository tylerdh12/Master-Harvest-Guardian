import React from "react";

// Bootstrap Imports
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function SignIn() {
  return (
    <Container>
      <Row className="mt-5 mx-auto" fluid>
        <Col
          className="d-flex flex-column mr-auto ml-auto"
          md={6}
          xs={10}
          align="center"
        >
          <h2>Sign In</h2>
          <Form
            name="signin"
            method="post"
            netlify
            netlify-honeypot="bot-field"
          >
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
