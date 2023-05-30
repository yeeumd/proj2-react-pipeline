import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserType } from '../api/userApi'

export interface UserState {
  user: UserType | null;
}

const initialState: UserState = {
  user: null,
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = userReducer.actions;
export default userReducer.reducer;
