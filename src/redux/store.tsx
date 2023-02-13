import { configureStore } from '@reduxjs/toolkit';
import userSlice from './reducer';

const store = configureStore({
  reducer: {
    user: userSlice,
  },
});

// Global store type
export type RootState = ReturnType<typeof store.getState>;

// Dispatch type
export type AppDispatch = typeof store.dispatch;

export default store;
