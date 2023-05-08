import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Sentry from '@sentry/react';
import { RewriteFrames } from '@sentry/integrations';

// Project Sentry
Sentry.init({
	dsn: process.env.REACT_APP_SENTRY_DSN,
	integrations: [new Sentry.BrowserTracing(), new RewriteFrames()],

	// We recommend adjusting this value in production, or using tracesSampler
	// for finer control
	tracesSampleRate: 1.0,
	environment: process.env.NODE_ENV,
});

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
