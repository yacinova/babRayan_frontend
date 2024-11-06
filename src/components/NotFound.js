import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  // Styles
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f8f9fa',
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    color: '#333',
    textAlign: 'center',
    padding: '20px'
  };

  const contentStyle = {
    maxWidth: '600px',
    width: '100%'
  };

  const headingStyle = {
    fontSize: '8em',
    color: '#D62828',
    margin: '0',
    animation: 'bounce 1s ease-in-out infinite alternate'
  };

  const subheadingStyle = {
    fontSize: '2em',
    margin: '10px 0',
    color: '#333'
  };

  const paragraphStyle = {
    fontSize: '1.1em',
    color: '#555',
    marginBottom: '30px'
  };

  const buttonStyle = {
    padding: '12px 30px',
    fontSize: '1em',
    fontWeight: '600',
    backgroundColor: '#D62828',
    color: '#fff',
    border: 'none',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease'
  };

  // Inline keyframes for animation
  const bounceAnimation = `
    @keyframes bounce {
      from {
        transform: translateY(0);
      }
      to {
        transform: translateY(-10px);
      }
    }
  `;

  return (
    <div style={containerStyle}>
      <style>{bounceAnimation}</style> {/* Adding keyframes directly */}
      <div style={contentStyle}>
        <h1 style={headingStyle}>404</h1>
        <h2 style={subheadingStyle}>Oops! Page Not Found</h2>
        <p style={paragraphStyle}>
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <button
          style={buttonStyle}
          onClick={handleGoHome}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
