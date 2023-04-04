import React from "react";

function BgVideoSelectBox() {
  return (
    <div className="absolute top-[20%] right-[8%]">
      <div
        className="space-y-4 w-[350px] h-[500px] bg-black/50
      overflow-auto no-scrollbar px-4 py-5 rounded-2xl">
        <div className="text-white font-medium text-2xl pl-2">Scenes</div>
        <div className="w-auto bg-cover bg-center">
          <img
            src="assets/bg-thumbnail/thumbnail1.png"
            className="rounded-md cursor-pointer"
            alt=""
          />
        </div>
        <div className="w-auto bg-cover bg-center">
          <img
            src="assets/bg-thumbnail/thumbnail2.png"
            className="rounded-md cursor-pointer"
            alt=""
          />
        </div>
        <div className="w-auto bg-cover bg-center">
          <img
            src="assets/bg-thumbnail/thumbnail3.png"
            className="rounded-md cursor-pointer"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default BgVideoSelectBox;
