import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';
import { Provider } from 'react-redux';
import store from './Redux/store';
import './Assets/fonts/fontiran.css';

function App() {
	// RTL
	const cacheRtl = createCache({
		key: 'kuknos-rtl',
		stylisPlugins: [prefixer, rtlPlugin],
	});

	return (
		<BrowserRouter>
			<Provider store={store}>
				<CacheProvider value={cacheRtl}>
					<ThemeProvider theme={lightTheme}>
						<CssBaseline />
						<AppRoutes />
					</ThemeProvider>
				</CacheProvider>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
