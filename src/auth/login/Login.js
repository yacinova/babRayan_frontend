import React from 'react';
import { Mail, Lock } from 'lucide-react';
import './Login.css';
import Logo from "../../assets/Logo.png"

export default function Login() {
  return (
    <div className="login-container">
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

          <form>
            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input type="email" className="form-input" placeholder="Email" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" placeholder="Mot de passe" required />
            </div>

            <div className="form-group">
              <label className="checkbox-label">
                <input className='me-2' type="checkbox" />
                <span>Se souvenir de moi</span>
              </label>
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