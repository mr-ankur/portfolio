import React, { useMemo, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import projects, { projectTags } from "../../data/projects";

const ALL = "All";

function Projects() {
  const [activeTag, setActiveTag] = useState(ALL);

  const visible = useMemo(
    () =>
      activeTag === ALL
        ? projects
        : projects.filter((project) => project.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p className="project-intro">
          Here are a few projects I've worked on recently — filter by the stack
          you're interested in.
        </p>

        <div
          className="filter-bar"
          role="group"
          aria-label="Filter projects by technology"
        >
          {[ALL, ...projectTags].map((tag) => (
            <button
              type="button"
              key={tag}
              className={`filter-chip${tag === activeTag ? " is-active" : ""}`}
              aria-pressed={tag === activeTag}
              onClick={() => setActiveTag(tag)}
            >
              {tag}
            </button>
          ))}
        </div>

        <p className="filter-count" aria-live="polite">
          Showing {visible.length} of {projects.length} projects
        </p>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {visible.map((project) => (
            <Col md={4} className="project-card" key={project.id}>
              <ProjectCard {...project} />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
