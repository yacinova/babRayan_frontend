import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './ProtectionEnfance.css';

const ProtectionEnfance = () => {
  const ref = useRef(null);

  return (
    <div className='protection-main'>
      {/* Hero Section */}
      {/* <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">Notre Mission</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div> */}

      {/* Main Content */}
      <motion.div className="protection-enfance" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <motion.section className="introduction" initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
          <h1>Protection de l’Enfance</h1>
          <p>
            depuis 2014, bab rayan se consacre à la protection de l’enfance en assurant un environnement sûr et bienveillant pour les enfants vulnérables...
          </p>
          <p>
            bab rayan place la protection de l’enfance au cœur de sa mission. son objectif : offrir à ces enfants un cadre de vie sécurisant...
          </p>
        </motion.section>

        <motion.section className="foyer" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
          <h2>Foyer Bab Rayan</h2>

          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <h3>Structure</h3>
            <p>
              le foyer bab rayan est un établissement de protection sociale (eps) agréé sous la tutelle du ministère de la solidarité...
            </p>
          </motion.div>

          <h3>Projet de Vie</h3>
          <motion.ul className="foyer-list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.8 }}>
            <li><strong>résolution des démarches administratives</strong> comme l’obtention de documents d’identité,</li>
            <li><strong>prise en charge médicale</strong> adaptée à leurs besoins,</li>
            <li><strong>parcours éducatif et sportif</strong> enrichissant,</li>
            <li><strong>plan d’insertion sociale</strong> personnalisé.</li>
          </motion.ul>

          <h3>Humaniser le Projet</h3>
          <p>
            pour renforcer l'impact de notre mission, nous intégrons des <strong>témoignages de nos enfants, bénévoles et membres du staff</strong>...
          </p>

          <h3>Le Foyer en Chiffres</h3>
          <motion.ul className="stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
            <li><strong>105 enfants</strong> pris en charge de 3 à 18 ans (et parfois au-delà)</li>
            <li><strong>16 encadrants</strong> dédiés</li>
            <li><strong>1300 bénévoles</strong> impliqués</li>
          </motion.ul>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ProtectionEnfance;
