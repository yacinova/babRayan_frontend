import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Globe, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';
import './Sociaux.css';

export default function Sociaux() {
  const socialLinks = [
    {
      id: 1,
      name: 'Facebook',
      icon: <Facebook size={24} />,
      link: '#',
      username: '@babrayan',
      color: '#003049'
    },
    {
      id: 2,
      name: 'Instagram',
      icon: <Instagram size={24} />,
      link: '#',
      username: '@babrayan_officiel',
      color: '#D62828'
    },
    {
      id: 3,
      name: 'Twitter',
      icon: <Twitter size={24} />,
      link: '#',
      username: '@BabRayan',
      color: '#F77F00'
    },
    {
      id: 4,
      name: 'Youtube',
      icon: <Youtube size={24} />,
      link: '#',
      username: 'Bab Rayan Channel',
      color: '#FCBF49'
    }
  ];

  const contactInfo = [
    {
      id: 1,
      type: 'Site Web',
      icon: <Globe size={20} />,
      value: 'www.babrayan.org',
      link: '#'
    },
    {
      id: 2,
      type: 'Téléphone',
      icon: <Phone size={20} />,
      value: '+123 456 789',
      link: 'tel:+123456789'
    },
    {
      id: 3,
      type: 'Email',
      icon: <Mail size={20} />,
      value: 'contact@babrayan.org',
      link: 'mailto:contact@babrayan.org'
    },
    {
      id: 4,
      type: 'Adresse',
      icon: <MapPin size={20} />,
      value: '123 Rue Example, Ville',
      link: '#'
    }
  ];

  return (
    <section className="sociaux-section">
      <div className="container py-5">
        {/* En-tête */}
        <div className="text-center mb-5 section-header">
          <h1 className="display-4 blue mb-3">Suivez-nous</h1>
          <p className="lead">Restez connectés avec Bab Rayan sur les réseaux sociaux</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="row g-4 mb-5">
          {socialLinks.map((social) => (
            <div key={social.id} className="col-md-6 col-lg-3">
              <a 
                href={social.link} 
                className="social-card" 
                style={{'--hover-color': social.color}}
              >
                <div className="card h-100 social-card-inner">
                  <div className="card-body d-flex flex-column align-items-center text-center">
                    <div className="social-icon-wrapper mb-3">
                      {social.icon}
                    </div>
                    <h3 className="h5 mb-2">{social.name}</h3>
                    <p className="text-muted mb-3">{social.username}</p>
                    <div className="mt-auto d-flex align-items-center gap-2">
                      <span>Suivre</span>
                      <ArrowRight size={16} className="follow-arrow" />
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Bannière de statistiques */}
        <div className="stats-banner mb-5">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-6 blue">5K+</h3>
                <p>Abonnés</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-6 blue">200+</h3>
                <p>Publications</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="stat-item">
                <h3 className="display-6 blue">50+</h3>
                <p>Vidéos</p>
              </div>
            </div>
          </div>
        </div>

        {/* Informations de contact */}
        <div className="contact-section">
          <h2 className="text-center h3 blue mb-4">Contactez-nous</h2>
          <div className="row g-4">
            {contactInfo.map((info) => (
              <div key={info.id} className="col-md-6 col-lg-3">
                <a href={info.link} className="contact-card">
                  <div className="card h-100">
                    <div className="card-body text-center">
                      <div className="contact-icon mb-3">
                        {info.icon}
                      </div>
                      <h4 className="h6 mb-2">{info.type}</h4>
                      <p className="text-muted mb-0">{info.value}</p>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}