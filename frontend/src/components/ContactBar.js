import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import api from "../api";
import axios from "axios";

import "./ContactBar.css";

function ContactBar(props) {
  const url = "http://127.0.0.1:8000/contact_api/contact/";
  const [contact, setContact] = useState([]);

  const getContact = async () => {
    const response = await api.get("/contact");
    return response.data;
  };

  useEffect(() => {
    // axios
    //   .get(url)
    //   .then((res) => {
    //     // console.log(res);
    //     setContact(res.data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    const getAllContacts = async () => {
      const allContacts = await getContact();

      if (allContacts) {
        setContact(allContacts);
      }
    };

    getAllContacts();
  }, []);

  const deleteContact = async (id) => {
    await api.delete(`/contact/${id}`);
    console.log(id);
    setContact(contact.filter((contact) => contact.id !== id));
  };

  function updateContact(id) {
    console.log(id);
  }
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
              <Button
                variant="outline-warning"
                onClick={() => updateContact(contact.id)}
              >
                Edit
              </Button>{" "}
            </Col>
            <Col sm={1}>
              <Button
                variant="outline-danger"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </Button>{" "}
            </Col>
          </Row>
        ))}
      </div>
    </div>
  );
}

export default ContactBar;
