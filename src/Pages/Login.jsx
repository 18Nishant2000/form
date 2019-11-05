import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import App from "./App"
import {
    Link
} from "react-router-dom";
export default function Login() {
    return (
        <div className="container">
            <div className="mt-4 mb-4 mr-2 ml-2">
                <Form>
                    <h2 className="text-white"><b>Login &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h2> <hr />

                    <Form.Group >
                        <Form.Label className="text-white">Username</Form.Label>
                        <Form.Control placeholder="ID" id="ID" />
                    </Form.Group>
                    <Form.Group >
                        <Form.Label className="text-white">Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" id="passoword" />
                    </Form.Group>
                    <div align="center" >
                        <Button variant="primary" onClick={""}>
                           
                                <Link to="/App" >Login </Link>
                          
                        </Button>
                    </div>
                </Form>
            </div>
        </div >
    );
}