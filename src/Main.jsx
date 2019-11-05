import React, { Component } from 'react';
import Login from "./Login"
import App from "./App"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Main extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" Component={Login} />
                    <Route exact path="/Form" Component={App} />
                </Switch>
            </Router>
        );
    }
}

export default Main;