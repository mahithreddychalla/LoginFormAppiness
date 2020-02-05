import React, { Component } from 'react';
import {BrowserRouter as Router,Route} from "react-router-dom";
import LoginForm from "./LoginForm/LoginForm"
import TableData from "./TableData"
class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={LoginForm} />
        <Route path="/Employee" exact component={TableData} /> 
      </Router>
    );
  }
}

export default App;
