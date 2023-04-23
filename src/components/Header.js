import React from "react";
import AudioPlayer from "./AudioPlayer";
import MuteAll from "./MuteAll";
import CurrentTime from "./CurrentTime";
import RainDrop from "./RainDrop";
import BollywoodToggle from "./BollywoodToggle";

function Header() {
  return (
    <div className="absolute top-0 pt-10 w-full h-full">
      <div className="flex justify-between">
        <div>
          <h2 className="text-white text-5xl font-medium ml-20 bg-black/50 py-1 px-3 rounded-md">
            Dev<span className="text-cyan-400">Focous</span>
          </h2>
        </div>
        <div className="mr-60 flex justify-start space-x-5 items-center">
          <CurrentTime></CurrentTime>
          <AudioPlayer></AudioPlayer>
          <RainDrop></RainDrop>
          <MuteAll></MuteAll>
          <BollywoodToggle></BollywoodToggle>
        </div>
      </div>
    </div>
  );
}
export default Header;
