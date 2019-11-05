import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import FormPage from "./Pages/Form";
import LoginPage from "./Pages/Login";
import NotFoundPage from "./Pages/404";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/FormPage" component={FormPage} />
          <Route exact path="/404" component={NotFoundPage} />
          <Redirect to="/404" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
