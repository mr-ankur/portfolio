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
              I build and maintain backend-heavy products end to end — payments,
              authentication and high-volume event tooling — and I care about
              leaving codebases better than I found them.
              <br />
              <br />
              I work day to day in{" "}
              <i>
                <b className="purple">
                  Ruby on Rails, Golang, Python, ReactJS, Next.js, GraphQL,
                  Postgres and MongoDB
                </b>
              </i>
              .
              <br />
              <br />
              Right now I'm working on{" "}
              <i>
                <b className="purple">cloud data platforms</b>
              </i>{" "}
              — AWS, Snowflake, Trino, Spark SQL, Apache Iceberg and Airbyte —
              after years on{" "}
              <i>
                <b className="purple">payments and authentication</b>
              </i>
              : Stripe payment migrations, OpenID Connect SSO, and bulk-editing
              tools used by live event hosts.
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
