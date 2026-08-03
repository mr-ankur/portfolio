import React from "react";
import { Col, Row } from "react-bootstrap";
import experience from "../../data/experience";

function Experience() {
  return (
    <Row className="justify-content-center">
      <Col md={10}>
        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline-item" key={`${job.company}-${job.period}`}>
              <div className="timeline-header">
                <h3 className="timeline-role">{job.role}</h3>
                <span className="timeline-period">
                  {job.period}
                  {job.current && (
                    <span className="timeline-badge">Current</span>
                  )}
                </span>
              </div>
              <p className="timeline-company purple">
                {job.company}
                {job.client && (
                  <span className="timeline-client"> — {job.client}</span>
                )}
              </p>

              {job.highlights.length > 0 && (
                <ul className="timeline-highlights">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              )}

              {job.stack.length > 0 && (
                <ul
                  className="tag-list"
                  aria-label={`Stack used at ${job.company}`}
                >
                  {job.stack.map((item) => (
                    <li className="tag" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </Col>
    </Row>
  );
}

export default Experience;
