import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
//import * as ReactRouterDom from "react-router-dom";
import { NavbarComponent } from "./Component";
import { Home, Sukses } from "./pages";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" element={<Home exact />} />
            <Route path="/sukses" element={<Sukses exact />} />
          </Routes>
        </main>
      </Router>
    )
  }
}
