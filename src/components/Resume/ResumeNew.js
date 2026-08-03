import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import profile from "../../data/profile";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

// Viewer and download button both read the copy in /public, so there is one
// file to replace when the resume changes.
function DownloadButton() {
  return (
    <Button
      variant="primary"
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      <AiOutlineDownload aria-hidden="true" />
      &nbsp;Download CV
    </Button>
  );
}

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  // Page count comes from the document itself, so a longer resume keeps
  // rendering in full without a code change.
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Row style={{ justifyContent: "center", position: "relative" }}>
        <DownloadButton />
      </Row>

      <Row className="resume">
        <Document
          file={profile.resume}
          onLoadSuccess={({ numPages: total }) => setNumPages(total)}
          loading="Loading resume…"
          error="The resume could not be displayed — use the download button above."
        >
          {Array.from({ length: numPages }, (_, index) => (
            <Page
              key={index}
              pageNumber={index + 1}
              scale={width > 786 ? 1.7 : 0.6}
            />
          ))}
        </Document>
      </Row>

      <Row style={{ justifyContent: "center", position: "relative" }}>
        <DownloadButton />
      </Row>
    </Container>
  );
}

export default ResumeNew;
