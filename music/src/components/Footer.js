import React, { useState } from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackwardFast } from "@fortawesome/free-solid-svg-icons";
import { faForwardFast } from "@fortawesome/free-solid-svg-icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { faVolumeLow } from "@fortawesome/free-solid-svg-icons";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
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

    onVolumeChange(e.target.value);
  };

  return (
    <div className="playbar">
      <div className="shadow">
        <div className="song-name"></div>
        <div className="song-title">
          <h6>Tum Hi Ho</h6>
          <h6>Arjit Singh</h6>
        </div>
      </div>

      <div className="playbar-div">
        <div className="emote"></div>
        <div className="song-toggle">
          <button onClick={onPrevious}>
            {" "}
            <FontAwesomeIcon
              icon={faBackwardFast}
              style={{ color: "#dbdde1" }}
            />
          </button>
          <button className="play-pause" onClick={onPlayPause}>
            {isPlaying ? (
              <FontAwesomeIcon icon={faPause} style={{ color: "#f1f2f3" }} />
            ) : (
              <FontAwesomeIcon icon={faPlay} style={{ color: "#e9eaed" }} />
            )}
          </button>

          <button className="next-button" onClick={onNext}>
            <FontAwesomeIcon
              icon={faForwardFast}
              style={{ color: "#eaecf0" }}
            />
          </button>
          <div>
            <span>{songName}</span>
          </div>
        </div>

        <div className="volume">
          <button
            onClick={() =>
              handleVolumeChange({ target: { value: parseInt(volume) + 10 } })
            }
          >
            <FontAwesomeIcon icon={faVolumeLow} style={{ color: "#e4e7ec" }} />
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
            <FontAwesomeIcon icon={faVolumeHigh} style={{ color: "#e1e4ea" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Playbar;
