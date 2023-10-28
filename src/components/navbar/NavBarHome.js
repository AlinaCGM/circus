import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./navbar.css";

function NavBarHome() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navContainerClass = scrolling
    ? "nav-container scrolled"
    : "nav-container";

  return (
    <div className={navContainerClass}>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="transparent"
        variant="dark"
        style={{ color: "white" }}
      >
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
          style={{ borderColor: "white", marginLeft: "2%" }}
        />
        <Navbar.Collapse id="navbarScroll" className="navbar-collapsed ">
          <Nav className="m-auto d-flex justify-content-center gap-4 ">
            <NavLink eventKey="1" as={Link} to="/" style={{ color: "white" }}>
              Home
            </NavLink>
            <NavLink
              eventKey="2"
              as={Link}
              to="/about"
              style={{ color: "white" }}
            >
              About Us
            </NavLink>

            <NavLink
              eventKey="4"
              as={Link}
              to="/restaurant"
              style={{ color: "white" }}
            >
              Restaurant
            </NavLink>
            <NavLink
              eventKey="5"
              as={Link}
              to="/book"
              style={{ color: "white" }}
            >
              Book
            </NavLink>
            <NavLink
              eventKey="6"
              as={Link}
              to="/contact"
              style={{ color: "white" }}
            >
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default NavBarHome;
