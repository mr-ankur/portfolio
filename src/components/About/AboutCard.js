import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            I am <span className="purple">Senior Full Stack Engineer</span> with <span className="purple">7+ years</span> of experience specializing in <span className="purple">Ruby on Rails and ReactJS</span>. I focus on building scalable, efficient solutions and have a proven track record in:
            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">System Migration:</span> Successfully migrated legacy payment APIs to Stripe Payment Intent API for 3DS compliance and led major Rails version upgrades (4 to 6).
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">High-Impact Features:</span> Implemented complex features from scratch, including Bulk Edit functionality for event configurations and crypto token exchange.
              </li>
              <li className="about-activity">
                <ImPointRight /> <span className="purple">Technical Stack:</span> Expertise across the full stack utilizing <span className="purple">GraphQL, Postgres, MongoDB, Docker, and Kubernetes</span>.
              </li>
            </ul>
            Committed to maintaining clean, well-organized codebases and delivering high-quality software
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Cricket
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening Songs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
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
