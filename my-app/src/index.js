import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Projects from "./components/Projects";
import Login from "./components/Login";
const routing = (
  <Router>
    <div>
      <Route path="/" component={Login}></Route>
      <Route path="/projects" component={Projects}></Route>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("main"));
