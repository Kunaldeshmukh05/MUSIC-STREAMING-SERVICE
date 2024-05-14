import React from "react";
import "./audio.css"; // Import the CSS file

class AudioPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef = React.createRef();
    this.state = {
      audioLoaded: false,
    };
  }

  handlePlay = () => {
    const audio = this.audioRef.current;
    if (!this.state.audioLoaded) {
      audio.load();
      audio.oncanplaythrough = () => {
        this.setState({ audioLoaded: true }, () => {
          audio.play().catch((error) => {
            console.error("Error playing audio:", error);
          });
        });
      };
    } else {
      audio.play().catch((error) => {
        console.error("Error playing audio:", error);
      });
    }
  };

  render() {
    return (
      <div className="audio-player-container">
        <audio ref={this.audioRef} className="audio-player">
          <source src="./audio/01. Kabhi Jo Baadal Barse.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
        <div className="audio-controls">
          <button onClick={this.handlePlay}>Play Audio</button>
        </div>
      </div>
    );
  }
}

export default AudioPlayer;













