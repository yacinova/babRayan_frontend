import React from 'react';
import './partenaires.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';


const PartnerList = () => {
  const partners = [
    { src: CFI, alt: 'Partner 1' },
    { src: CFI, alt: 'Partner 2' },
    { src: CFI, alt: 'Partner 3' },
    { src: CFI, alt: 'Partner 4' },
  ];

  return (
    <div className="partner-list-page">
      <div className="">
        <div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
          <h1 className="hero-title">Notre Mission</h1>
          <div className="divider"></div>

        </div>
      </div>
      <h1>Remerciement</h1>
      <p className="thanks-message">
        Nous tenons à remercier chaleureusement tous nos partenaires pour leur soutien continu et précieux.
        Leur contribution est essentielle à notre succès et nous permet de réaliser nos objectifs communs.
      </p>

      <h2>Liste des Partenaires:</h2>
      <div className="partners-grid">
        {Array(4).fill().map((_, index) => (
          <div className="partner-row" key={index}>
            {partners.map((partner, i) => (
              <img key={i} src={partner.src} alt={partner.alt} className="partner-logo" />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnerList;
