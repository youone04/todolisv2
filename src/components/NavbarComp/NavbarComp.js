import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

export default function NavbarComp() {
  return (
    <>
      <Navbar style={{ 
        height: 105,
        backgroundColor:'#16ABF8',
        boxShadow:'0px 4px 10px rgba(0, 0, 0, 0.1)'
         }}>
        <Container>
          <Navbar.Brand href="#home">
          <h4 style={{ color:'white', fontFamily:'Poppins' }}> TO DO LIST APP</h4>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
