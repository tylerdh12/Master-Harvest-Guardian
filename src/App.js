import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header";
import FooterComp from "./Components/Footer";
import Home from "./Routes/Home";
import SignIn from "./Routes/SignIn";
import SignUp from "./Routes/SignUp";
import About from "./Routes/About";

export default function App() {
  return (
    <Router>
      <div className="pageWrapper">
        <Header />
        <Switch>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/about">
            <About />
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
