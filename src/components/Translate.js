import React, { Component } from "react";
import dogeify from "dogeify-js";
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const synth = window.speechSynthesis;

class Translate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      input: ""
    };
  }

  startRecording = () => {
    this.recognition = new SpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = true;
    this.recognition.lang = "en-US";
    this.recognition.maxAlternatives = 1;
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

  speak = input => {
    const utterThis = new SpeechSynthesisUtterance(input);
    synth.speak(utterThis);
  };

  handleChange = e => {
    this.setState({ input: e.target.value });
  };

  componentDidMount() {
    synth.cancel();
  }

  render() {
    const { input, recording } = this.state;
    const doge = this.state.input.length > 2 ? dogeify(this.state.input) : "";
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
              value={input}
              placeholder={recording ? "Speak now" : "Enter text"}
            />
            <div className="footer">
              <span className="tooltip" onClick={this.toggleRecording}>
                <i
                  style={{
                    color: recording ? "#FF3424" : "grey"
                  }}
                  className="fas fa-microphone"
                />
                <span className="tooltiptext">
                  Turn {recording ? "off" : "on"} voice input
                </span>
              </span>
              <span className="char-count">{input.length}/5000</span>
            </div>
          </div>
          <div className="display-translation column">
            {doge}
            <div className="bottom">
              {doge && (
                <span className="tooltip" onClick={() => this.speak(doge)}>
                  <i className="fas fa-volume-up" />
                  <span className="tooltiptext">Listen</span>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Translate;
