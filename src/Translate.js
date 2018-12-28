import React, { Component } from "react";
import dogeify from "dogeify-js";

class Translate extends Component {
  state = {
    input: ""
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  render() {
    return (
      <div className="container">
        <div className="translate-container">
          <div className="column">
            <textarea
              className="translate-input"
              name="original"
              id="original"
              cols="30"
              rows="7"
              autoFocus
              onChange={this.handleChange}
            />
          </div>
          <div className="display-translation column">
            {this.state.input.length > 2 ? dogeify(this.state.input) : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Translate;
