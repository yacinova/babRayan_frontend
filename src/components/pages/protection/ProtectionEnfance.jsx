import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./ProtectionEnfance.css";

const ProtectionEnfance = () => {
  const ref = useRef(null);

  return (
    <div className="container">
      {/* Hero Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Protection d'enfance</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="protection-main">
        {/* Main Content */}
        <motion.div
          className="protection-enfance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.section
            className="introduction"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1>Protection de l’Enfance</h1>
            <p>
              Depuis 2014, Bab rayan se consacre à la protection de l’enfance,
              assurant un environnement sûr et bienveillant pour les enfants
              vulnérables. Chaque jour, l’association défend leurs droits et
              leur garantit un accès à une éducation de qualité, ouvrant ainsi
              la voie à un avenir plus prometteur.
            </p>
            <p>
              Bab Rayan place la protection de l'enfance au cœur de sa mission.
              Son objectif : offrir à ces enfants un cadre de vie sécurisant,
              tout en restaurant leur confiance grâce à un soutien matériel et
              humain continu. En leur redonnant une part de leur insouciance et
              en les accompagnant vers la réalisation de leurs rêves — avoir un
              foyer et accéder à l'éducation — l'association leur permet de se
              projeter vers un avenir meilleur.
            </p>
          </motion.section>

          <motion.section
            className="foyer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h2>Foyer Bab Rayan</h2>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <h3>Structure</h3>
              <p>
                Le Foyer Bab Rayan est un établissement de protection sociale
                (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de
                l’Insertion Sociale et de la Famille.
              </p>
            </motion.div>

            <h3>Projet de Vie</h3>
            <motion.ul
              className="foyer-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <li>
                <strong>résolution des démarches administratives</strong> comme
                l’obtention de documents d’identité,
              </li>
              <li>
                <strong>prise en charge médicale</strong> adaptée à leurs
                besoins,
              </li>
              <li>
                <strong>parcours éducatif et sportif</strong> enrichissant,
              </li>
              <li>
                <strong>plan d’insertion sociale</strong> personnalisé.
              </li>
            </motion.ul>

            <h3>Humaniser le Projet</h3>
            <p>
              pour renforcer l'impact de notre mission, nous intégrons des{" "}
              <strong>
                témoignages de nos enfants, bénévoles et membres du staff
              </strong>
              ...
            </p>

            <h3>Le Foyer en Chiffres</h3>
            <motion.ul
              className="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <li>
                <strong>105 enfants</strong> pris en charge de 3 à 18 ans (et
                parfois au-delà)
              </li>
              <li>
                <strong>16 encadrants</strong> dédiés
              </li>
              <li>
                <strong>1300 bénévoles</strong> impliqués
              </li>
            </motion.ul>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProtectionEnfance;
