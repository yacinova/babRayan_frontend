import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './gouvernance.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';

const Gouvernance = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  return (
    <div className="gouvernance-page">
      {/* Hero Section */}
      <motion.div
        ref={ref}
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={controls}
        variants={{
          visible: { opacity: 1 },
          hidden: { opacity: 0 }
        }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Gouvernance</h1>
          </motion.div>
        </div>
      </motion.div>

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
