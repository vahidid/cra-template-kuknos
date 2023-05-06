import { Suspense, lazy } from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';

const HomePage = lazy(() => import('../Pages/Home'));

const Routes = [
	{
		path: '/',
		Element: HomePage,
	},
];

function AppRoutes() {
	// TODO: add loading for lazy loading
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<ReactRouterRoutes>
				{/* Routes */}
				{Routes.map((route) => (
					<Route
						path={route.path}
						key={route.path}
						element={<route.Element />}
					/>
				))}
			</ReactRouterRoutes>
		</Suspense>
	);
}

export default AppRoutes;
