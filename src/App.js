import React from 'react';
import Button from "react-bootstrap/Button"
import "./Glass.css"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import FormGroup from 'react-bootstrap/FormGroup';

function onsave() {
  var school = document.getElementById("school").value;
  var program = document.getElementById("program").value;
  var branch = document.getElementById("branch").value;
  var course_code = document.getElementById("course_code").value;
  var course_title = document.getElementById("course_title").value;
  var credits = document.getElementById("credits").value;
  var l1 = document.getElementById("L").value;
  var t2 = document.getElementById("T").value;
  var p3 = document.getElementById("p").value;
  var core = document.getElementById("core").value;
  var elective = document.getElementById("elective").value;
  var openelective = document.getElementById("openElective").value;
  window.alert(school + " " + program + " " + branch + " " + course_code + " " + course_title + " " + credits + " " + l1 + " " + t2 + " " + p3 + " " + core + " " + elective + " " + openelective);
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

      <div className = "container">
        <div className="mt-4 mb-4 mr-2 ml-2">
          <Form>
            <h2 className="text-white"><b>Syllabus for Theory Courses</b></h2> <hr />

            <Form.Group >
              <Form.Label className="text-white">School</Form.Label>
              <Form.Control placeholder="School" id="school" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Program</Form.Label>
              <Form.Control placeholder="Program" id="program"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Branch</Form.Label>
              <Form.Control placeholder="Branch" id="branch" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Course Code</Form.Label>
              <Form.Control placeholder="Code" id="course_code" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Course Title</Form.Label>
              <Form.Control placeholder="Title" id="course_title" />
            </Form.Group>


            <Form.Group>
              <Form.Label className="text-white">Credits</Form.Label>
              <Form.Control type="autofill" placeholder="Credits" id="credits" />
            </Form.Group>

            <Form.Group >
              <Form.Label className="text-white">Contact Hours (L-T-P)</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="L" placeholder="L" />
                </Col>
                <Col>
                  <Form.Control type="number" id="T" placeholder="T" />
                </Col>
                <Col>
                  <Form.Control type="number" id="p" placeholder="P" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>

              <Form.Label className="text-white" id="courseStatus">Course Status</Form.Label>
              <Form.Control as="select"> title="Course Status">
                  <option id="core">Core</option>
                <option id="elective">Elective</option>
                <option id="openElective">Open Elective</option>
              </Form.Control>

            </Form.Group>


            <FormGroup>
              <Form.Label className="text-white">Course Objective</Form.Label>
              <Form.Control as="textarea" placeholder="Objectives" aria-label="With textarea" />
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
              <Form.Label className="text-white"><h3><b>Outline Syllabus</b> </h3> </Form.Label>
              <Form.Control as="textarea" placeholder="Unit 1" aria-label="With textarea" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 2" aria-label="With textarea" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 3" aria-label="With textarea" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 4" aria-label="With textarea" />
            </FormGroup>

            <FormGroup className="text-white" >
              <Form.Label >Weightage Distribution </Form.Label>
              <Row >
                <Col >
                  <Form.Control align="center" className="text-white" plaintext readOnly defaultValue="60% - CA" />
                </Col>
                <Col>
                  <Form.Control align="center" className="text-white" plaintext readOnly defaultValue="0% -  MTE" />
                </Col>
                <Col>
                  <Form.Control align="center" className="text-white" plaintext readOnly defaultValue="40% - ETE" />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white">Textbooks </Form.Label>
              <Form.Control as="textarea" placeholder="Reference Books" aria-label="With textarea" />
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white">PO and PSO mapping with level of strength for Course Name xxxx (Course Code yyyy)</Form.Label>
              <Row >
                <Col>
                  <Form.Control type="text" id="1" placeholder="1" />
                </Col>
                <Col>
                  <Form.Control type="text" id="2" placeholder="2" />
                </Col>
                <Col>
                  <Form.Control type="text" id="3" placeholder="3" />
                </Col>
                <Col>
                  <Form.Control type="text" id="4" placeholder="4" />
                </Col>
                <Col>
                  <Form.Control type="text" id="5" placeholder="5" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="6" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="7" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="8" />
                </Col>      
                </Row>
                <br/>
                <Row>
              
                <Col>
                  <Form.Control type="text" id="6" placeholder="10" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="11" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="12" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="13" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="14" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="15" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="16" />
                </Col>
                <Col>
                  <Form.Control type="text" id="6" placeholder="17" />
                </Col>
              </Row>

            </FormGroup>

            <br />
            <div align="center" >
              <Button variant="primary" type="submit" onClick={onsave}>
                Submit
                  </Button>
            </div>
          </Form>
        </div>
      </div >
    );
  }
}

export default App;
