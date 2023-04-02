import React, { useRef, useState } from "react";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineStepForward,
  AiFillStepBackward,
} from "react-icons/ai";

function AudioPlayer() {
  const [isPlaying, setisPlaying] = useState(false);
  const audioRef = useRef();
  function playpause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setisPlaying(!isPlaying);
  }
  return (
    <div className="relative z-10">
      {/* <div className="relative z-10 text-white">AudioPlayer</div>; */}
      <audio
        src="assets/bg-audio/lofi1.mp3"
        preload="none"
        ref={audioRef}></audio>
      <div className="bg-black/40 w-fit space-x-5 px-2 py-1 rounded-md flex">
        <button>
          <AiFillStepBackward size={25} color="white"></AiFillStepBackward>
        </button>
        <button onClick={playpause}>
          {isPlaying ? (
            <AiFillPauseCircle size={25} color="white"></AiFillPauseCircle>
          ) : (
            <AiFillPlayCircle size={25} color="white"></AiFillPlayCircle>
          )}
        </button>
        <button>
          <AiOutlineStepForward size={25} color="white"></AiOutlineStepForward>
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
