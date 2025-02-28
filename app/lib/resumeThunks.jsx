import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getExperiences = createAsyncThunk(
  "resume/getExperiences",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/experiences");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch experiences");
    }
  }
);

export const getEducation = createAsyncThunk(
  "resume/getEducation",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/education");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch education");
    }
  }
);

export const getSkills = createAsyncThunk(
  "resume/getSkills",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/skills");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch skills");
    }
  }
);

export const getHobbies = createAsyncThunk(
  "resume/getHobbies",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/api/hobbies");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch hobbies");
    }
  }
);

export const postExperience = createAsyncThunk(
  "resume/postExperience",
  async (experience, thunkAPI) => {
    try {
      const response = await axios.post("/api/experiences", experience);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add experience");
    }
  }
);

export const postEducation = createAsyncThunk(
  "resume/postEducation",
  async (education, thunkAPI) => {
    try {
      const response = await axios.post("/api/education", { education });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add education");
    }
  }
);

export const postHobby = createAsyncThunk(
  "resume/postHobby",
  async (hobby, thunkAPI) => {
    try {
      const response = await axios.post("/api/hobbies", { hobby });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add hobby");
    }
  }
);

export const postSkills = createAsyncThunk(
  "resume/postSkills",
  async (skill, thunkAPI) => {
    try {
      const response = await axios.post("/api/skills", { skill });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to add skill");
    }
  }
);

export const deleteExperience = createAsyncThunk(
  "resume/deleteExperience",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/experiences/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete experience");
    }
  }
);

export const deleteEducation = createAsyncThunk(
  "resume/deleteEducation",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/education/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete education");
    }
  }
);

export const deleteHobby = createAsyncThunk(
  "resume/deleteHobby",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/hobbies/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete hobby");
    }
  }
);

export const removeSkill = createAsyncThunk(
  "resume/removeSkill",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/api/skills/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to delete skill");
    }
  }
);