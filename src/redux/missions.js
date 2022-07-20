import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  missions: [],
  loading: false,
};

const reducer = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    setMissions: (state, action) => ({
      ...state,
      missions: action.payload,

    }),
  },
});

export const { setMissions } = reducer.actions;
export default reducer;
