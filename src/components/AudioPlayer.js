import React, { useRef } from "react";

function AudioPlayer() {
  const audioRef = useRef();
  function playpause() {
    audioRef.current.play();
  }
  return (
    <div className="relative z-10">
      {/* <div className="relative z-10 text-white">AudioPlayer</div>; */}
      <audio src="assets/bg-audio/lofi1.mp3" ref={audioRef}></audio>
      <button className="bg-black/30 text-white" onClick={playpause}>
        Play
      </button>
    </div>
  );
}

export default AudioPlayer;
