"use client";
import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";

// Création du store
const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

export default store;