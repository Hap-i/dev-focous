import React from "react";

function Background() {
  return (
    <div className="w-full h-full">
      <video
        src="assets/bg-video/video1.mp4"
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-screen object-cover bg-center opacity-90"></video>
    </div>
  );
}

export default Background;
