import React from 'react';
import { Mail, Lock, Heart, User, c, Phone } from 'lucide-react';
import './Register.css';
import Logo from "../../assets/Logo.png"

export default function Register() {
  return (
    <div className="login-container">
      {/* Animations d'arrière-plan */}
      <div className="login-background">
        <div className="animated-circle circle-1"></div>
        <div className="animated-circle circle-2"></div>
        <div className="animated-circle circle-3"></div>
      </div>

      <div className="login-card">
        <div className="login-features">
          <h2 className="text-center mb-5">Rejoignez <br />
            <img className='mt-2' src={Logo} alt="" />
          </h2>
          <div className="feature-item">
            🤝 Une communauté engagée
          </div>
          <div className="feature-item">
            🌟 Des projets inspirants
          </div>
          <div className="feature-item">
            💖 Un impact réel
          </div>
        </div>

        <div className="login-form-section">

          <h1 className="login-title">Inscription 👋</h1>
          {/* formulaire */}
          <form>
            <div className="form-group">
              <User className="input-icon" size={20} />
              <input type="text" className="form-input" placeholder="Nom complet" required />
            </div>

            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input type="email" className="form-input" placeholder="Email" required />
            </div>
            <div className="form-group">
              <Phone className="input-icon" size={20} />
              <input className="form-input" placeholder="Numéro de téléphone" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" placeholder="Mot de passe" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" placeholder="Confirmer le mot de passe" required />
            </div>

            <button type="submit" className="login-button">
              Se connecter
            </button>

            <p className="text-center mt-4">
              Déjà un compte ?{' '}
              <a href="/login" className="auth_btn">
                Se connecter
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}