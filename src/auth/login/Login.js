import React, { useEffect, useState } from 'react';
import { Mail, Lock } from 'lucide-react';
import './Login.css';
import Logo from "../../assets/Logo.png"
import { notification, Button, Modal, Space } from 'antd';

export default function Login() {

  const [api, contextHolder] = notification.useNotification();

  const openNotification = (type, title, msg) => {
    api[type]({
      message: title,
      description: msg,
      placement: "bottomLeft"
    });
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:7777/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        })
      });
      const data = await response.json();
      if (data.status) {
        localStorage.setItem('userID', data.data.user.id);
        openNotification('success', "Bienvenue", "Connexion réussie");

        setTimeout(() => {
          window.location.href = '/';
        }, 2000);
      } else {
        openNotification('error', "Erreur lors de l'inscription", data.message);
        console.log(data);
        
      }
    } catch (error) {
      console.error(error);
    }
  }


  const handleForgotPassword = async (event) => {
    event.preventDefault();
    console.log("password reset");
    
  }


  return (
    <div className="login-container">
      {contextHolder}
      {/* Animations d'arrière-plan */}
      <div className="login-background">
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
        <div className="animated-circle circle-3"></div>
      </div>

      <div className="login-card">
        {/* Section features */}
        <div className="login-features">
          <h2 className="text-center mb-5">Bienvenue sur <br />
            <img className='mt-2' src={Logo} alt="" />
          </h2>
          <div className="feature-item">
            🎁 Faites un don pour aider un enfant
          </div>
          <div className="feature-item">
            👋 Parrainez un enfant dans le besoin
          </div>
          <div className="feature-item">
            ❤️ Devenez bénévole
          </div>
        </div>

        {/* Section formulaire */}
        <div className="login-form-section">

          <h1 className="login-title">Connexion 🔐</h1>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input type="email" className="form-input" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" onChange={(e) => { setPassword(e.target.value) }} placeholder="Mot de passe" required />
            </div>

            <div className="form-group text-end">
              <u><span style={{cursor: 'pointer'}} onClick={handleForgotPassword}>Mot de passe oublié ?</span></u>
            </div>

            <button type="submit" className="login-button">
              Se connecter
            </button>

            <p className="text-center mt-4">
              Pas encore de compte ?{' '}
              <a href="/register" className="auth_btn">
                S'inscrire
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}