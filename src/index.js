import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './icon.js';
import App from './pages/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(<App />);
