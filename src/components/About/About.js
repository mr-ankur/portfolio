import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Experience from "./Experience";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I Am</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img
              src={laptopImg}
              alt="Illustration of a developer at a laptop"
              className="img-fluid"
            />
          </Col>
        </Row>

        <h2 className="project-heading">
          Where I've <strong className="purple">Worked</strong>
        </h2>
        <Experience />

        <h2 className="project-heading">
          Professional <strong className="purple">Skillset</strong>
        </h2>
        <Techstack />

        <h2 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h2>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
