import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiGit,
  SiPostman,
  SiAmazonaws,
  SiGooglecloud,
  SiJenkins,
  SiGrafana,
  SiDatadog,
} from "react-icons/si";

const tools = [
  { name: "Linux", Icon: SiLinux },
  { name: "VS Code", Icon: SiVisualstudiocode },
  { name: "Git", Icon: SiGit },
  { name: "Postman", Icon: SiPostman },
  { name: "AWS", Icon: SiAmazonaws },
  { name: "Google Cloud", Icon: SiGooglecloud },
  { name: "Jenkins", Icon: SiJenkins },
  { name: "Grafana", Icon: SiGrafana },
  { name: "Datadog", Icon: SiDatadog },
];

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {tools.map(({ name, Icon }) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <Icon aria-hidden="true" />
          <span className="tech-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Toolstack;
