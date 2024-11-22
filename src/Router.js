import React, { useEffect } from 'react';
import { createBrowserRouter, useLocation, Navigate, Outlet } from 'react-router-dom';
import ReactGA from 'react-ga4'; // Import react-ga4



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
import Chiffres from './components/pages/chiffres_c/chiffres'
import Gouvernance from './components/pages/gouvernance/gouvernance'
import Partenaires from './components/pages/partenaires/partenaires'
import Mission from './components/pages/mission/mission'
import Actualite from './components/pages/actualité/Actualite';
import ActualiteDetails from './components/pages/actualité/ActualiteDetails';
import Sociaux from './components/pages/sociaux/Sociaux';
import Protection from './components/pages/protection/ProtectionEnfance';

// 404
import NotFound from './components/NotFound';

// dashboard
import IndexDashboard from "./Dashboard/Dashboard"
import Home from "./Dashboard/pages/Home"
import ActualiteManage from "./Dashboard/pages/Actualite"
import UserManage from "./Dashboard/pages/Users"
import MemberManage from "./Dashboard/pages/members/Members"
import SettingsManage from "./Dashboard/pages/settings/Settings"

import useUserRole from './userRole'; // Adjust the import path as needed


// Function to check if user is authenticated
const isAuthenticated = () => {
  // Check if token exists in local storage
  const token = localStorage.getItem('userID');
  
  return !!token; // Returns true if token exists, false otherwise
};

// PrivateRoute component to handle private routes
const PrivateRoute = ({ element }) => {
  
  return isAuthenticated() ? element : <Navigate to="/login" replace />;
};

// PublicRoute component to handle public routes
const PublicRoute = ({ element }) => {
  return isAuthenticated() ? <Navigate to="/clients" replace /> : element;
};


const AdminRoute = ({ element }) => {
  const Id = localStorage.getItem('userID'); // Ensure the user ID is stored in local storage
  const { userRole, loading } = useUserRole(Id);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a spinner or loading component
  }

  return userRole === 'admin' ? element : <Navigate to="/not-found" replace />;
};


// Create a custom component to track page views
const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: 'pageview', page: location.pathname });
  }, [location]);

  return null;
};

const Router = createBrowserRouter([
  {
    path: '/',
    element:
      <>
        <TrackPageView /> {/* Track page views */}
        <Index />
      </>,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: "/dashboard",
        element:
          (<PrivateRoute element={<>
            <TrackPageView />
            <IndexDashboard />
          </>} />),

        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: 'news',
            element: <ActualiteManage />,
          },
          {
            path: 'profile',
            element: <UserManage />,
          },
          {
            path: 'members',
            element: <MemberManage />,
          },
          {
            path: 'settings',
            element: <SettingsManage />,
          },


        ],
      },
      {
        path: '/login',
        element: <PublicRoute element={<Login />} />
      },
      {
        path: '/register',
        element: <PublicRoute element={<Register />} />
      },
      {
        path: '/donation',
        element: <Donation />
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
        path: '/mot_presidente',
        element: <Mot />
      },
      {
        path: '/partenaires',
        element: <Partenaires />
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
        path: '/mission',
        element: <Mission />
      },
      {
        path: '/protection',
        element: <Protection />
      },
      {
        path: '*',
        element: <NotFound />
      },

    ]
  }
]);



export default Router;
