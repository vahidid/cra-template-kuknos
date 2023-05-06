import { Suspense, lazy } from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Loading from '../Components/Loading';

const HomePage = lazy(() => import('../Pages/Home'));

const Routes = [
	{
		path: '/',
		Element: HomePage,
	},
];

function AppRoutes() {
	return (
		<Suspense fallback={<Loading />}>
			<ReactRouterRoutes>
				{/* Routes */}
				{Routes.map(({ path, Element }) => (
					<Route path={path} key={path} element={<Element />} />
				))}
			</ReactRouterRoutes>
		</Suspense>
	);
}

export default AppRoutes;
