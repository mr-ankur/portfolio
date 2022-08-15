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
            <br />I am Senior Software Developer at Webonise Lab Pvt Ltd.
            <br />
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
