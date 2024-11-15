import ReactGA from 'react-ga4';

export const initGA = () => {
  ReactGA.initialize('G-BYM1RWH2J0'); 
};

export const logPageView = (page) => {
  ReactGA.send({ hitType: "pageview", page });
};

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
