import React from 'react';
// eslint-disable-next-line
import Button from "react-bootstrap/Button"
// eslint-disable-next-line
import Frost from "./FrostedGlass.css"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';

function App() {
  return (

    <Container>
      <div className="mt-4 mb-4 mr-2 ml-2">
        <Form>
          <h1 className="text-white">Template A1: Syllabus for Theory Courses (SAMPLE)</h1> <hr />
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

          <Row>
            <Col>
              <Form.Group controlId="Program">
                <Form.Label className="text-white">Course Code</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="Program">
                <Form.Label className="text-white">Course Title</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="Program">
            <Form.Label className="text-white">Credits</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="Program">
            <Form.Label className="text-white">Contact Hours (L-T-P)</Form.Label>
            <Row>
              <Col>
                <Form.Control type="password" placeholder="L" />
              </Col>
              <Col>
                <Form.Control type="password" placeholder="T" />
              </Col>
              <Col>
                <Form.Control type="password" placeholder="P" />
              </Col>
            </Row>
          </Form.Group>
          <br />

          <FormGroup>
            <div align="center">
              <Form.Label className="text-white">Course Status</Form.Label>
              <DropdownButton id="dropdown-basic-button" title="Dropdown button">
                <Dropdown.Item href="#/action-1">Core</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Elective</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Open Elective </Dropdown.Item>
              </DropdownButton>
            </div>
          </FormGroup>
          <FormGroup>
            <Form.Label className="text-white">Course Objective</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" />
          </FormGroup>

          <div align="center" >
            <Button variant="primary" type="submit">
              Submit
          </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default App;
