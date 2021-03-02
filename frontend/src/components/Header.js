import React from "react";
import { Button, Navbar } from "react-bootstrap";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Navbar>
        <Navbar.Brand href="#home">Contact</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button type="submit" variant="outline-primary">
              Add Contact
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
