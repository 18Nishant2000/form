import React from 'react';
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import {
    Link
} from "react-router-dom";
import firebase from '../firbase.js'
import form from './Form.jsx'

export default class Login extends React.Component {
    retrieve = e => {
        e.preventDefault();
        var in_id = document.getElementById("ID").value;
        var in_pass = document.getElementById("p").value;
        //window.alert(in_id+" "+in_pass);
        
        const db = firebase.firestore();
        db.collection("users").doc("auth").get().then((v) => {
            var id = v.data("id");
            var pass = v.data("pass");
            if (in_id === id && in_pass === pass) {
                window.alert(in_id+" "+in_pass);
                //window.alert(in_pass);
                //window.open(form);
            }
            else {
                window.alert("UNSUCCESSFULL");
            }
        }).catch((c) => {
            console.log(c);
        })
    }
    render() {
        return (
            <div className="container">
                <div className="mt-4 mb-4 mr-2 ml-2">
                    <Form onSubmit={this.retrieve}>
                        <h2 className="text-white"><b>Login &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</b></h2> <hr />

                        <Form.Group >
                            <Form.Label className="text-white">Username</Form.Label>
                            <Form.Control placeholder="ID" id="ID" />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label className="text-white">Password</Form.Label>
                            <Form.Control type="text" placeholder="Password" id="p" />
                        </Form.Group>
                        <div align="center">
                            <Button variant="primary" type="submit"/>
                        </div>
                    </Form>
                </div>
            </div >
        );
    }
}