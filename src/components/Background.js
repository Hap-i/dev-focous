import React from "react";

function Background() {
  return (
    <div className="absolute w-full h-full">
      <video
        src="assets/bg-video/video1.mp4"
        autoPlay
        loop
        muted
        className="w-full h-screen object-cover bg-center"></video>
    </div>
  );
}

export default Background;
