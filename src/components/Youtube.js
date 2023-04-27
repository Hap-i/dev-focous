import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getYouTubeID from "get-youtube-id";
import { changeVideoId } from "../redux/youtubeVideoSlice";
import { YoutubePlaylist } from "../utils/PlaylistData";

function YoutubeAudio() {
  const { showBox } = useSelector((state) => state.sideBarBox);
  const [currentPlaylist, setcurrentPlaylist] = useState("");
  const dispatch = useDispatch();
  const inpUrlRef = useRef();
  function handleUrl() {
    let videoUrl = inpUrlRef.current.value;
    let videoId = getYouTubeID(videoUrl);
    dispatch(changeVideoId(videoId));
  }
  function updateYTVideo(playlist) {
    setcurrentPlaylist(playlist.name);
    let videoId = getYouTubeID(playlist.url);
    dispatch(changeVideoId(videoId));
  }
  return showBox === "youtube" ? (
    <div className="absolute top-[20%] right-[8%] opacity-1">
      <div
        className="space-y-5 w-[350px] h-full bg-black/50
    overflow-auto no-scrollbar px-4 py-5 rounded-2xl">
        <div className="text-white pl-2 text-xl">Youtube Video URL</div>
        <div className="flex justify-center">
          <input
            ref={inpUrlRef}
            type="text"
            className="w-[300px] h-[35px] px-2 py-1 outline-none bg-black/60 text-white placeholder:text-white/30"
            onChange={handleUrl}
            placeholder="https://www.youtube.com/watch?v=HpDr-01ZeDI"
          />
        </div>
        <div className="mt-5">
          <div className="text-2xl text-white font-medium pl-2 mb-2">
            Featured Playlist
          </div>
          <div
            className="space-y-3 w-full h-[300px] bg-black/50 mt-3
                overflow-auto no-scrollbar px-4 py-5 rounded-2xl text-white">
            {YoutubePlaylist.map((playlist, i) => {
              return (
                <div
                  className={`bg-white/20 py-2 px-2 cursor-pointer  rounded-lg ${
                    currentPlaylist === playlist.name
                      ? "border-green-400 border-l-8"
                      : ""
                  }`}
                  key={i}
                  onClick={() => updateYTVideo(playlist)}>
                  {playlist.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default YoutubeAudio;
