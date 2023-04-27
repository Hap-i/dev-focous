import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showBox: null,
};

export const sideBarBoxSlice = createSlice({
  name: "sideBarBox",
  initialState,
  reducers: {
    changeBoxState: (state, action) => {
      if (state.showBox === action.payload) {
        state.showBox = null;
      } else {
        state.showBox = action.payload;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeBoxState } = sideBarBoxSlice.actions;

export default sideBarBoxSlice.reducer;
