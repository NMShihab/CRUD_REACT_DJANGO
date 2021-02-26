import React, { useState } from "react";
import axios from "axios";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import "./Sidebar.css";

function Sidebar() {
  const url = "http://127.0.0.1:8000/contact_api/contact/";

  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phn: "",
  });

  function handleContact(e) {
    const newContact = { ...contact };
    newContact[e.target.id] = e.target.value;
    setContact(newContact);
    console.log(newContact);
  }

  function saveContact(e) {
    e.preventDefault();
    axios
      .post(url, {
        firstName: contact.firstName,
        lastName: contact.lastName,
        email: contact.email,
        phn: contact.phn,
      })
      .then((res) => {
        console.log(res.contact);
      });
  }
  return (
    <div className="sidebar">
      <Form onSubmit={(e) => saveContact(e)}>
        <Form.Group as={Row} controlId="formHorizontalEmail">
          <Form.Label column sm={4}>
            First Name
          </Form.Label>
          <Col sm={8}>
            <Form.Control
              type="text"
              placeholder="First Name"
              id="firstName"
              value={contact.firstName}
              onChange={(e) => handleContact(e)}
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
              id="lastName"
              value={contact.lastName}
              onChange={(e) => handleContact(e)}
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
              id="email"
              value={contact.email}
              onChange={(e) => handleContact(e)}
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
              id="phn"
              value={contact.phn}
              onChange={(e) => handleContact(e)}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row}>
          <Col sm={{ span: 8, offset: 4 }}>
            <Button size="lg" type="submit" block>
              Add
            </Button>
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
}

export default Sidebar;
