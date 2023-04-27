import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showVideo: false,
  videoId: "",
};

export const youtubeVideoSlice = createSlice({
  name: "youtubeVideo",
  initialState,
  reducers: {
    chnageVideoStatus: (state, action) => {
      state.showVideo = action.payload;
    },
    changeVideoId: (state, action) => {
      state.videoId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chnageVideoStatus, changeVideoId } = youtubeVideoSlice.actions;

export default youtubeVideoSlice.reducer;
