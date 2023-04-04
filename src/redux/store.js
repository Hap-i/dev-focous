import { configureStore } from "@reduxjs/toolkit";
import muteAllReducer from "./muteAllSlice";

export const store = configureStore({
  reducer: {
    muteAll: muteAllReducer,
  },
});
