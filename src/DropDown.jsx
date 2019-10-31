import React, { Component } from 'react';
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";
import FormGroup from "react-bootstrap/FormControl";
import ControlLabel from "react-bootstrap/FormGroup";
import FormControl from "react-bootstrap/FormControl";
class DropDown extends Component {

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
            <div >
                <FormGroup controlId="formControlsSelect">

                    <FormControl
                        onChange={this.onPickColor.bind(this)}
                        inputRef={el => this.inputEl = el}
                        componentClass="select" placeholder="select">

                        <option value="red">Red</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </FormControl>
                </FormGroup>
            </div>
        );
    }
}

export default DropDown;