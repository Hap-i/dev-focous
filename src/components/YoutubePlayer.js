import React from "react";
import YouTube from "react-youtube";
import { AiFillCloseCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { chnageVideoStatus } from "../redux/youtubeVideoSlice";
function YoutubePlayer() {
  const { showVideo, videoId } = useSelector((state) => state.youtubeVideo);
  const dispatch = useDispatch();
  const opts = {
    height: "auto",
    width: "300",
    playerVars: {
      autoplay: 1,
    },
  };
  function closePlayer() {
    dispatch(chnageVideoStatus(false));
  }
  return showVideo === true ? (
    <div className="absolute bottom-[2%] left-[2%] opacity-1">
      <div
        className=" w-full h-full bg-black/50
    overflow-auto no-scrollbar rounded-2xl">
        <div className="flex justify-end mr-1">
          <button onClick={closePlayer}>
            <AiFillCloseCircle size={25} color="white"></AiFillCloseCircle>
          </button>
        </div>
        <div className="flex justify-center">
          <YouTube videoId={videoId} opts={opts}></YouTube>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default YoutubePlayer;
