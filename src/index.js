import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import Login from "./Pages/Login"
import NotFoundPage from "./Pages/404"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";

function MainPage() {
    return (
        <div>
        <Router>
        This 
            <Switch>
                <Route path="/"  Component={Login} />
                <Route exact path="/Form" Component={App} />
                <Route exact path = "/404" component = {NotFoundPage}  />
                <Redirect to = "/404" />
            </Switch>
        </Router>
        </div>
    );
}

ReactDOM.render(<MainPage/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
