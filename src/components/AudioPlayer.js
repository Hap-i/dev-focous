/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineStepForward,
  AiFillStepBackward,
} from "react-icons/ai";
import { useSelector } from "react-redux";
import { SongsData } from "../utils/SongList";

function AudioPlayer() {
  const [isPlaying, setisPlaying] = useState(false);
  const [currentSong, setcurrentSong] = useState(null);
  const { muteAll } = useSelector((state) => state.muteAll);
  const audioRef = useRef();
  useEffect(() => {
    setcurrentSong(SongsData[0]);
  }, []);
  useEffect(() => {
    if (isPlaying === true) {
      audioRef.current.play();
    }
  }, [currentSong]);
  function playpause() {
    if (isPlaying) {
      audioRef.current.pause();
    } else if (isPlaying === false && muteAll === false) {
      audioRef.current.play();
    }
    setisPlaying(!isPlaying);
  }
  function playNext() {
    const totalSong = SongsData.length;
    const NextSongNum = (currentSong.index + 1) % totalSong;
    setcurrentSong(SongsData[NextSongNum]);
  }
  function playPrev() {
    const totalSong = SongsData.length;
    const NextSongNum = (currentSong.index - 1) % totalSong;
    setcurrentSong(SongsData[NextSongNum]);
  }
  useEffect(() => {
    console.log("uef");
    if (muteAll) {
      audioRef.current.pause();
    } else if (muteAll === false && isPlaying === true) {
      audioRef.current.play();
    }
  }, [muteAll]);
  return (
    <div className="relative z-10">
      {/* <div className="relative z-10 text-white">AudioPlayer</div>; */}
      <audio
        src={`assets/bg-audio/${currentSong?.fileName}.mp3`}
        preload="none"
        ref={audioRef}
        onEnded={playNext}></audio>
      <div className="bg-black/40 w-fit space-x-5 px-2 py-1 rounded-md flex">
        <button onClick={playPrev}>
          <AiFillStepBackward size={25} color="white"></AiFillStepBackward>
        </button>
        <button onClick={playpause}>
          {isPlaying ? (
            <AiFillPauseCircle size={25} color="white"></AiFillPauseCircle>
          ) : (
            <AiFillPlayCircle size={25} color="white"></AiFillPlayCircle>
          )}
        </button>
        <button onClick={playNext}>
          <AiOutlineStepForward size={25} color="white"></AiOutlineStepForward>
        </button>
      </div>
    </div>
  );
}

export default AudioPlayer;
