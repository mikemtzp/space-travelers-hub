import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  rockets: [],
};

const reducer = createSlice({
  name: 'rockets',
  initialState,
  reducers: {
    updateRocket: (state, action) => ({
      ...state,
      rockets: {
        ...state.rockets,
        [action.payload]: {
          ...state.rockets[action.payload],
          reserverd: !state.rockets[action.payload].reserved,
        },
      },
    }),
  },
});

export const { updateRocket } = reducer.actions;
export default reducer;
