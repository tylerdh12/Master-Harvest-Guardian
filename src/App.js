import React from "react";

// React Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Component Import
import Header from "./Components/Header";
import FooterComp from "./Components/Footer";
import Home from "./Routes/Home";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";

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
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <FooterComp />
    </Router>
  );
}
