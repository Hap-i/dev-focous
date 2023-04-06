import React, { useEffect, useRef, useState } from "react";
import {
  BsFillCloudLightningRainFill,
  BsCloudLightningRain,
} from "react-icons/bs";

import { useSelector } from "react-redux";

function RainDrop() {
  const rainDropAudioRef = useRef();
  const { muteAll } = useSelector((state) => state.muteAll);
  const [isPlaying, setisPlaying] = useState(false);
  const { rainVol } = useSelector((state) => state.audioVol);
  function playPause() {
    if (isPlaying) {
      rainDropAudioRef.current.pause();
    } else if (isPlaying === false && muteAll === false) {
      rainDropAudioRef.current.play();
    }
    rainDropAudioRef.current.volume = 0.5;
    setisPlaying(!isPlaying);
  }
  useEffect(() => {
    if (muteAll) {
      rainDropAudioRef.current.pause();
    } else if (muteAll === false && isPlaying === true) {
      rainDropAudioRef.current.play();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [muteAll]);
  useEffect(() => {
    rainDropAudioRef.current.volume = rainVol;
  }, [rainVol]);
  return (
    <div>
      <div>
        <audio
          ref={rainDropAudioRef}
          src="assets/bg-audio/rainLofi.wav"
          loop
          preload="none"></audio>
        <button onClick={playPause} data-te-toggle="tooltip" title="Rain">
          {isPlaying ? (
            <BsFillCloudLightningRainFill
              size={25}
              color="white"></BsFillCloudLightningRainFill>
          ) : (
            <BsCloudLightningRain
              size={25}
              color="white"></BsCloudLightningRain>
          )}
        </button>
      </div>
    </div>
  );
}

export default RainDrop;
