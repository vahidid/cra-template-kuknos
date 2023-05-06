function getConfigs() {
	if (!process.env.REACT_APP_SLUG)
		throw new Error('REACT_APP_SLUG not defined in environment');

	return {
		ACCESS_TOKEN: `${process.env.REACT_APP_SLUG}_accessToken`,
		REFRESH_TOKEN: `${process.env.REACT_APP_SLUG}_refreshToken`,
	};
}

export default getConfigs();
