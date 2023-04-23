import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeAudioTheme } from "../redux/audioThemeSlice";

function BollywoodToggle() {
  const dispatch = useDispatch();
  const { audioTheme } = useSelector((state) => state.audioTheme);
  function handleToggle() {
    if (audioTheme === "lofi") {
      dispatch(changeAudioTheme("bollywood"));
    } else {
      dispatch(changeAudioTheme("lofi"));
    }
  }
  return (
    <div>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          onChange={handleToggle}
        />
        <div
          className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-blue-300 
        dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full
         peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white
         after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
         after:transition-all dark:border-gray-600 peer-checked:bg-black"></div>
        <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          Bollywood
        </span>
      </label>
    </div>
  );
}

export default BollywoodToggle;
