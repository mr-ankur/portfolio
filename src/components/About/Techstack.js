import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiRubyonrails,
  SiGo,
  SiPython,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSnowflake,
  SiTrino,
  SiApachespark,
  SiDocker,
  SiKubernetes,
} from "react-icons/si";

// Mirrors the technical skills on the resume. Each icon carries a visible
// label so the grid reads without recognising every logo.
const stack = [
  { name: "Ruby on Rails", Icon: SiRubyonrails },
  { name: "Golang", Icon: SiGo },
  { name: "Python", Icon: SiPython },
  { name: "ReactJS", Icon: SiReact },
  { name: "Next.js", Icon: SiNextdotjs },
  { name: "TypeScript", Icon: SiTypescript },
  { name: "JavaScript", Icon: SiJavascript },
  { name: "GraphQL", Icon: SiGraphql },
  { name: "Postgres", Icon: SiPostgresql },
  { name: "MongoDB", Icon: SiMongodb },
  { name: "Redis", Icon: SiRedis },
  { name: "Snowflake", Icon: SiSnowflake },
  { name: "Trino", Icon: SiTrino },
  { name: "Spark SQL", Icon: SiApachespark },
  { name: "Docker", Icon: SiDocker },
  { name: "Kubernetes", Icon: SiKubernetes },
];

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {stack.map(({ name, Icon }) => (
        <Col xs={4} md={2} className="tech-icons" key={name}>
          <Icon aria-hidden="true" />
          <span className="tech-label">{name}</span>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
