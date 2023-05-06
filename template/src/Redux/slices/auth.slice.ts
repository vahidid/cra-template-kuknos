import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import constants from '../../Utils/constants';

// Define a type for the slice state
interface AuthState {
	accessToken: string | null;
	refreshToken: string | null;
}

// Define the initial state using that type
const initialState: AuthState = {
	accessToken: localStorage.getItem(constants.ACCESS_TOKEN),
	refreshToken: localStorage.getItem(constants.REFRESH_TOKEN),
};

export const authSlice = createSlice({
	name: 'authentication',
	// `createSlice` will infer the state type from the `initialState` argument
	initialState,
	reducers: {
		// Use the PayloadAction type to declare the contents of `action.payload`
		setAccessToken: (state, action: PayloadAction<string>) => {
			localStorage.setItem(constants.ACCESS_TOKEN, action.payload);
			state.accessToken = action.payload;
		},
		setRefreshToken: (state, action: PayloadAction<string>) => {
			localStorage.setItem(constants.REFRESH_TOKEN, action.payload);
		},
		logout: (state) => {
			localStorage.removeItem(constants.ACCESS_TOKEN);
			localStorage.removeItem(constants.REFRESH_TOKEN);
			state.accessToken = null;
			state.refreshToken = null;
		},
	},
});

export const { setAccessToken, logout, setRefreshToken } = authSlice.actions;

export const selectRefreshToken = (state: RootState) =>
	state.authentication.refreshToken;

export const selectAccessToken = (state: RootState) =>
	state.authentication.accessToken;

// You can define other selector and states

// Export default reducer
export default authSlice.reducer;
