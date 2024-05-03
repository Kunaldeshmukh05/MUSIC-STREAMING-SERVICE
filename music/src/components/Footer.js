import React, { useState } from "react";
import "./Footer.css";
const Playbar = ({
  songName,
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
  onVolumeChange,
}) => {
  const [volume, setVolume] = useState(50);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
    // Call a function to handle volume change in your application
    onVolumeChange(e.target.value);
  };

  return (
    <div className="playbar">
      <div className="shadow">
        <div className="song-name"></div>
        <div className="song-title">
          <h6>Tum Hi Ho</h6>
          <h8>Arjit Singh</h8>
        </div>
      </div>
      <div className="playbar-div">
        <div className="emote"></div>
        <button onClick={onPrevious}>Previos</button>
        <button onClick={onPlayPause}>
          {isPlaying ? (
            <i className="fas fa-pause"></i>
          ) : (
            <i className="fas fa-play"></i>
          )}
        </button>

        <button onClick={onNext}>Next</button>
        <div>
          <span>{songName}</span>
        </div>
        <div>
          <button
            onClick={() =>
              handleVolumeChange({ target: { value: parseInt(volume) + 10 } })
            }
          >
            Volume Up
          </button>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={handleVolumeChange}
          />
          <button
            onClick={() =>
              handleVolumeChange({ target: { value: parseInt(volume) - 10 } })
            }
          >
            Volume Down
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playbar;
