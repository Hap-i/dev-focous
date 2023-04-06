import React, { useRef } from "react";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { BsFillCloudLightningRainFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { changeVol } from "../redux/audioVolumeSlice";
function AudioConfiguration() {
  const audioVolRef = useRef();
  const rainVolRef = useRef();
  const dispatch = useDispatch();
  const { showBox } = useSelector((state) => state.sideBarBox);

  function handleVolChange(type) {
    if (type === "music")
      dispatch(changeVol({ type: type, value: audioVolRef.current.value }));
    if (type === "rain")
      dispatch(changeVol({ type: type, value: rainVolRef.current.value }));
  }

  return showBox === "audioConfig" ? (
    <div className="absolute top-[30%] right-[8%] ">
      <div
        className="w-[350px] h-full bg-black/50
    overflow-auto no-scrollbar px-4 py-5 rounded-2xl">
        <div className="text-2xl text-white font-medium pl-2">Volume</div>
        <div className="space-y-4 mt-5">
          <div className="flex space-x-3 items-center">
            <BsFillVolumeUpFill size={25} color="white"></BsFillVolumeUpFill>
            <input
              ref={audioVolRef}
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={() => handleVolChange("music")}
              className="w-full h-2 bg-gray-200 rounded-lg accent-teal-500 cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div className="flex space-x-3 items-center">
            <BsFillCloudLightningRainFill
              size={25}
              color="white"></BsFillCloudLightningRainFill>
            <input
              ref={rainVolRef}
              type="range"
              min="0"
              max="1"
              step="0.1"
              onChange={() => handleVolChange("rain")}
              className="w-full h-2 bg-gray-200 rounded-lg accent-teal-500 cursor-pointer dark:bg-gray-700"
            />
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default AudioConfiguration;
