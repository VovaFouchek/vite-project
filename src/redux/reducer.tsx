import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IUserReducer } from './interfaces';

const initialValue: IUserReducer = {
  email: null,
  token: null,
  id: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState: initialValue,
  reducers: {
    setUser(state, action: PayloadAction<IUserReducer>) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
