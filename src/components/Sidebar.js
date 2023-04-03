import React from "react";
import { BsFillImageFill } from "react-icons/bs";
import { AiFillControl } from "react-icons/ai";
import { FaStickyNote } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

function Sidebar() {
  return (
    <div className="absolute top-[30%] left-[93%]">
      <div className="flex flex-col space-y-7 bg-black/40 py-6 px-2 rounded-md">
        <button>
          <AiFillControl size={25} color="white"></AiFillControl>
        </button>
        <button>
          <BsFillImageFill size={25} color="white"></BsFillImageFill>
        </button>
        <button>
          <MdTimer size={25} color="white"></MdTimer>
        </button>
        <button>
          <FaStickyNote size={25} color="white"></FaStickyNote>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;