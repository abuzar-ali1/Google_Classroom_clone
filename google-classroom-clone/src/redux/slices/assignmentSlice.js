"use client";
import { createSlice } from '@reduxjs/toolkit';

// Check if window is defined (client-side)
const getInitialState = () => {
  if (typeof window !== 'undefined') {
    return {
      assignments: JSON.parse(localStorage.getItem('assignments')) || [],
    };
  }
  return { assignments: [] }; // Fallback for server-side
};

const assignmentsSlice = createSlice({
  name: 'assignments',
  initialState: getInitialState(),
  reducers: {
    addAssignment: (state, action) => {
      state.assignments.push(action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('assignments', JSON.stringify(state.assignments));
      }
    },
    updateAssignment: (state, action) => {
      const index = state.assignments.findIndex(a => a.id === action.payload.id);
      if (index !== -1) {
        state.assignments[index] = action.payload;
        if (typeof window !== 'undefined') {
          localStorage.setItem('assignments', JSON.stringify(state.assignments));
        }
      }
    },
    deleteAssignment: (state, action) => {
      state.assignments = state.assignments.filter(a => a.id !== action.payload);
      if (typeof window !== 'undefined') {
        localStorage.setItem('assignments', JSON.stringify(state.assignments));
      }
    },
  },
});

export const { addAssignment, updateAssignment, deleteAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;