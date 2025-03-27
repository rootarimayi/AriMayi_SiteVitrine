import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// URL endpoint in Swagger === http://admin.arimayi.io/api/v1/arimayi-admin/website/resume-upload/

// URL de base de l'API - à remplacer par votre URL réelle
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'https://admin.arimayi.io/api/v1';

// Instance axios
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// GET CV with ID
export const fetchResumeById = createAsyncThunk(
  'resume/fetchById',
  async (resumeId, { rejectWithValue }) => {
    try {
      const response = await api.get(`/arimayi-admin/website/resume-upload/${resumeId}/`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la récupération du CV');
    }
  }
);

// GET
export const fetchAllResumes = createAsyncThunk(
  'resume/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/arimayi-admin/website/resume-upload/');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la récupération des CVs');
    }
  }
);

// CREATE
export const createResume = createAsyncThunk(
  'resume/create',
  async (resumeData, { rejectWithValue }) => {
    try {
      const formattedData = formatResumeData(resumeData);
      const response = await api.post('/arimayi-admin/website/resume-upload/', formattedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la création du CV');
    }
  }
);

// PATCH
export const updateResume = createAsyncThunk(
  'resume/update',
  async ({ resumeId, resumeData }, { rejectWithValue }) => {
    try {
      const formattedData = formatResumeData(resumeData);
      const response = await api.put(`/arimayi-admin/website/resume-upload/${resumeId}/`, formattedData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la mise à jour du CV');
    }
  }
);

// DELETE
export const deleteResume = createAsyncThunk(
  'resume/delete',
  async (resumeId, { rejectWithValue }) => {
    try {
      await api.delete(`/arimayi-admin/website/resume-upload/${resumeId}/`);
      return resumeId;
    } catch (error) {
      return rejectWithValue(error.response?.data || 'Erreur lors de la suppression du CV');
    }
  }
);

const formatResumeData = (data) => {
  return {
    last_name: data.last_name,
    first_name: data.first_name,
    email: data.email,
    description: data.description || null,
    experiences: data.experiences || null,
    school_career: data.school_career || null,
    hobbies: data.hobbies || null,
    locations: data.locations || null,
    skills: data.skills || null,
    contract_type: data.contract_type || null,
  };
};

export default {
  fetchResumeById,
  fetchAllResumes,
  createResume,
  updateResume,
  deleteResume,
};