import React, { Component } from "react";
import { BrowserRouter as Router, Routes as Switch, Route, Link } from "react-router-dom";

import Home from "./component/Home";

import Voting from "./component/Voting/Voting";
import Results from "./component/Results/Results";
import Registration from "./component/Registration/Registration";

import AddCandidate from "./component/Admin/AddCandidate/AddCandidate";
import Verification from "./component/Admin/Verification/Verification";
import test from "./component/test";
// import StartEnd from "./component/Admin/StartEnd/StartEnd";

import Footer from "./component/Footer/Footer";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/AddCandidate" element={<AddCandidate/>} />
            <Route path="/Voting" element={<Voting/>} />
            <Route path="/Results" element={<Results/>} />
            <Route path="/Registration" element={<Registration/>} />
            <Route path="/Verification" element={<Verification/>} />
            <Route path="/test" element={<test/>} />
            <Route path="/" element={<Home/>} />
            <Route path="*" element={<NotFound/>} />
          </Switch>
        </Router>
        <Footer />
      </div>
    );
  }
}
class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404 NOT FOUND!</h1>
        <center>
          <p>
            The page your are looking for doesn't exist.
            <br />
            Go to{" "}
            <Link
              to="/"
              style={{ color: "black", textDecoration: "underline" }}
            >
              Home
            </Link>
          </p>
        </center>
      </>
    );
  }
}
