import { createSlice } from '@reduxjs/toolkit';
import { 
  fetchResumeById, 
  fetchAllResumes, 
  createResume, 
  updateResume, 
  deleteResume 
} from './resumeThunks';

const initialState = {
  currentResume: null,
  resumes: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
};

const resumeSlice = createSlice({
  name: 'resume',
  initialState,
  reducers: {
    resetResumeStatus: (state) => {
      state.status = 'idle';
      state.error = null;
    },
    clearCurrentResume: (state) => {
      state.currentResume = null;
    }
  },
  extraReducers: (builder) => {
    builder
      // fetchResumeById
      .addCase(fetchResumeById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchResumeById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentResume = action.payload;
      })
      .addCase(fetchResumeById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Impossible de récupérer le CV';
      })
      
      // fetchAllResumes
      .addCase(fetchAllResumes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllResumes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resumes = action.payload;
      })
      .addCase(fetchAllResumes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Impossible de récupérer les CVs';
      })
      
      // createResume
      .addCase(createResume.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentResume = action.payload;
        state.resumes.push(action.payload);
      })
      .addCase(createResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Impossible de créer le CV';
      })
      
      // updateResume
      .addCase(updateResume.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.currentResume = action.payload;
        const index = state.resumes.findIndex(resume => resume.id === action.payload.id);
        if (index !== -1) {
          state.resumes[index] = action.payload;
        }
      })
      .addCase(updateResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Impossible de mettre à jour le CV';
      })
      
      // deleteResume
      .addCase(deleteResume.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteResume.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.resumes = state.resumes.filter(resume => resume.id !== action.payload);
        if (state.currentResume && state.currentResume.id === action.payload) {
          state.currentResume = null;
        }
      })
      .addCase(deleteResume.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload || 'Impossible de supprimer le CV';
      });
  }
});

export const { resetResumeStatus, clearCurrentResume } = resumeSlice.actions;
export default resumeSlice.reducer;