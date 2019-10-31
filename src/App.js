import React from 'react';
import Button from "react-bootstrap/Button"
import "./Glass.css"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import DropdownButton from "react-bootstrap/DropdownButton"
import Dropdown from "react-bootstrap/Dropdown"
import FormGroup from 'react-bootstrap/FormGroup';

function onsave() {
  var school = document.getElementById("school").value;
  var program = document.getElementById("program").value;
  var branch = document.getElementById("branch").value;
  var course_code = document.getElementById("course_code").value;
  var course_title = document.getElementById("course_title").value;
  var credits = document.getElementById("credits").value;

  window.alert(school + " " + program + " " + branch + " " + course_code + " " + course_title + " " + credits);
}


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { color: '' };
  }

  onPickColor(e) {
    console.log('[onPickColor]', this.inputEl)
    this.setState({ color: this.inputEl.value });
  }
  render() {
    return (

      <Container>
        <div className="mt-4 mb-4 mr-2 ml-2">
          <Form>
            <h2 className="text-white"><b>Syllabus for Theory Courses</b></h2> <hr />

            <Form.Group>
              <Form.Label className="text-white">School</Form.Label>
              <Form.Control placeholder="School" id="school" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Program</Form.Label>
              <Form.Control placeholder="Program" id="program"></Form.Control>
            </Form.Group>

            <Form.Group controlId="Program">
              <Form.Label className="text-white">Branch</Form.Label>
              <Form.Control placeholder="Branch" id="branch" />
            </Form.Group>

            <Form.Group controlId="Program">
              <Form.Label className="text-white">Course Code</Form.Label>
              <Form.Control placeholder="Code" id="course_code" />
            </Form.Group>


            <Form.Group controlId="Program">
              <Form.Label className="text-white">Course Title</Form.Label>
              <Form.Control placeholder="Title" id="course_title" />
            </Form.Group>


            <Form.Group controlId="Program">
              <Form.Label className="text-white">Credits</Form.Label>
              <Form.Control type="autofill" placeholder="Credits" id="credits" />
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


            <div align="center">
              <Form.Group
              // onChange={this.onPickColor.bind(this)}
              // inputRef={el => this.inputEl = el}
              // componentClass="select" placeholder="select"
              >

                <Form.Label className="text-white" id="courseStatus">Course Status</Form.Label>
                <DropdownButton id="dropdown-basic-button" title="Course Status">
                  <Dropdown.Item href="#/action-1">Core</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Elective</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Open Elective </Dropdown.Item>
                </DropdownButton>

              </Form.Group>
            </div>

            <FormGroup>
              <Form.Label className="text-white">Course Objective</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" />
            </FormGroup>

            <Form.Group controlId="Program">
              <Form.Label className="text-white">Course Outcomes</Form.Label>
              <Form.Control as="textarea" type="autofill" placeholder="C01" id="C01" /> <br />
              <Form.Control as="textarea" type="autofill" placeholder="C02" id="C02" /> <br />
              <Form.Control as="textarea" type="autofill" placeholder="C03" id="C03" /> <br />
              <Form.Control as="textarea" type="autofill" placeholder="C04" id="C04" />
            </Form.Group>

            <FormGroup>
              <Form.Label className="text-white">Course Description</Form.Label>
              <Form.Control as="textarea" placeholder="Descrption of Course" aria-label="With textarea" />
            </FormGroup>
            
            
            <FormGroup>
              <Form.Label className="text-white">Outline Syllabus</Form.Label>
              <Form.Control as="textarea" placeholder="Descrption of Course" aria-label="With textarea" />
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
}

export default App;
