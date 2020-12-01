import React from "react";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component Import
import Header from "./Components/Header";
import FooterComp from "./Components/Footer";
import Home from "./Routes/Home";
import About from "./Routes/About";

/*
Function App - Renders App Component to the DOM
*/
export default function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Header />
        {/* A <Switch> looks through its children <Router>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/pricing"></Route>
          <Route path="/signup"></Route>
          <Route path="/signin"></Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <FooterComp />
    </Router>
  );
}
