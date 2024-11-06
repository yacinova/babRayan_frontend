import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Index from "./components/app"

// auth
import Login from './auth/login/Login';
import Register from './auth/Register/Register';

// components
import Landing from './components/landing-page/landing';


// pages
import Donation from './components/pages/donnation/don'
import Parrainage from './components/pages/parrainage/parrainage'
import Mot from './components/pages/PresidentMessage/mot'
import About from './components/pages/about_us/about'
import Contact from './components/pages/contact_us/contact'
import Mission from './components/pages/mission/mission'
import Chiffres from './components/pages/chiffres_c/chiffres'
import Gouvernance from './components/pages/gouvernance/gouvernance'
import Partenaires from './components/pages/partenaires/partenaires'
import Actualite from './components/pages/actualité/Actualite';
import ActualiteDetails from './components/pages/actualité/ActualiteDetails';
import Sociaux from './components/pages/sociaux/Sociaux';

// 404
import NotFound from './components/NotFound';





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
        element: <Register />
      },
      {
        path: '/donation',
        element: <Donation />
      },
      {
        path: '/mot_presidente',
        element: <Mot />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/mission',
        element: <Mission />
      },
      {
        path: '/chiffres',
        element: <Chiffres />
      },
      {
        path: '/gouvernance',
        element: <Gouvernance />
      },
      {
        path: '/partenaires',
        element: <Partenaires />
      },
      {
        path: '/parrainage',
        element: <Parrainage />
      },
      {
        path: '/sociaux',
        element: <Sociaux />
      },
      {
        path: '/actualites',
        element: <Actualite />
      },
      {
        path: '/actualites/:id',
        element: <ActualiteDetails />,
      },
      {
        path: '/not-found',
        element: <NotFound />
      },

    ]
  }
]);

export default Router;
