/* eslint-disable react/display-name */
import { ComponentType, FC } from 'react';
import { Navigate } from 'react-router-dom';
import constants from '../../Utils/constants';

const withAuthentication =
	<P extends JSX.IntrinsicAttributes>(Component: ComponentType<P>): FC<P> =>
	(props) => {
		const isAuthenticated = localStorage.getItem(constants.ACCESS_TOKEN);

		if (isAuthenticated) {
			return <Component {...props} />;
		}

		return (
			<Navigate
				to={{
					pathname: '/login',
				}}
			/>
		);
	};

export default withAuthentication;
