import React from "react";

// CSS
import "./App.css";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component Import
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home/Home";

/*
Function App - Renders App Component to the DOM
*/
export default function App() {
  return (
    <Router>
      <Header />
      <Footer name="Tyler" />
      {/* A <Switch> looks through its children <Router>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about"></Route>
        <Route path="/pricing"></Route>
        <Route path="/signup"></Route>
        <Route path="/signin"></Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
