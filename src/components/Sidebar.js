import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { AiFillControl, AiFillInfoCircle, AiFillYoutube } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { changeBoxState } from "../redux/sidebarBoxSlice";
import { chnageVideoStatus } from "../redux/youtubeVideoSlice";

function Sidebar() {
  const dispatch = useDispatch();
  const { showBox } = useSelector((state) => state.sideBarBox);

  function showHideBox(type) {
    dispatch(changeBoxState(type));
    if (type === "youtube" && showBox !== "youtube")
      dispatch(chnageVideoStatus(true));
  }
  return (
    <div className="absolute top-[30%] right-[4%]">
      <div className="flex flex-col space-y-7 bg-black/40 py-4 px-2 rounded-md">
        <button onClick={() => showHideBox("audioConfig")}>
          <AiFillControl size={25} color="white"></AiFillControl>
        </button>
        <button onClick={() => showHideBox("scene")}>
          <BsFillImageFill size={25} color="white"></BsFillImageFill>
        </button>
        <button onClick={() => showHideBox("youtube")}>
          <AiFillYoutube size={25} color="white"></AiFillYoutube>
        </button>
        <button onClick={() => showHideBox("about")}>
          <AiFillInfoCircle size={25} color="white"></AiFillInfoCircle>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
