import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resumeSlice";

// reducers

export const makeStore = () => {
  return configureStore({
    reducer: {
      resume: resumeSlice,
    },
  });
};
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];