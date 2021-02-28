import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import ContactBar from "./components/ContactBar";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Container>
          <Row>
            <Col sm={4}>
              <Sidebar />
            </Col>
            <Col sm={8}>
              <ContactBar />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default App;
