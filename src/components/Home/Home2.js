import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiOutlineDownload, AiOutlineMail } from "react-icons/ai";
import SocialLinks from "../SocialLinks";
import profile from "../../data/profile";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h2 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h2>
            <p className="home-about-body">
              I'm a{" "}
              <i>
                <b className="purple">full stack engineer</b>
              </i>
              . I design and build backend services in{" "}
              <i>
                <b className="purple">Ruby on Rails</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Golang</b>
              </i>
              , and the interfaces on top of them in{" "}
              <i>
                <b className="purple">ReactJS</b>
              </i>{" "}
              and{" "}
              <i>
                <b className="purple">Next.js</b>
              </i>{" "}
              — owning features from the schema through to the screen.
              <br />
              <br />
              Around that core I work with{" "}
              <i>
                <b className="purple">
                  Python, TypeScript, GraphQL, Postgres, MongoDB and Redis
                </b>
              </i>
              , and I care about leaving codebases better than I found them.
              <br />
              <br />
              I've applied that across payments, authentication and high-volume
              event tooling — Stripe payment migrations, OpenID Connect SSO, and
              bulk-editing tools used by live event hosts — and most recently
              across cloud data platforms on AWS.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Illustrated avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h2>GET IN TOUCH</h2>
            <p>
              I'm open to interesting backend and full stack work. The fastest
              way to reach me is <span className="purple">email</span>.
            </p>

            <div className="contact-actions">
              <Button variant="primary" href={`mailto:${profile.email}`}>
                <AiOutlineMail aria-hidden="true" />
                &nbsp;{profile.email}
              </Button>
              <Button
                variant="primary"
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineDownload aria-hidden="true" />
                &nbsp;Download CV
              </Button>
            </div>

            <p className="contact-location">Based in {profile.location}</p>

            <SocialLinks
              className="home-about-social-links"
              linkClassName="icon-colour home-social-icons"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
