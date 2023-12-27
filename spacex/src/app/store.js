
import { configureStore } from '@reduxjs/toolkit';
import dragonsReducer from './features/dragons/dragonsSlice';
import missionDataReducer from './features/missionsSlice';

export const store = configureStore({
  reducer: {
    dragons: dragonsReducer,
    missions: missionDataReducer, 
  },
});


