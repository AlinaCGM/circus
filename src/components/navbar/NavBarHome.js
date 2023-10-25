import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import './navbar.css'

function NavBarHome() {
  return (
    <div className='nav-container'>
    <Navbar  expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto flex-column all-links">
                    <Nav.Link className='shadow'  href="#aboutus">ABOUT US</Nav.Link>
                    <Nav.Link  href="#shows">SHOWS</Nav.Link>
                    <Nav.Link  href="#menu">MENU</Nav.Link>
                    <Nav.Link  href="#book">BOOK</Nav.Link>
                    <Nav.Link  href="#contactus">CONTACT US</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </div>
  )
}

export default NavBarHome