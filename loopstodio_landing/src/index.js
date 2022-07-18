import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './Pages/app.js';
import reportWebVitals from './reportWebVitals';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App/>);
reportWebVitals();
