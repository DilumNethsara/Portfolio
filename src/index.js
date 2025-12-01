import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './contexts/theme';
import './index.css';

// Get the root container element
const container = document.getElementById('root');

// Create a React root
const root = createRoot(container);

// Render the app inside the root
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
