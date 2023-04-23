import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  audioTheme: "lofi",
};

export const audioThemeSlice = createSlice({
  name: "audioTheme",
  initialState,
  reducers: {
    changeAudioTheme: (state, action) => {
      state.audioTheme = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeAudioTheme } = audioThemeSlice.actions;

export default audioThemeSlice.reducer;
