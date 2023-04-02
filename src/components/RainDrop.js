import React, { useRef, useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";

function RainDrop() {
  const rainDropAudioRef = useRef();
  const [isPlaying, setisPlaying] = useState(false);
  function playPause() {
    if (isPlaying) {
      rainDropAudioRef.current.pause();
    } else {
      rainDropAudioRef.current.play();
    }
    rainDropAudioRef.current.volume = 0.5;
    setisPlaying(!isPlaying);
  }
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
            <FaRegDotCircle size={25} color="white"></FaRegDotCircle>
          ) : (
            <FaRegCircle size={25} color="white"></FaRegCircle>
          )}
        </button>
      </div>
    </div>
  );
}

export default RainDrop;
