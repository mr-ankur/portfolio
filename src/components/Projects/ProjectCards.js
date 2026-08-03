import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards({
  imgPath,
  title,
  company,
  description,
  link,
  tags = [],
  isBlog = false,
}) {
  return (
    <Card className="project-card-view">
      <Card.Img
        variant="top"
        src={imgPath}
        alt={`${title} screenshot`}
        loading="lazy"
      />
      <Card.Body>
        <Card.Title>
          {title}
          {company && <span className="project-company">{company}</span>}
        </Card.Title>
        <Card.Text>{description}</Card.Text>

        {tags.length > 0 && (
          <ul className="tag-list" aria-label={`${title} tech stack`}>
            {tags.map((tag) => (
              <li className="tag" key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <Button
          variant="primary"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BiLinkExternal aria-hidden="true" /> &nbsp;
          {isBlog ? "View Blog" : "View Project"}
          <span className="sr-only"> — {title} (opens in a new tab)</span>
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
