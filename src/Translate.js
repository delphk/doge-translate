import React, { Component } from "react";
import dogeify from "dogeify-js";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      input: ""
    };
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";
    this.recognition.maxAlternatives = 1;
  }

  startRecording = () => {
    this.setState({ recording: true });
    this.recognition.start();
    this.recognition.onresult = event => {
      const result = event.results[0][0].transcript;
      this.setState({ input: result });
    };
  };

  stopRecording = () => {
    this.setState({ recording: false });
    this.recognition.stop();
  };

  toggleRecording = () => {
    this.state.recording ? this.stopRecording() : this.startRecording();
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
              maxLength="5000"
              autoFocus
              onChange={this.handleChange}
              value={this.state.input}
              placeholder={this.state.recording ? "Speak now" : "Enter text"}
            />
            <div className="footer">
              <span
                className="tooltip"
                onClick={this.toggleRecording}
                style={{
                  fontSize: "20px",
                  color: this.state.recording ? "#FF3424" : "grey"
                }}
              >
                <i className="fas fa-microphone" />
                <span className="tooltiptext">
                  Turn {this.state.recording ? "off" : "on"} voice input
                </span>
              </span>
            </div>
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
