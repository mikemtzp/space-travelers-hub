import { createSlice } from '@reduxjs/toolkit';
import getMissions from './apiMissions';

const initialState = {
  missions: [],
  status: null,
};

const reducer = createSlice({
  name: 'missions',
  initialState,
  extraReducers: {
    [getMissions.pending]: (state) => ({
      ...state,
      status: 'loading',
    }),
    [getMissions.fulfilled]: (state, action) => ({
      ...state,
      missions: action.payload,
      status: 'success',
    }),
    [getMissions.rejected]: (state) => ({
      ...state,
      loading: 'something went wrong',
    }),
  },
});

export const { setMissions } = reducer.actions;
export default reducer;
