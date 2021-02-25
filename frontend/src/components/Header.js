import React from "react";
import { Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className="header">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Contact</Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default Header;
