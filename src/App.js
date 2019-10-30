import React from 'react';
// eslint-disable-next-line
import Button from "react-bootstrap/Button"
import Frost from "./FrostedGlass.css"
import Form from "react-bootstrap/Form"
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row"
import Col from 'react-bootstrap/Col'

import './App.css';

function App() {
  return (
    <Container>
      <div className="Frost mt-4">
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
</Button>
        </Form>
      </div>
    </Container>

  );
}

export default App;
