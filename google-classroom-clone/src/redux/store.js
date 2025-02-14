

import { configureStore } from '@reduxjs/toolkit';
import assignmentsReducer from './slices/assignmentSlice';


export const store = configureStore({
  reducer: {
    assignments: assignmentsReducer,
  },
});