import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Translate from "./components/Translate";

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Translate />
      </div>
    );
  }
}

export default App;
