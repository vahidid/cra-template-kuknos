function getConfigs() {
	if (!process.env.REACT_APP_SLUG)
		throw new Error('REACT_APP_SLUG not defined in environment');

	// Api URL
	if (!process.env.REACT_APP_API_URL)
		throw new Error('REACT_APP_API_URL not defined in environment');

	if (!process.env.REACT_APP_PLATFORM_VERSION)
		throw new Error('REACT_APP_PLATFORM_VERSION not defined in environment');

	return {
		ACCESS_TOKEN: `${process.env.REACT_APP_SLUG}_accessToken`,
		REFRESH_TOKEN: `${process.env.REACT_APP_SLUG}_refreshToken`,

		LOGIN_ROUTE: `/login`,

		API_URL: process.env.REACT_APP_API_URL,
		PLATFORM_VERSION: process.env.REACT_APP_PLATFORM_VERSION,
	};
}

export default getConfigs();
