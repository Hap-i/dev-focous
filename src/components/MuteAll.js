import React from "react";
import { IoVolumeMuteSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { muteUnmute } from "../redux/muteAllSlice";
function MuteAll() {
  const dispatch = useDispatch();
  const { muteAll } = useSelector((state) => state.muteAll);
  function handleMuteAll() {
    console.log("dispatch");
    dispatch(muteUnmute());
  }
  return (
    <div
      className={`bg-black/40 p-1 flex rounded-md  ${
        muteAll ? "border-2 border-orange-400" : ""
      }`}>
      <button onClick={handleMuteAll}>
        <IoVolumeMuteSharp size={25} color="white"></IoVolumeMuteSharp>
      </button>
    </div>
  );
}

export default MuteAll;
