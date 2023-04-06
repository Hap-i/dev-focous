import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  muteAll: false,
};

export const muteAllSlice = createSlice({
  name: "muteAll",
  initialState,
  reducers: {
    muteUnmute: (state) => {
      state.muteAll = !state.muteAll;
    },
  },
});

// Action creators are generated for each case reducer function
export const { muteUnmute } = muteAllSlice.actions;

export default muteAllSlice.reducer;
