import { configureStore } from '@reduxjs/toolkit';
import authentication from './slices/auth.slice';
// ...
const store = configureStore({
	reducer: {
		authentication,
	},
});
export type RootState = ReturnType<typeof store.getState>;

// Types for Hooks
export type AppDispatch = typeof store.dispatch;

export default store;
