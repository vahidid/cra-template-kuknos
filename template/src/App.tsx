import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { lightTheme } from './Theme';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './Routes';

function App() {
	// RTL
	const cacheRtl = createCache({
		key: 'kuknos-rtl',
		stylisPlugins: [prefixer, rtlPlugin],
	});

	return (
		<BrowserRouter>
			<CacheProvider value={cacheRtl}>
				<ThemeProvider theme={lightTheme}>
					<CssBaseline />
					<AppRoutes />
				</ThemeProvider>
			</CacheProvider>
		</BrowserRouter>
	);
}

export default App;
