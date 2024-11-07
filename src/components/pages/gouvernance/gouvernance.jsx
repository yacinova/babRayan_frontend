import React from 'react';
import './gouvernance.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';

const Gouvernance = () => {
  return (
    <div className="gouvernance-page"> 
      {/* Board of Directors Section */}
      <section className="section-container">
        <div className="image-text-wrapper">
          <div className="image-container">
            <img src={CFI} alt="Conseil d'administration" />
          </div>
          <div className="text-container">
            <h2>Conseil d'administration</h2>
            <p>
              Le Conseil d'administration est l'instance décisionnaire. Il se réunit au
              moins quatre fois par an. Son rôle consiste à adopter le fonctionnement et
              à déterminer la politique générale et à suivre les orientations
              stratégiques. Il est composé de membres administrateurs.
            </p>
          </div>
        </div>
      </section>

      {/* General Management Section */}
      <section className="section-container">
        <div className="image-text-wrapper reverse">
          <div className="image-container">
            <img src={CFI} alt="Direction Générale" />
          </div>
          <div className="text-container">
            <h2>Direction Générale</h2>
            <p>
              La Direction Générale gère les établissements, les services et siège
              sous l’autorité du Représentant de l'État. Elle assure une fonction stratégique
              à la gestion des affaires, par le Conseil d'Administration et de
              l’association. Par ailleurs, l’ensemble économique, politique et
              scientifique joue un lien avec les missions de l’association.
            </p>
          </div>
        </div>
      </section>

      {/* Institutional Partners Section */}
      <section className="partners-section">
        <h2>Partenaires institutionnels</h2>
        <div className="partners-logos">
          <img src={CFI} alt="Partner 1" />
          <img src={CFI} alt="Partner 2" />
          <img src={CFI} alt="Partner 3" />
          <img src={CFI} alt="Partner 4" />
        </div>
      </section>
    </div>
  );
};

export default Gouvernance;