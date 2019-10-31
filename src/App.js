import React from 'react';
import Button from "react-bootstrap/Button"
import "./FrostedGlass.css"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import './App.css';
import FormGroup from 'react-bootstrap/FormGroup';




function onsave() {
  var  school=document.getElementById("school").value;
  var  program=document.getElementById("program").value;
  var  branch=document.getElementById("branch").value;
  var  course_code=document.getElementById("course_code").value;
  var  course_title=document.getElementById("course_title").value;
  var  credits=document.getElementById("credits").value;

  window.alert(school+" "+program+" "+branch+" "+course_code+" "+course_title+" "+credits);
}


function App() {
  return (

    <Container>
      <div className="mt-4 mb-4 mr-2 ml-2">
        <Form>
          <h1 className="text-white">Template A1: Syllabus for Theory Courses (SAMPLE)</h1> <hr />
          <div>
            <Form.Group>
              <Form.Label className="text-white">School</Form.Label>
              <Form.Control placeholder="School" id="school"/>
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Label className="text-white">Program</Form.Label>
              <Form.Control placeholder="Program" id="program"></Form.Control>
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="Program">
              <Form.Label className="text-white">Branch</Form.Label>
              <Form.Control  placeholder="Branch" id="branch"/>
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="Program">
              <Form.Label className="text-white">Course Code</Form.Label>
              <Form.Control  placeholder="Password" id="course_code"/>
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="Program">
              <Form.Label className="text-white">Course Title</Form.Label>
              <Form.Control  placeholder="Password" id="course_title" />
            </Form.Group>
          </div>
          <div>
            <Form.Group controlId="Program">
              <Form.Label className="text-white">Credits</Form.Label>
              <Form.Control type="autofill" placeholder="Credits" id="credits" />
            </Form.Group>
          </div>
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


          <div align="center">
            <Form.Label className="text-white">Course Status</Form.Label>
            <DropdownButton id="dropdown-basic-button" title="Dropdown button">
              <Dropdown.Item href="#/action-1">Core</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Elective</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Open Elective </Dropdown.Item>
            </DropdownButton>
          </div>

          <FormGroup>
            <Form.Label className="text-white">Course Objective</Form.Label>
            <Form.Control as="textarea" aria-label="With textarea" />
          </FormGroup>

          <div align="center" >
            <Button variant="primary" type="submit" onClick={onsave}>
              Submit
          </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
}

export default App;
