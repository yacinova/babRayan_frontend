import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { RouterProvider } from "react-router-dom";
import ReactGA from 'react-ga4';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


// Initialize Google Analytics
ReactGA.initialize('G-BYM1RWH2J0');  // Replace with your actual GA4 Measurement ID

// Track page view on initial load
ReactGA.send("pageview");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>
);
