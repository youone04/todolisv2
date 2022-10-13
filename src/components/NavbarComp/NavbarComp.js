import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

export default function NavbarComp() {
  return (
    <>
      <Navbar
      data-cy="navbar-main"
      className="navbar-mod"
         >
        <Container>
          <Navbar.Brand href="/">
          <h4 className="nav-title" data-cy="navbar-title" 
          > TO DO LIST APP</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
