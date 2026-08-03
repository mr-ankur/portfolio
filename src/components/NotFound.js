import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Particle from "./Particle";

function NotFound() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container className="notfound">
        <h1 className="notfound-code purple">404</h1>
        <h2 className="project-heading">This page doesn't exist</h2>
        <p>The link may be out of date, or the page has moved.</p>
        <Button variant="primary" as={Link} to="/">
          Back to home
        </Button>
      </Container>
    </Container>
  );
}

export default NotFound;
