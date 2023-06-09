import { Suspense, lazy } from 'react';
import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Loading from '../Components/Loading';

const HomePage = lazy(() => import('../Pages/Home'));
const ProtectedPage = lazy(() => import('../Pages/Protected'));

const Routes = [
	{
		path: '/',
		Element: HomePage,
	},
	{
		path: '/protected',
		Element: ProtectedPage,
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
