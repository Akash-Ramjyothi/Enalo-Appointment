import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';

import './index.css';

/**
 * Root DOM container
 */
const container = document.getElementById('root');

if (!container) {
  throw new Error('Root container missing in index.html');
}

/**
 * Create React 18 root
 */
const root = ReactDOM.createRoot(container);

/**
 * Render application with StrictMode enabled
 * to highlight potential problems in development
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/**
 * Web Vitals reporting
 * Can be wired to analytics providers or logging services
 *
 * Examples:
 * reportWebVitals(console.log);
 * reportWebVitals(sendToAnalytics);
 */
if (process.env.NODE_ENV === 'development') {
  reportWebVitals(console.log);
} else {
  reportWebVitals();
}
