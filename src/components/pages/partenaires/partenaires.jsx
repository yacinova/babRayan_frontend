import React from 'react';
import { motion } from 'framer-motion';
import './partenaires.css';
import indh from '../../../assets/indh.png';

const PartnerList = () => {
  const partners = [
    { src: indh, alt: 'Partner 1' },
  ];

  return (
    <div className="General-page">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div
            className="title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Partenaires</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="partner-list-page">
        <h1>Remerciement</h1>
        <p className="thanks-message">
          Nous tenons à remercier chaleureusement tous nos partenaires pour leur soutien continu et précieux.
          Leur contribution est essentielle à notre succès et nous permet de réaliser nos objectifs communs.
        </p>

        <h2>Liste des Partenaires:</h2>
        <div className="partners-grid ">
          {partners.map((partner, index) => (
            <img key={index} src={partner.src} alt={partner.alt} className="partner-logo" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerList;
