// import { createSlice } from "@reduxjs/toolkit";
// import {
//   getExperiences,
//   postExperience,
//   deleteExperience,
//   getEducation,
//   postEducation,
//   deleteEducation,
//   getSkills,
//   postSkills,
//   removeSkill,
//   getHobbies,
//   postHobby,
//   deleteHobby
// } from "./resumeThunks";

// const initialState = {
//   experiences: [],
//   education: [],
//   skills: [],
//   hobbies: [],
//   location: "",
//   draft: undefined,
// };

// const resumeSlice = createSlice({
//   name: "resume",
//   initialState,
//   reducers: {
//     addExperienceLocal: (state, action) => {
//       state.experiences.push(action.payload);
//     },
//     updateExperience: (state, action) => {
//       const index = state.experiences.findIndex(exp => exp.id === action.payload.id);
//       if (index !== -1) {
//         state.experiences[index] = { ...state.experiences[index], ...action.payload.data };
//       }
//     },
//     removeExperienceLocal: (state, action) => {
//       state.experiences = state.experiences.filter(exp => exp.id !== action.payload);
//     },

//     addEducationLocal: (state, action) => {
//       state.education.push(action.payload);
//     },
//     updateEducation: (state, action) => {
//       const index = state.education.findIndex(edu => edu.id === action.payload.id);
//       if (index !== -1) {
//         state.education[index] = { ...state.education[index], ...action.payload.data };
//       }
//     },
//     removeEducationLocal: (state, action) => {
//       state.education = state.education.filter(edu => edu.id !== action.payload);
//     },

//     addSkillLocal: (state, action) => {
//       state.skills.push(action.payload);
//     },
//     removeSkillLocal: (state, action) => {
//       state.skills = state.skills.filter(skill => skill.id !== action.payload);
//     },

//     addHobbyLocal: (state, action) => {
//       state.hobbies.push(action.payload);
//     },
//     removeHobbyLocal: (state, action) => {
//       state.hobbies = state.hobbies.filter(hobby => hobby.id !== action.payload);
//     },

//     setLocation: (state, action) => {
//       state.location = action.payload;
//     },

//     saveDraft: (state, action) => {
//       state.draft = action.payload;
//     },
//     loadDraft: (state) => {
//       if (state.draft) {
//         return { ...state, ...state.draft };
//       }
//     },
//     clearDraft: (state) => {
//       state.draft = undefined;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getExperiences.fulfilled, (state, action) => {
//         state.experiences = action.payload;
//       })
//       .addCase(postExperience.fulfilled, (state, action) => {
//         state.experiences.push(action.payload);
//       })
//       .addCase(deleteExperience.fulfilled, (state, action) => {
//         state.experiences = state.experiences.filter(exp => exp.id !== action.payload);
//       })
//       .addCase(getEducation.fulfilled, (state, action) => {
//         state.education = action.payload;
//       })
//       .addCase(postEducation.fulfilled, (state, action) => {
//         state.education.push(action.payload);
//       })
//       .addCase(deleteEducation.fulfilled, (state, action) => {
//         state.education = state.education.filter(edu => edu.id !== action.payload);
//       })
//       .addCase(getSkills.fulfilled, (state, action) => {
//         state.skills = action.payload;
//       })
//       .addCase(postSkills.fulfilled, (state, action) => {
//         state.skills.push(action.payload);
//       })
//       .addCase(removeSkill.fulfilled, (state, action) => {
//         state.skills = state.skills.filter(skill => skill.id !== action.payload);
//       })
//       .addCase(getHobbies.fulfilled, (state, action) => {
//         state.hobbies = action.payload;
//       })
//       .addCase(postHobby.fulfilled, (state, action) => {
//         state.hobbies.push(action.payload);
//       })
//       .addCase(deleteHobby.fulfilled, (state, action) => {
//         state.hobbies = state.hobbies.filter(hobby => hobby.id !== action.payload);
//       });
//   },
// });

// export const {
//   addExperienceLocal,
//   updateExperience,
//   removeExperienceLocal,
//   addEducationLocal,
//   updateEducation,
//   removeEducationLocal,
//   addSkillLocal,
//   removeSkillLocal,
//   addHobbyLocal,
//   removeHobbyLocal,
//   setLocation,
//   saveDraft,
//   loadDraft,
//   clearDraft,
// } = resumeSlice.actions;

// export {
//   getExperiences,
//   postExperience,
//   deleteExperience,
//   getEducation,
//   postEducation, 
//   deleteEducation,
//   getSkills,
//   postSkills,
//   removeSkill,
//   getHobbies,
//   postHobby,
//   deleteHobby
// };

// export default resumeSlice.reducer;
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