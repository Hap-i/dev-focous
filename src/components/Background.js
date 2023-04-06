import React from "react";
import { useSelector } from "react-redux";
import { VideoData } from "../utils/VideoList";

function Background() {
  const { bgVideoIndex } = useSelector((state) => state.bgVideo);
  return (
    <div className="w-full h-full">
      <video
        src={`assets/bg-video/${VideoData[bgVideoIndex].fileName}.mp4`}
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-screen object-cover bg-center opacity-90"></video>
    </div>
  );
}

export default Background;
