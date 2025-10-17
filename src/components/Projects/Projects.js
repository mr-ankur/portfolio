import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import zeehaus from "../../Assets/Projects/zeehaus.png";
import hyrr from "../../Assets/Projects/hyrr.png";
import nfhs from "../../Assets/Projects/nfhs.png";
import musicmayhem from "../../Assets/Projects/musicmayhem.png";
import hyrrAdmin from "../../Assets/Projects/hyrrAdmin.png";
import bulkedits from "../../Assets/Projects/bulkedits.png"
import discountcodes from "../../Assets/Projects/discountcodes.png"
import paymentplans from "../../Assets/Projects/paymentplans.png"
import teamedglobal from "../../Assets/Projects/teamedglobal.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={discountcodes}
              isBlog={false}
              title="Discount Codes (universe.com)"
              description="Implemented a major improvement for discount code configuration, enabling event hosts to customize code availability and activation based on specific date ranges, time ranges, and selected weekdays."
              link="https://support.universe.com/hc/en-us/articles/360006857832-Create-and-manage-discount-codes#h_01F2SZV1NZJY7WFHFN2VCTAQA2"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bulkedits}
              isBlog={false}
              title="Bulk Edits (universe.com)"
              description="Implemented the powerful Bulk Edit feature, enabling hosts to efficiently customize ticket price, quantity, availability, and timeslot capacity for numerous timeslots simultaneously, using specific filters for date ranges, time ranges, and weekdays."
              link="https://support.universe.com/hc/en-us/articles/4407663275405-Customizing-Tickets-Per-Timeslot-on-a-Timed-Entry-Event"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={paymentplans}
              isBlog={false}
              title="Payment Plans (universe.com)"
              description="Successfully managed a major release by migrating the Payment Plan feature from the deprecated Stripe Charges API to the modern Payment Intent API to implement 3D Secure (3DS) support for ticket installment payments, enhancing security and compliance."
              link="https://support.universe.com/hc/en-us/articles/360002388191-Set-up-a-payment-plan-for-your-event"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamedglobal}
              isBlog={false}
              title="Teamed Global"
              description="An HR Management tool designed to manage employee payroll and leave administration. This critical system handles payments for Multinational Corporations (MNCs), requiring robust currency conversion functionality to process multi-currency transactions accurately."
              link="https://www.teamed.global"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nfhs}
              isBlog={false}
              title="NFHS SSO, NFHS MMS, NFHS Rulebook"
              description="Contributed to the NFHS suite of applications (Sports Education, Coaching, and Membership). Key achievements include implementing Single Sign-On (SSO) via OpenID Connect, executing a major Ruby/Rails version upgrade for NFHS MMS, and customizing the Active Admin panel for the NFHS Rulebook to streamline bulk administrative operations."
              link="https://nfhs.org"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zeehaus}
              isBlog={false}
              title="Zeehaus"
              description="Contributed to the Zeehaus real estate platform, focusing on the core business logic for buying and selling properties. This included handling payment integrations via the Synapse API. Additionally, I engineered the entire exchange logic from scratch for a cryptocurrency token based on the Stellar blockchain."
              link="https://zeehaus.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicmayhem}
              isBlog={false}
              title="Music Mayhem"
              description="For the Music Mayhem Trivia music quiz game, I resolved major production bugs that were interrupting song playback and causing inaccurate score calculations. I also modified the core scoring logic to register points as soon as the user begins typing and implemented a player-name 'reward wheel' to award random players."
              link="https://gomayhem.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyrrAdmin}
              isBlog={false}
              title="HYRR Admin"
              description="HYRR admin is a adminstartion tool for managing adminstrative information for HYRR Android App, Employers identifies the right candidate effortlessly even before they walk through the door for interviews. Best product for volume hiring or mass hiring."
              link="https://app.hyrr.co"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hyrr}
              isBlog={false}
              title="HYRR"
              description="Seeing the real candidate or the 'in person' experience with the candidate is critical to make a hiring decision. With short videos upfront in the hiring process instead of CVs, the funnel quality is significantly improved and there are no 'surprises' during actual interviews."
              link="https://hyrr.co"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
