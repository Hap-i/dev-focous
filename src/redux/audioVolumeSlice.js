import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicVol: 0.5,
  rainVol: 0.5,
};

export const audioVolumeSlice = createSlice({
  name: "audioVol",
  initialState,
  reducers: {
    changeVol: (state, action) => {
      if (action.payload.type === "music") {
        state.musicVol = action.payload.value;
      } else if (action.payload.type === "rain") {
        state.rainVol = action.payload.value;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeVol } = audioVolumeSlice.actions;

export default audioVolumeSlice.reducer;
