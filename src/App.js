import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import Translate from "./Translate";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Translate />
      </div>
    );
  }
}

export default App;
