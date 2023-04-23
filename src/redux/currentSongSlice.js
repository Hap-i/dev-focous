import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSong: null,
};

export const currentSongSlice = createSlice({
  name: "currentSong",
  initialState,
  reducers: {
    changecurrentSong: (state, action) => {
      state.currentSong = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changecurrentSong } = currentSongSlice.actions;

export default currentSongSlice.reducer;
