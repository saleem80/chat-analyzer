import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const NavTopMob = () => {
  return (
    <Navbar expand={false}>
      <Container fluid>
        <Navbar.Brand style={{ color: "white" }}>
          <Link className="navbar-brand" to="/">
            <img src={logo} width="200" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Brand Name
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">INSTRUCTION</Nav.Link>
              <Nav.Link href="/">ABOUT US</Nav.Link>
              <Nav.Link href="/">FAQs</Nav.Link>
              <Nav.Link href="/">CONTACT</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default NavTopMob;
