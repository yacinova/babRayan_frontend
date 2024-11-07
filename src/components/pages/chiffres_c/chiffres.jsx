import React from 'react';
import './chiffres.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';


const FoyerPage = () => {
  return (
    <div className="foyer-page">
      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="image-container">
          <img src={CFI} alt="History" />
        </div>
        <div className="text-container">
          <h2>Il faudrait retracer l'historique depuis le début :</h2>
          <p>
            Il faudrait retracer l’historique depuis le début : combien d’enfants ont
            été accompagnés depuis la création de l’association, quels a été l’évolution ?
            Combien d’enfants ont intégré chaque année ? quelle est la durée moyenne de
            prise en charge : 3-5 ans ? Combien d’autres personnes âgées les foyers de
            province partenaires etc. Il faudra recenser l’ensemble des chiffres ensemble
            pour compléter ceux-ci-dessous.
          </p>
        </div>
      </section>

      {/* Key Statistics Section */}
      <section className="statistics-section">
        <div className="background-overlay">
          <h2>Le foyer en chiffres</h2>
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2,6</h3>
              <p>MMAD DE BUDGET ANNUEL</p>
            </div>
            <div className="stat-item">
              <h3>105</h3>
              <p>ENFANTS LOGÉS, NOURRIS, SOIGNÉS ET ÉDUQUÉS</p>
            </div>
            <div className="stat-item">
              <h3>16</h3>
              <p>ENCADRANTS</p>
            </div>
            <div className="stat-item">
              <h3>500</h3>
              <p>BÉNÉVOLES</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="gallery">
          <img src={CFI} alt="Gallery 1" />
          <img src={CFI} alt="Gallery 2" />
          <img src={CFI} alt="Gallery 3" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <p>Rejoignez le combat, pour la protection de l'enfance</p>
        <button onClick={() => window.location.href = "/donation"} className="donate-button">Faire un <b>DON !</b></button>
      </section>
    </div>
  );
};

export default FoyerPage;
