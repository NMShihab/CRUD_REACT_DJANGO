import React from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Form>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            First Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="First Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Last Name
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Last Name" />
          </Col>
        </Form.Group>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={3}>
            Email
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="email" placeholder="Email" />
          </Col>
        </Form.Group>

        <Form.Group as={Row} controlId="formHorizontalPassword">
          <Form.Label column sm={3}>
            Phone No
          </Form.Label>
          <Col sm={9}>
            <Form.Control type="text" placeholder="Phone No" />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Sidebar;
