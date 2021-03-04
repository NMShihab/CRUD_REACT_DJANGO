import React, { useState } from "react";
import axios from "axios";
import api from "../api";
import { Button, Col, Form, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  const url = "http://127.0.0.1:8000/contact_api/contact/";

  const [contact, setContact] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  const history = useHistory();

  function handleContact(e) {
    const newContact = { ...contact };
    newContact[e.target.name] = e.target.value;
    setContact(newContact);
    console.log(newContact);
  }

  function saveContact(e) {
    e.preventDefault();
    axios
      .post(url, {
        first_name: contact.first_name,
        last_name: contact.last_name,
        email: contact.email,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));

    setContact({
      first_name: "",
      last_name: "",
      email: "",
    });

    history.push("/");
  }
  return (
    <div className="sidebar">
      <Container>
        <Row>
          <Col sm={4}>
            <Form onSubmit={(e) => saveContact(e)}>
              <Form.Group as={Row} controlId="formHorizontalEmail">
                <Form.Label column sm={4}>
                  First Name
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    name="first_name"
                    value={contact.first_name}
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
                    name="last_name"
                    value={contact.last_name}
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
                    name="email"
                    value={contact.email}
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
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Sidebar;
