import React, { useEffect, useState } from 'react';
import { Mail, Lock, User, Phone } from 'lucide-react';
import './Register.css';
import Logo from "../../assets/Logo.png"
import { notification, Button, Modal, Space } from 'antd';

export default function Register() {
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
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const [otp, setOtp] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false); // State to control modal visibility

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      openNotification('warning', "Mots de passe non identiques", "Veuillez entrer le même mot de passe dans les deux champs.")
      return;
    }
    if (password.length < 8) {
      openNotification('warning', "Mot de passe trop court", "Le mot de passe doit contenir au moins 8 caractères.")
      return;
    }

    const response = await fetch('http://localhost:7777/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
        lastName: nom,
        name: prenom
      })
    });
    const data = await response.json();
    if (data.status) {
      openNotification('success', "Inscription réussie", "Un email de vérification a été envoyé.");
      // Open modal after successful registration
      setIsModalVisible(true);
    } else {
      openNotification('error', "Erreur lors de l'inscription", data.message);
    }
  }

  const VerifCode = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:7777/api/auth/verify_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        code: otp
      })
    });
    const data = await response.json();
    if (data.status) {
      openNotification('success', "Email vérifié", "Vous pouvez maintenant vous connecter.");
      setIsModalVisible(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setNom("");
      setPrenom("");
      setOtp("");

      localStorage.setItem('userID', data.id);

      setTimeout(() => {
        window.location.href = '/';
      }, 2000);

    } else {
      openNotification('error', "Erreur lors de la vérification de l'email", data.message);
    }
  }

  return (
    <div className="login-container">
      {contextHolder}
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
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <User className="input-icon" size={20} />
              <input type="text" onChange={(e) => setNom(e.target.value)} className="form-input" placeholder="Nom *" required />
            </div>

            <div className="form-group">
              <User className="input-icon" size={20} />
              <input type="text" className="form-input" onChange={(e) => setPrenom(e.target.value)} placeholder="Prénom *" required />
            </div>

            <div className="form-group">
              <Mail className="input-icon" size={20} />
              <input type="email" onChange={(e) => setEmail(e.target.value)} className="form-input" placeholder="Email *" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Mot de passe *" required />
            </div>

            <div className="form-group">
              <Lock className="input-icon" size={20} />
              <input type="password" onChange={(e) => setConfirmPassword(e.target.value)} className="form-input" placeholder="Confirmer le mot de passe *" required />
            </div>

            <button type="submit" className="login-button">
              S'inscrire
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

      {/* Modal for OTP verification */}
      <Modal
        title="Vérification de l'email"
        visible={isModalVisible}
        onCancel={() => { }}
        footer={null} // No close button
        closable={false}
      >
        <form onSubmit={VerifCode}>
          <div className="form-group">
            <input
              type="text"
              className="form-input"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Entrez le code de vérification"
              required
            />
          </div>
          <Button type="seconndary" onClick={() => setIsModalVisible(false)}>Annuler</Button>
          <Button type="primary" htmlType="submit">Vérifier</Button>
        </form>
      </Modal>
    </div>
  );
}
