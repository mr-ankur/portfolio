import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import profile, { yearsOfExperience } from "../../data/profile";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="waving hand">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> {profile.name.toUpperCase()}</strong>
              </h1>

              <div className="home-type">
                <Type />
              </div>

              <p className="home-blurb">
                {yearsOfExperience()}+ years of full stack development — Ruby on
                Rails and Golang on the backend, ReactJS and Next.js on the
                front.
              </p>

              <div className="home-cta">
                <Button variant="primary" as={Link} to="/project">
                  View my work
                </Button>
                <Button variant="primary" href={`mailto:${profile.email}`}>
                  Get in touch
                </Button>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="Illustration of a developer at work"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
