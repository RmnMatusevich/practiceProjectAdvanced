import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./components/Navigation";
import Projects from "./components/Projects";

ReactDOM.render(<Navigation />, document.getElementById("header"));
ReactDOM.render(<Projects />, document.getElementById("main"));
