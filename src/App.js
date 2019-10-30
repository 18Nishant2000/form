import React from 'react';
// eslint-disable-next-line
import Button from "react-bootstrap/Button"
// eslint-disable-next-line
import Frost from "./FrostedGlass.css"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import './App.css';

function App() {
  return (
    <Container>

      <div className="Frost mt-4 mb-4 mr-2 ml-2">
        <Form>
          <h1 className="text-white">Template A1: Syllabus for Theory Courses (SAMPLE)</h1> <hr/>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label className="text-white">School</Form.Label>
                <Form.Control placeholder="First name" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label className="text-white">Program</Form.Label>
                <Form.Control placeholder="Last name"></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Form.Group controlId="Program">
            <Form.Label className="text-white">Branch</Form.Label>
              <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="Program">
            <Form.Label className="text-white">Coure Code</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
</Button>
        </Form>
      </div>

    </Container >

  );
}

export default App;
