import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>CV Maker</h1>
    <App />
    <div class="footer">
            Copyright © github.com/hajra-javed
        </div>
  </React.StrictMode>
);