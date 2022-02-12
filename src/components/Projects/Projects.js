import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import zeehaus from "../../Assets/Projects/zeehaus.png";
import hyrr from "../../Assets/Projects/hyrr.png";
import nfhs from "../../Assets/Projects/nfhs.png";
import musicmayhem from "../../Assets/Projects/musicmayhem.png";
import blogspot from "../../Assets/Projects/blogspot.png";
import hyrrAdmin from "../../Assets/Projects/hyrrAdmin.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicmayhem}
              isBlog={false}
              title="Music Mayhem"
              description="Music Mayhem is a music quiz multiplayer game where players have to guess the Music details like title, artist and year of release by listening the song"
              link="https://gomayhem.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeehaus}
              isBlog={false}
              title="Zeehaus"
              description="Zeehaus is the digital platform to buy, sell, and invest in real estate. zeehuas reducing the cost of homeownership for buyers and investors, connects buyers and sellers with agents to simplify a real estate transaction"
              link="https://zeehaus.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyrr}
              isBlog={false}
              title="HYRR"
              description="Seeing the real candidate or the 'in person' experience with the candidate is critical to make a hiring decision. With short videos upfront in the hiring process instead of CVs, the funnel quality is significantly improved and there are no 'surprises' during actual interviews."
              link="https://hyrr.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyrrAdmin}
              isBlog={false}
              title="HYRR Admin"
              description="HYRR admin is a adminstartion tool for managing adminstrative information for HYRR Android App, Employers identifies the right candidate effortlessly even before they walk through the door for interviews. Best product for volume hiring or mass hiring."
              link="https://app.hyrr.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfhs}
              isBlog={false}
              title="NFHS"
              description="The National Federation of State High School Associations is the body that writes the rules of competition for most high school sports and activities in the United States. NFHS's headquarters are located in White River State Park in Indianapolis, Indiana."
              link="https://nfhs.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blogspot}
              isBlog={false}
              title="Blogspot"
              description="Blogspot is blogging website where user can write read blogs, user can also follow each others."
              link="https://sampleappank.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
