import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Router';
import { RouterProvider } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={Router} />
  </React.StrictMode>
);