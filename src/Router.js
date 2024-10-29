import React from 'react';
import { createBrowserRouter} from 'react-router-dom';

import Index from "./components/app"

// auth
import Login from './auth/login/Login';
import Register from './auth/Register/Register';

// components
import Landing from './components/landing-page/landing';


// pages
import Donation from './components/pages/donnation/don'
import Parrainage from './components/pages/parrainage/parrainage'

// 404
import NotFound from './components/NotFound';
import Actualite from './components/pages/actualité/Actualite';




const Router = createBrowserRouter([
  {
    path: '/',
    element: <Index />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element:<Register />
      },
      {
        path: '/donation',
        element:<Donation />
      },
      {
        path: '/parrainage',
        element:<Parrainage />
      },
      {
        path: '/actualites',
        element:<Actualite />
      },
      {
        path: '/not-found',
        element: <NotFound />
      },

    ]
  }
]);

export default Router;
