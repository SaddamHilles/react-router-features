import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  count: 0,
};

type State = { count: number };



const counterSlice = createSlice({
  initialState,
  name: 'counter',
  reducers: {
    increment: (state: State) => {
      return { count: state.count + 1 };
    },
    decrement: (state: State) => {
      return { count: state.count - 1 };
    },
    incrementByAmount: (state: State, action) => {
      return {...state, count: action.payload}
    }
  },
});

export const { increment, decrement } = counterSlice.actions;

export const counterReducer = counterSlice.reducer;
