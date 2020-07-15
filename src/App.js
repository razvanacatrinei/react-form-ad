import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Header from "./shared/header/Header";
import Form from "./components/Form";

function App() {


  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
          <Form />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
