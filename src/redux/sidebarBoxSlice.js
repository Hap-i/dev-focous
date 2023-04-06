import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBox: null,
};

export const sideBarBoxSlice = createSlice({
  name: "sideBarBox",
  initialState,
  reducers: {
    showBox: (state, action) => {
      if (state.showBox === action.payload) {
        state.showBox = null;
      } else {
        state.showBox = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { showBox } = sideBarBoxSlice.actions;

export default sideBarBoxSlice.reducer;
