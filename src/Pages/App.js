import React from 'react';
import Button from "react-bootstrap/Button"
import "../Glass.css"
import Form from "react-bootstrap/Form"
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'
import FormGroup from 'react-bootstrap/FormGroup';
import firebase from '../firbase.js'

class App extends React.Component {

  avg = () => {
    var avg_co1 = (parseInt(document.getElementById("CO1_1").value) +
      parseInt(document.getElementById("CO2_1").value) +
      parseInt(document.getElementById("CO3_1").value) +
      parseInt(document.getElementById("CO4_1").value) +
      parseInt(document.getElementById("CO5_1").value) +
      parseInt(document.getElementById("CO6_1").value)) / 6;
    document.getElementById("id_avg_co1").innerHTML = avg_co1;

    var avg_co2 = (parseInt(document.getElementById("CO1_2").value) +
      parseInt(document.getElementById("CO2_2").value) +
      parseInt(document.getElementById("CO3_2").value) +
      parseInt(document.getElementById("CO4_2").value) +
      parseInt(document.getElementById("CO5_2").value) +
      parseInt(document.getElementById("CO6_2").value)) / 6;
    document.getElementById("id_avg_co2").innerHTML = avg_co2;

    var avg_co3 = (parseInt(document.getElementById("CO1_3").value) +
      parseInt(document.getElementById("CO2_3").value) +
      parseInt(document.getElementById("CO3_3").value) +
      parseInt(document.getElementById("CO4_3").value) +
      parseInt(document.getElementById("CO5_3").value) +
      parseInt(document.getElementById("CO6_3").value)) / 6;
    document.getElementById("id_avg_co3").innerHTML = avg_co3;

    var avg_co4 = (parseInt(document.getElementById("CO1_4").value) +
      parseInt(document.getElementById("CO2_4").value) +
      parseInt(document.getElementById("CO3_4").value) +
      parseInt(document.getElementById("CO4_4").value) +
      parseInt(document.getElementById("CO5_4").value) +
      parseInt(document.getElementById("CO6_4").value)) / 6;
    document.getElementById("id_avg_co4").innerHTML = avg_co4;

    var avg_co5 = (parseInt(document.getElementById("CO1_5").value) +
      parseInt(document.getElementById("CO2_5").value) +
      parseInt(document.getElementById("CO3_5").value) +
      parseInt(document.getElementById("CO4_5").value) +
      parseInt(document.getElementById("CO5_5").value) +
      parseInt(document.getElementById("CO6_5").value)) / 6;
    document.getElementById("id_avg_co5").innerHTML = avg_co5;

    var avg_co6 = (parseInt(document.getElementById("CO1_6").value) +
      parseInt(document.getElementById("CO2_6").value) +
      parseInt(document.getElementById("CO3_6").value) +
      parseInt(document.getElementById("CO4_6").value) +
      parseInt(document.getElementById("CO5_6").value) +
      parseInt(document.getElementById("CO6_6").value)) / 6;
    document.getElementById("id_avg_co6").innerHTML = avg_co6;

    var avg_co7 = (parseInt(document.getElementById("CO1_7").value) +
      parseInt(document.getElementById("CO2_7").value) +
      parseInt(document.getElementById("CO3_7").value) +
      parseInt(document.getElementById("CO4_7").value) +
      parseInt(document.getElementById("CO5_7").value) +
      parseInt(document.getElementById("CO6_7").value)) / 6;
    document.getElementById("id_avg_co7").innerHTML = avg_co7;

    var avg_co8 = (parseInt(document.getElementById("CO1_8").value) +
      parseInt(document.getElementById("CO2_8").value) +
      parseInt(document.getElementById("CO3_8").value) +
      parseInt(document.getElementById("CO4_8").value) +
      parseInt(document.getElementById("CO5_8").value) +
      parseInt(document.getElementById("CO6_8").value)) / 6;
    document.getElementById("id_avg_co8").innerHTML = avg_co8;

    var avg_co9 = (parseInt(document.getElementById("CO1_9").value) +
      parseInt(document.getElementById("CO2_9").value) +
      parseInt(document.getElementById("CO3_9").value) +
      parseInt(document.getElementById("CO4_9").value) +
      parseInt(document.getElementById("CO5_9").value) +
      parseInt(document.getElementById("CO6_9").value)) / 6;
    document.getElementById("id_avg_co9").innerHTML = avg_co9;

    var avg_co10 = (parseInt(document.getElementById("CO1_10").value) +
      parseInt(document.getElementById("CO2_10").value) +
      parseInt(document.getElementById("CO3_10").value) +
      parseInt(document.getElementById("CO4_10").value) +
      parseInt(document.getElementById("CO5_10").value) +
      parseInt(document.getElementById("CO6_10").value)) / 6;
    document.getElementById("id_avg_co10").innerHTML = avg_co10;

    var avg_co11 = (parseInt(document.getElementById("CO1_11").value) +
      parseInt(document.getElementById("CO2_11").value) +
      parseInt(document.getElementById("CO3_11").value) +
      parseInt(document.getElementById("CO4_11").value) +
      parseInt(document.getElementById("CO5_11").value) +
      parseInt(document.getElementById("CO6_11").value)) / 6;
    document.getElementById("id_avg_co11").innerHTML = avg_co11;

    var avg_co12 = (parseInt(document.getElementById("CO1_12").value) +
      parseInt(document.getElementById("CO2_12").value) +
      parseInt(document.getElementById("CO3_12").value) +
      parseInt(document.getElementById("CO4_12").value) +
      parseInt(document.getElementById("CO5_12").value) +
      parseInt(document.getElementById("CO6_12").value)) / 6;
    document.getElementById("id_avg_co12").innerHTML = avg_co12;

    var avg_co13 = (parseInt(document.getElementById("CO1_13").value) +
      parseInt(document.getElementById("CO2_13").value) +
      parseInt(document.getElementById("CO3_13").value) +
      parseInt(document.getElementById("CO4_13").value) +
      parseInt(document.getElementById("CO5_13").value) +
      parseInt(document.getElementById("CO6_13").value)) / 6;
    document.getElementById("id_avg_co13").innerHTML = avg_co13;

    var avg_co14 = (parseInt(document.getElementById("CO1_14").value) +
      parseInt(document.getElementById("CO2_14").value) +
      parseInt(document.getElementById("CO3_14").value) +
      parseInt(document.getElementById("CO4_14").value) +
      parseInt(document.getElementById("CO5_14").value) +
      parseInt(document.getElementById("CO6_14").value)) / 6;
    document.getElementById("id_avg_co14").innerHTML = avg_co14;

    var avg_co15 = (parseInt(document.getElementById("CO1_15").value) +
      parseInt(document.getElementById("CO2_15").value) +
      parseInt(document.getElementById("CO3_15").value) +
      parseInt(document.getElementById("CO4_15").value) +
      parseInt(document.getElementById("CO5_15").value) +
      parseInt(document.getElementById("CO6_15").value)) / 6;
    document.getElementById("id_avg_co15").innerHTML = avg_co15;

    var avg_co16 = (parseInt(document.getElementById("CO1_16").value) +
      parseInt(document.getElementById("CO2_16").value) +
      parseInt(document.getElementById("CO3_16").value) +
      parseInt(document.getElementById("CO4_16").value) +
      parseInt(document.getElementById("CO5_16").value) +
      parseInt(document.getElementById("CO6_16").value)) / 6;
    document.getElementById("id_avg_co16").innerHTML = avg_co16;
  }
  addUser = e => {
    e.preventDefault();
    const db = firebase.firestore();
    db.settings({
      timestampsInSnapshots: true
    });
    db.collection("users").add({
      school: document.getElementById("school").value,
      program: document.getElementById("program").value,
      branch: document.getElementById("branch").value,
      course_code: document.getElementById("course_code").value,
      course_title: document.getElementById("course_title").value,
      credits: document.getElementById("credits").value,
      L: document.getElementById("L").value,
      T: document.getElementById("T").value,
      P: document.getElementById("P").value,
      course_status: document.getElementById("course_status").value,
      objectives: document.getElementById("objectives").value,
      C01: document.getElementById("C01").value,
      C02: document.getElementById("C02").value,
      C03: document.getElementById("C03").value,
      C04: document.getElementById("C04").value,
      desc_course: document.getElementById("desc_course").value,
      Unit1: document.getElementById("Unit1").value,
      Unit2: document.getElementById("Unit2").value,
      Unit3: document.getElementById("Unit3").value,
      Unit4: document.getElementById("Unit4").value,
      CO1_TEMP_1: document.getElementById("CO1_1").value,
      CO1_TEMP_2: document.getElementById("CO1_2").value,
      CO1_TEMP_3: document.getElementById("CO1_3").value,
      CO1_TEMP_4: document.getElementById("CO1_4").value,
      CO1_TEMP_5: document.getElementById("CO1_5").value,
      CO1_TEMP_6: document.getElementById("CO1_6").value,
      CO1_TEMP_7: document.getElementById("CO1_7").value,
      CO1_TEMP_8: document.getElementById("CO1_8").value,
      CO1_TEMP_9: document.getElementById("CO1_9").value,
      CO1_TEMP_10: document.getElementById("CO1_10").value,
      CO1_TEMP_11: document.getElementById("CO1_11").value,
      CO1_TEMP_12: document.getElementById("CO1_12").value,
      CO1_TEMP_13: document.getElementById("CO1_13").value,
      CO1_TEMP_14: document.getElementById("CO1_14").value,
      CO1_TEMP_15: document.getElementById("CO1_15").value,
      CO1_TEMP_16: document.getElementById("CO1_16").value,

      CO2_TEMP_1: document.getElementById("CO2_1").value,
      CO2_TEMP_2: document.getElementById("CO2_2").value,
      CO2_TEMP_3: document.getElementById("CO2_3").value,
      CO2_TEMP_4: document.getElementById("CO2_4").value,
      CO2_TEMP_5: document.getElementById("CO2_5").value,
      CO2_TEMP_6: document.getElementById("CO2_6").value,
      CO2_TEMP_7: document.getElementById("CO2_7").value,
      CO2_TEMP_8: document.getElementById("CO2_8").value,
      CO2_TEMP_9: document.getElementById("CO2_9").value,
      CO2_TEMP_10: document.getElementById("CO2_10").value,
      CO2_TEMP_11: document.getElementById("CO2_11").value,
      CO2_TEMP_12: document.getElementById("CO2_12").value,
      CO2_TEMP_13: document.getElementById("CO2_13").value,
      CO2_TEMP_14: document.getElementById("CO2_14").value,
      CO2_TEMP_15: document.getElementById("CO2_15").value,
      CO2_TEMP_16: document.getElementById("CO2_16").value,

      CO3_TEMP_1: document.getElementById("CO3_1").value,
      CO3_TEMP_2: document.getElementById("CO3_2").value,
      CO3_TEMP_3: document.getElementById("CO3_3").value,
      CO3_TEMP_4: document.getElementById("CO3_4").value,
      CO3_TEMP_5: document.getElementById("CO3_5").value,
      CO3_TEMP_6: document.getElementById("CO3_6").value,
      CO3_TEMP_7: document.getElementById("CO3_7").value,
      CO3_TEMP_8: document.getElementById("CO3_8").value,
      CO3_TEMP_9: document.getElementById("CO3_9").value,
      CO3_TEMP_10: document.getElementById("CO3_10").value,
      CO3_TEMP_11: document.getElementById("CO3_11").value,
      CO3_TEMP_12: document.getElementById("CO3_12").value,
      CO3_TEMP_13: document.getElementById("CO3_13").value,
      CO3_TEMP_14: document.getElementById("CO3_14").value,
      CO3_TEMP_15: document.getElementById("CO3_15").value,
      CO3_TEMP_16: document.getElementById("CO3_16").value,

      CO4_TEMP_1: document.getElementById("CO4_1").value,
      CO4_TEMP_2: document.getElementById("CO4_2").value,
      CO4_TEMP_3: document.getElementById("CO4_3").value,
      CO4_TEMP_4: document.getElementById("CO4_4").value,
      CO4_TEMP_5: document.getElementById("CO4_5").value,
      CO4_TEMP_6: document.getElementById("CO4_6").value,
      CO4_TEMP_7: document.getElementById("CO4_7").value,
      CO4_TEMP_8: document.getElementById("CO4_8").value,
      CO4_TEMP_9: document.getElementById("CO4_9").value,
      CO4_TEMP_10: document.getElementById("CO4_10").value,
      CO4_TEMP_11: document.getElementById("CO4_11").value,
      CO4_TEMP_12: document.getElementById("CO4_12").value,
      CO4_TEMP_13: document.getElementById("CO4_13").value,
      CO4_TEMP_14: document.getElementById("CO4_14").value,
      CO4_TEMP_15: document.getElementById("CO4_15").value,
      CO4_TEMP_16: document.getElementById("CO4_16").value,

      CO5_TEMP_1: document.getElementById("CO5_1").value,
      CO5_TEMP_2: document.getElementById("CO5_2").value,
      CO5_TEMP_3: document.getElementById("CO5_3").value,
      CO5_TEMP_4: document.getElementById("CO5_4").value,
      CO5_TEMP_5: document.getElementById("CO5_5").value,
      CO5_TEMP_6: document.getElementById("CO5_6").value,
      CO5_TEMP_7: document.getElementById("CO5_7").value,
      CO5_TEMP_8: document.getElementById("CO5_8").value,
      CO5_TEMP_9: document.getElementById("CO5_9").value,
      CO5_TEMP_10: document.getElementById("CO5_10").value,
      CO5_TEMP_11: document.getElementById("CO5_11").value,
      CO5_TEMP_12: document.getElementById("CO5_12").value,
      CO5_TEMP_13: document.getElementById("CO5_13").value,
      CO5_TEMP_14: document.getElementById("CO5_14").value,
      CO5_TEMP_15: document.getElementById("CO5_15").value,
      CO5_TEMP_16: document.getElementById("CO5_16").value,

      CO6_TEMP_1: document.getElementById("CO6_1").value,
      CO6_TEMP_2: document.getElementById("CO6_2").value,
      CO6_TEMP_3: document.getElementById("CO6_3").value,
      CO6_TEMP_4: document.getElementById("CO6_4").value,
      CO6_TEMP_5: document.getElementById("CO6_5").value,
      CO6_TEMP_6: document.getElementById("CO6_6").value,
      CO6_TEMP_7: document.getElementById("CO6_7").value,
      CO6_TEMP_8: document.getElementById("CO6_8").value,
      CO6_TEMP_9: document.getElementById("CO6_9").value,
      CO6_TEMP_10: document.getElementById("CO6_10").value,
      CO6_TEMP_11: document.getElementById("CO6_11").value,
      CO6_TEMP_12: document.getElementById("CO6_12").value,
      CO6_TEMP_13: document.getElementById("CO6_13").value,
      CO6_TEMP_14: document.getElementById("CO6_14").value,
      CO6_TEMP_15: document.getElementById("CO6_15").value,
      CO6_TEMP_16: document.getElementById("CO6_16").value,

      avg_co1: document.getElementById("id_avg_co1").innerHTML,
      avg_co2: document.getElementById("id_avg_co2").innerHTML,
      avg_co3: document.getElementById("id_avg_co3").innerHTML,
      avg_co4: document.getElementById("id_avg_co4").innerHTML,
      avg_co5: document.getElementById("id_avg_co5").innerHTML,
      avg_co6: document.getElementById("id_avg_co6").innerHTML,
      avg_co7: document.getElementById("id_avg_co7").innerHTML,
      avg_co8: document.getElementById("id_avg_co8").innerHTML,
      avg_co9: document.getElementById("id_avg_co9").innerHTML,
      avg_co10: document.getElementById("id_avg_co10").innerHTML,
      avg_co11: document.getElementById("id_avg_co11").innerHTML,
      avg_co12: document.getElementById("id_avg_co12").innerHTML,
      avg_co13: document.getElementById("id_avg_co13").innerHTML,
      avg_co14: document.getElementById("id_avg_co14").innerHTML,
      avg_co15: document.getElementById("id_avg_co15").innerHTML,
      avg_co16: document.getElementById("id_avg_co16").innerHTML

    });
  };


  render() {
    return (
      <div className="container">
        <div className="mt-4 mb-4 mr-2 ml-2">
          <Form onSubmit={this.addUser}>
            <h2 className="text-white"><b>Syllabus for Theory Courses</b></h2> <hr />

            <Form.Group>
              <Form.Label className="text-white">School</Form.Label>
              <Form.Control id="school" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Program</Form.Label>
              <Form.Control id="program"></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Branch</Form.Label>
              <Form.Control id="branch" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Course Code</Form.Label>
              <Form.Control id="course_code" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Course Title</Form.Label>
              <Form.Control id="course_title" />
            </Form.Group>

            <Form.Group>
              <Form.Label className="text-white">Credits</Form.Label>
              <Form.Control type="autofill" id="credits" />
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
                  <Form.Control type="number" id="P" placeholder="P" />
                </Col>
              </Row>
            </Form.Group>

            <Form.Group>

              <Form.Label className="text-white" id="courseStatus">Course Status</Form.Label>
              <Form.Control as="select" id="course_status"> title="Course Status">
                <option>Core</option>
                <option>Elective</option>
                <option>Open Elective</option>
              </Form.Control>

            </Form.Group>


            <FormGroup>
              <Form.Label className="text-white">Course Objective</Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" id="objectives" />
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
              <Form.Control as="textarea" aria-label="With textarea" id="desc_course" />
            </FormGroup>


            <FormGroup>
              <Form.Label className="text-white"><h3><b>Outline Syllabus</b> </h3> </Form.Label>
              <Form.Control as="textarea" placeholder="Unit 1" aria-label="With textarea" id="Unit1" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 2" aria-label="With textarea" id="Unit2" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 3" aria-label="With textarea" id="Unit3" />
              <br />
              <Form.Control as="textarea" placeholder="Unit 4" aria-label="With textarea" id="Unit4" />
            </FormGroup>

            <Form.Group controlId="formBasicCheckbox">
              <Row>
                <Col>
                  <Form.Check type="checkbox" label="Jury" className="text-white" id="practical" />
                </Col>
                <Col>
                  <Form.Check type="checkbox" label="Practical" className="text-white" id="jury" />
                </Col>
                <Col>
                  <Form.Check type="checkbox" label="Viva" className="text-white" id="viva" />
                </Col>
              </Row>
            </Form.Group>

            <FormGroup className="text-white" >
              <Form.Label >Weightage Distribution </Form.Label>
              <Row >
                <Col >
                  <Form.Control align="center" className="text-white" plaintext defaultValue="60% - CA" />
                </Col>
                <Col>
                  <Form.Control align="center" className="text-white" plaintext defaultValue="0% -  MTE" />
                </Col>
                <Col>
                  <Form.Control align="center" className="text-white" plaintext defaultValue="40% - ETE" />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white">Textbooks(Reference Books) </Form.Label>
              <Form.Control as="textarea" aria-label="With textarea" />
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white"><h3><b>PO and PSO mapping with level of strength for Course Name xxxx (Course Code yyyy)</b></h3></Form.Label>
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white">CO1</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO1_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO1_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO1_16" />
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white">CO2</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO2_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO2_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO2_16" />
                </Col>
              </Row>
            </FormGroup>


            <FormGroup>
              <Form.Label className="text-white">CO3</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO3_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO3_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO3_16" />
                </Col>
              </Row>
            </FormGroup>


            <FormGroup>
              <Form.Label className="text-white">CO4</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO4_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO4_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO4_16" />
                </Col>
              </Row>
            </FormGroup>


            <FormGroup>
              <Form.Label className="text-white">CO5</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO5_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO5_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO5_16" />
                </Col>
              </Row>
            </FormGroup>


            <FormGroup>
              <Form.Label className="text-white">CO6</Form.Label>
              <Row>
                <Col>
                  <Form.Control type="number" id="CO6_1" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_2" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_3" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_4" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_5" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_6" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_7" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_8" />
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <Form.Control type="number" id="CO6_9" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_10" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_11" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_12" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_13" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_14" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_15" />
                </Col>
                <Col>
                  <Form.Control type="number" id="CO6_16" />
                </Col>
              </Row>
              <br />
              <div align="center" >
                <Button variant="primary" onClick={this.avg}>
                  Calculate Average
                </Button>
              </div>
            </FormGroup>

            <FormGroup>
              <Form.Label className="text-white"><h3><b>Average of non-zeros entry in following table. </b></h3> </Form.Label>
              <Row>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co1" >0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co2">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co3">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co4">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co5">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co6">0</p>
                </Col>

              </Row>
              <br />
              <Row>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co7">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co8">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co9">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co10">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co11">0</p>
                </Col>

                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co12">0</p>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co13">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co14">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co15">0</p>
                </Col>
                <Col>
                  <p align="center" className="text-white" plaintext id="id_avg_co16">0</p>
                </Col>
              </Row>
            </FormGroup>
            <br />
            <div align="center" >
              <Button variant="primary" type="submit">
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