// src/PageTracker.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { logPageView } from './analytics';

const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView(location.pathname); // Log page view on every path change
  }, [location]);

  return null;
};

export default PageTracker;
