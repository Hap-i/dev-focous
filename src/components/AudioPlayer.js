/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  AiFillPlayCircle,
  AiFillPauseCircle,
  AiOutlineStepForward,
  AiFillStepBackward,
} from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { lofiSongData } from "../utils/lofiSongList";
import { bollywoodSongData } from "../utils/BollywoodSongList";
import { changecurrentSong } from "../redux/currentSongSlice";
// import SongsData from "../utils/SongList";
// import { SongsData } from "../utils/SongList";

function AudioPlayer() {
  const [isPlaying, setisPlaying] = useState(false);
  // const [currentSong, setcurrentSong] = useState(null);
  const { currentSong } = useSelector((state) => state.currentSong);

  const { muteAll } = useSelector((state) => state.muteAll);
  const audioRef = useRef();
  const { musicVol } = useSelector((state) => state.audioVol);
  const { audioTheme } = useSelector((state) => state.audioTheme);
  const [SongsData, setSongsData] = useState(lofiSongData);
  const dispatch = useDispatch();
  useEffect(() => {
    // setcurrentSong(SongsData[Math.floor(Math.random() * SongsData.length + 1)]);
    dispatch(
      changecurrentSong(
        SongsData[Math.floor(Math.random() * SongsData.length + 1)]
      )
    );
  }, []);
  useEffect(() => {
    audioRef.current.pause();
    if (audioTheme === "lofi") setSongsData(lofiSongData);
    else if (audioTheme === "bollywood") setSongsData(bollywoodSongData);
  }, [audioTheme]);
  useEffect(() => {
    dispatch(
      changecurrentSong(
        SongsData[Math.floor(Math.random() * SongsData.length + 1)]
      )
    );
    // setcurrentSong(SongsData[Math.floor(Math.random() * SongsData.length + 1)]);
  }, [SongsData]);

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
    dispatch(changecurrentSong(SongsData[NextSongNum]));
    // setcurrentSong(SongsData[NextSongNum]);
  }
  function playPrev() {
    const totalSong = SongsData.length;
    const NextSongNum = (currentSong.index - 1) % totalSong;
    dispatch(changecurrentSong(SongsData[NextSongNum]));
    // setcurrentSong(SongsData[NextSongNum]);
  }
  useEffect(() => {
    if (muteAll) {
      audioRef.current.pause();
    } else if (muteAll === false && isPlaying === true) {
      audioRef.current.play();
    }
  }, [muteAll]);

  useEffect(() => {
    audioRef.current.volume = musicVol;
  }, [musicVol]);
  return (
    <div className="relative z-10">
      {/* <div className="relative z-10 text-white">AudioPlayer</div>; */}
      <audio
        src={`assets/bg-audio/${audioTheme}/${currentSong?.fileName}`}
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
