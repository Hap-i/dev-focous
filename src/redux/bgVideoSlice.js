import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  bgVideoIndex: 0,
};

export const bgVideoSlice = createSlice({
  name: "bgVideo",
  initialState,
  reducers: {
    changeBgVideo: (state, action) => {
      state.bgVideoIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBgVideo } = bgVideoSlice.actions;

export default bgVideoSlice.reducer;
