import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Toaster } from 'react-hot-toast';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

Kommunicate.init("7ceb80d238a8d0dbafa4b1f32986d19c");



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    <Toaster />
  </React.StrictMode>
);
serviceWorkerRegistration.register();


reportWebVitals();
