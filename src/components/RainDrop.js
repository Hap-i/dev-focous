import React, { useEffect, useRef, useState } from "react";
import { FaRegCircle, FaRegDotCircle } from "react-icons/fa";
import { useSelector } from "react-redux";

function RainDrop() {
  const rainDropAudioRef = useRef();
  const { muteAll } = useSelector((state) => state.muteAll);
  const [isPlaying, setisPlaying] = useState(false);
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
