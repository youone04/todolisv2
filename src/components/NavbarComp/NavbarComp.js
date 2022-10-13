import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

export default function NavbarComp() {
  return (
    <>
      <Navbar
      className="navbar-mod"
         >
        <Container>
          <Navbar.Brand href="/">
          <h4 data-cy='header-title' className="nav-title"
          > TO DO LIST APP</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
