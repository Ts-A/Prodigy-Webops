import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="#1a1a1a"
      variant="dark"
      className="px-4"
      sx={{
        display: "flex",
        alignItems: "center",
      }}
      expanded={expanded}
    >
      <Navbar.Brand href="/">
        <img src={"/assets/logo.png"} />
      </Navbar.Brand>{" "}
      {/* Brand name on the left */}
      <Navbar.Toggle
        onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
        aria-controls="basic-navbar-nav"
      />{" "}
      {/* Toggle button for mobile */}
      <Navbar.Collapse id="basic-navbar-nav">
        {" "}
        {/* Collapsible Navbar */}
        <Nav className={styles.navbar}>
          {" "}
          {/* Navbar links on the right */}
          <Nav.Link
            onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
          >
            <NavLink to="/" className={styles.link}>
              Home
            </NavLink>
          </Nav.Link>
          <Nav.Link
            onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
          >
            <NavLink to="/gallery" className={styles.link}>
              Gallery
            </NavLink>
          </Nav.Link>
          <Nav.Link
            onClick={() => (expanded ? setExpanded(false) : setExpanded(true))}
          >
            <NavLink to="/teams" className={styles.link}>
              Teams
            </NavLink>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
