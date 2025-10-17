import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ankur Gupta </span>
            from <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            <br />I am Senior Full Stack Engineer with 7+ years of experience specializing in Ruby on Rails and ReactJS. I focus on building scalable, efficient solutions and have a proven track record in:
            <br />
            <ul>
              <li className="about-activity">
                <ImPointRight /> <b>System Migration:</b> Successfully migrated legacy payment APIs to Stripe Payment Intent API for 3DS compliance and led major Rails version upgrades (4 to 6).
              </li>
              <li className="about-activity">
                <ImPointRight /> <b>High-Impact Features:</b> Implemented complex features from scratch, including Bulk Edit functionality for event configurations and crypto token exchange.
              </li>
              <li className="about-activity">
                <ImPointRight /> <b>Technical Stack:</b> Expertise across the full stack utilizing GraphQL, Postgres, MongoDB, Docker, and Kubernetes.
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
            "Build the innovation by famous tool i.e. Programming!" &#x1F920;
          </p>
          <footer className="blockquote-footer">Ankur Gupta</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
