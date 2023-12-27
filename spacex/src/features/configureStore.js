
import { configureStore } from '@reduxjs/toolkit';
import dragonsSlice from './dragons/dragonsSlice';
import missionsSlice from './missions/missionsSlice';

const store = configureStore({
  reducer: {
    dragons: dragonsSlice, 
    missions: missionsSlice,
  },
});

export default store;
