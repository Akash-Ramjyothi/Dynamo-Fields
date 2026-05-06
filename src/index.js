import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create root element safely
const container = document.getElementById('root');

if (!container) {
  throw new Error("Root container missing in index.html");
}

const root = ReactDOM.createRoot(container);

// Render app with StrictMode (helps detect potential issues in dev)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Performance monitoring (optional)
// You can replace console.log with API call to analytics service
const logPerformance = (metric) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(metric);
  } else {
    // Example: send to analytics endpoint
    // fetch('/analytics', { method: 'POST', body: JSON.stringify(metric) });
  }
};

reportWebVitals(logPerformance);
