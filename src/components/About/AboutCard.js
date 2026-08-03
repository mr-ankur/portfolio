import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { yearsOfExperience } from "../../data/profile";

const strengths = [
  {
    label: "System Migration",
    text: "Successfully migrated legacy payment APIs to Stripe Payment Intent API for 3DS compliance and led major Rails version upgrades (4 to 6).",
  },
  {
    label: "High-Impact Features",
    text: "Implemented complex features from scratch, including Bulk Edit functionality for event configurations and crypto token exchange.",
  },
  {
    label: "Technical Stack",
    text: "Expertise across the full stack with Ruby on Rails, Golang, Python and ReactJS, backed by GraphQL, Postgres, MongoDB, Docker and Kubernetes.",
  },
  {
    label: "Data & AI",
    text: "Currently working on cloud data platforms — Snowflake, Trino, Spark SQL, Apache Iceberg and Airbyte on AWS — and using Claude, Augment AI, GitHub Copilot and ChatGPT day to day.",
  },
];

const interests = ["Playing Cricket", "Listening to Music", "Travelling"];

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            I am a <span className="purple">Senior Full Stack Engineer</span>{" "}
            with{" "}
            <span className="purple">{yearsOfExperience()}+ years</span> of
            experience specializing in{" "}
            <span className="purple">Ruby on Rails, Golang, and ReactJS</span>.
            I focus on building scalable, efficient solutions and have a proven
            track record in:
          </p>

          <ul>
            {strengths.map(({ label, text }) => (
              <li className="about-activity" key={label}>
                <ImPointRight aria-hidden="true" />{" "}
                <span className="purple">{label}:</span> {text}
              </li>
            ))}
          </ul>

          <p>
            Committed to maintaining clean, well-organized codebases and
            delivering high-quality software.
          </p>

          <p>Apart from coding, some other activities that I love to do:</p>

          <ul>
            {interests.map((interest) => (
              <li className="about-activity" key={interest}>
                <ImPointRight aria-hidden="true" /> {interest}
              </li>
            ))}
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Building the innovations by famous tool i.e. Programming!"
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
