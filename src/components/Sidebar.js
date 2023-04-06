import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { AiFillControl, AiFillInfoCircle } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { showBox } from "../redux/sidebarBoxSlice";

function Sidebar() {
  const dispatch = useDispatch();
  function showHideBox(type) {
    dispatch(showBox(type));
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
        <button onClick={() => showHideBox("about")}>
          <AiFillInfoCircle size={25} color="white"></AiFillInfoCircle>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
