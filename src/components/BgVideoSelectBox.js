import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeBgVideo } from "../redux/bgVideoSlice";
import { VideoData } from "../utils/VideoList";

function BgVideoSelectBox() {
  const { showBox } = useSelector((state) => state.sideBarBox);
  const dispatch = useDispatch();
  function updateVideo(index) {
    dispatch(changeBgVideo(index));
  }
  return showBox === "scene" ? (
    <div className="absolute top-[20%] right-[8%]">
      <div
        className="space-y-4 w-[350px] h-[500px] bg-black/50
    overflow-auto no-scrollbar px-4 py-5 rounded-2xl">
        <div className="text-white font-medium text-2xl pl-2">Scenes</div>
        {VideoData.map((data) => {
          return (
            <div
              className="w-auto bg-cover bg-center"
              onClick={() => updateVideo(data.index)}
              key={data.index}>
              <img
                src={`assets/bg-thumbnail/${data.thumbnail}.png`}
                className="rounded-md cursor-pointer"
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  ) : (
    ""
  );
}

export default BgVideoSelectBox;
