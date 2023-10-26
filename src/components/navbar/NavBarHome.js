import React from "react";
import { Navbar, Nav, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBarHome() {
  return (
    <div className="nav-container">
      {/* <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto flex-column all-links">
            <Nav.Link className="shadow" href="#aboutus">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="#shows">SHOWS</Nav.Link>
            <Nav.Link href="#menu">MENU</Nav.Link>
            <Nav.Link href="#book">BOOK</Nav.Link>
            <Nav.Link href="#contactus">CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
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
              eventKey="3"
              as={Link}
              to="/contact"
              style={{ color: "white" }}
            >
              Shows
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
