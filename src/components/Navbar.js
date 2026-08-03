import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

const navItems = [
  { to: "/", label: "Home", Icon: AiOutlineHome },
  { to: "/about", label: "About", Icon: AiOutlineUser },
  { to: "/project", label: "Projects", Icon: AiOutlineFundProjectionScreen },
  { to: "/resume", label: "Resume", Icon: CgFileDocument },
];

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    function scrollHandler() {
      updateNavbar(window.scrollY >= 20);
    }

    scrollHandler();
    window.addEventListener("scroll", scrollHandler, { passive: true });
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" aria-label="Ankur Gupta — home">
          <img src={logo} className="img-fluid logo" alt="Ankur Gupta logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          aria-label="Toggle navigation menu"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" activeKey={pathname}>
            {navItems.map(({ to, label, Icon }) => (
              <Nav.Item key={to}>
                <Nav.Link
                  as={Link}
                  to={to}
                  eventKey={to}
                  aria-current={pathname === to ? "page" : undefined}
                  onClick={() => updateExpanded(false)}
                >
                  <Icon style={{ marginBottom: "2px" }} aria-hidden="true" />{" "}
                  {label}
                </Nav.Link>
              </Nav.Item>
            ))}

            <Nav.Item>
              <Nav.Link
                href="https://sampleappank.herokuapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ImBlog style={{ marginBottom: "2px" }} aria-hidden="true" />{" "}
                Blogs
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/mr-ankur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} aria-hidden="true" />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} aria-hidden="true" />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
