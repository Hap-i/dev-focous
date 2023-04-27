import { configureStore } from "@reduxjs/toolkit";
import muteAllReducer from "./muteAllSlice";
import bgVideoSlice from "./bgVideoSlice";
import sideBarBoxSlice from "./sidebarBoxSlice";
import audioVolumeSlice from "./audioVolumeSlice";
import audioThemeSlice from "./audioThemeSlice";
import currentSongSlice from "./currentSongSlice";
import youtubeVideoSlice from "./youtubeVideoSlice";

export const store = configureStore({
  reducer: {
    muteAll: muteAllReducer,
    bgVideo: bgVideoSlice,
    sideBarBox: sideBarBoxSlice,
    audioVol: audioVolumeSlice,
    audioTheme: audioThemeSlice,
    currentSong: currentSongSlice,
    youtubeVideo: youtubeVideoSlice,
  },
});
