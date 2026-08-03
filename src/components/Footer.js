import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialLinks from "./SocialLinks";
import profile from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Container fluid className="footer" as="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Designed and developed by {profile.name}</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <SocialLinks className="footer-icons" style={{ color: "white" }} />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
