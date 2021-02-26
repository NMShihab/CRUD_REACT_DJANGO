import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Sidebar.css";

function Sidebar() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phn, setPhn] = useState("");

  const saveContact = (e) => {
    console.log(e);
  };
  return (
    <div className="sidebar">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            First Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Last Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            Email
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={4}>
            Phone No
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="Phone No"
              value={phn}
              onChange={(e) => setPhn(e.target.value)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 8, offset: 4 }}>
            <Button onClick={saveContact} size="lg" type="submit" block>
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Sidebar;
