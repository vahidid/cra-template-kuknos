/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable no-underscore-dangle */
import axios, { AxiosRequestConfig } from 'axios';
import constants from '../Utils/constants';
import store from '../Redux/store';
import { setAccessToken, setRefreshToken } from '../Redux/slices/auth.slice';
import { ServiceResponse } from '../Interfaces/Service';
import { Token } from '../Models/Auth';

const apiClient = axios.create({
	// Later read this URL from an environment variable
	baseURL: constants.API_URL,
	headers: {
		'Accept-Language': 'fa-ir',
		'Platform-Version': constants.PLATFORM_VERSION,
	},
});

apiClient.interceptors.request.use((config) => {
	const token = localStorage.getItem(constants.ACCESS_TOKEN);
	if (token && config.headers) {
		config.headers.Authorization = token;
	}

	return config;
});

apiClient.interceptors.response.use(
	(response) => response,
	async (error) => {
		if ('config' in error) {
			const originalConfig = error.config as AxiosRequestConfig & {
				_retry: boolean;
			};
			if (error.response) {
				if (error.response.status === 401 && !originalConfig._retry) {
					originalConfig._retry = true;
					// Get Tokens
					const refreshToken = localStorage.getItem(constants.REFRESH_TOKEN);

					try {
						const newToken = await axios.get<ServiceResponse<Token>>(
							'/authorization/refresh-token',
							{
								baseURL: constants.API_URL,
								headers: {
									'Accept-Language': 'fa-ir',
									'Platform-Version': constants.PLATFORM_VERSION,
									Authorization: refreshToken as string,
								},
							}
						);
						store.dispatch(setAccessToken(newToken.data.data.access_token));
						store.dispatch(setRefreshToken(newToken.data.data.refresh_token));

						originalConfig.headers = {
							...originalConfig.headers,
							Authorization: `${newToken.data.data.access_token}`,
						};
					} catch (er) {
						if (axios.isAxiosError(er)) {
							if (er.response?.status === 401) {
								localStorage.removeItem(constants.ACCESS_TOKEN);
								localStorage.removeItem(constants.REFRESH_TOKEN);
								window.location.replace(constants.LOGIN_ROUTE);
							}
						}
					}

					return axios(originalConfig);
				}
			}
		}

		return Promise.reject(error);
	}
);

export default apiClient;
