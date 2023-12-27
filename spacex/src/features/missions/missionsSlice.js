import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMissions = createAsyncThunk(
  'missions/fetchMissions',
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/missions');
    return response.data;
  }
);

export const joinMission = createAsyncThunk(
  'missions/joinMission',
  async (missionId) => {
    
    await new Promise((resolve) => setTimeout(resolve, 500)); 
    return missionId;
  }
);

export const leaveMission = createAsyncThunk(
  'missions/leaveMission',
  async (missionId) => {
    
    await new Promise((resolve) => setTimeout(resolve, 500));
    return missionId;
  }
);

const initialState = {
  data: [],
  joinedMissions: [],
  loading: false,
  error: null,
};

export const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
    builder
      .addCase(joinMission.fulfilled, (state, action) => {
        state.joinedMissions.push(action.payload);
      })
      .addCase(leaveMission.fulfilled, (state, action) => {
        state.joinedMissions = state.joinedMissions.filter((id) => id !== action.payload);
      });
  },
});

export const { handleMissions} = missionsSlice.actions;
export default missionsSlice.reducer;
