import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import axios from "axios";

import "./ContactBar.css";

function ContactBar() {
  const url = "http://127.0.0.1:8000/contact_api/contact/";
  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res);
        setContact(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="contactBar">
      <div className="contactBar__contactElement">
        {contact.map((contact) => (
          <Row key={contact.id}>
            <Col sm={5}>
              <h5>
                {contact.first_name} {contact.last_name}
              </h5>
            </Col>

            <Col sm={5}>
              <h5>{contact.email}</h5>
            </Col>

            <Col sm={1}>
              <Button variant="outline-warning">Edit</Button>{" "}
            </Col>
            <Col sm={1}>
              <Button variant="outline-danger">Delete</Button>{" "}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default ContactBar;
