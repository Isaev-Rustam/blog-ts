import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CounterState {
  isAuth: boolean;
}

const initialState: CounterState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    isAuth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { isAuth } = authSlice.actions;

const authReducer = authSlice.reducer;
export default authReducer;
