"use client";
import { configureStore } from "@reduxjs/toolkit";
import resumeSlice from "./resumeSlice";

// Création du store
const store = configureStore({
  reducer: {
    resume: resumeSlice,
  },
});

export default store;