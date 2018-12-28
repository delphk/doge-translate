import React, { Component } from "react";

class Translate extends Component {
  render() {
    return (
      <div className="container">
        <div className="translate-container">
          <textarea
            className="translate-input column"
            name="original"
            id="original"
            cols="30"
            rows="10"
          />
          <div className="display-translation column"> test</div>
        </div>
      </div>
    );
  }
}

export default Translate;
