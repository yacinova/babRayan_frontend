// PresidentMessage.js
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './mot.css';
import presidente from '../../../assets/3rubrique/foyer.jpg'

const PresidentMessage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="president-message">
      {/* Hero Section */}
      <motion.div 
        className="hero-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-overlay" />

        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Mot de la Présidente</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Introduction Section */}
      <div className="intro-section">
        <motion.h2 
          className="section-title"
          variants={fadeInUp}
        >
          Un Message de Compassion et d'Action
        </motion.h2>
        <motion.p 
          className="intro-text"
          variants={fadeInUp}
        >
          En tant que présidente, je suis honorée de partager notre vision et notre engagement envers un avenir meilleur. Chaque action compte, et ensemble, nous pouvons transformer des vies.
        </motion.p>
      </div>

      {/* President Section */}
      <div className="president-section">
        <motion.div 
          ref={ref}
          animate={controls}
          variants={staggerChildren}
          className="president-grid"
        >
          {/* Image Column */}
          <motion.div 
            variants={fadeInUp}
            className="president-image-container"
          >
            <div className="image-wrapper">
              <img 
                src={presidente} 
                alt="FATIMA ZAHRA HAMROUDI RATIBE" 
                className="president-image"
              />
              <div className="image-overlay"></div>
            </div>
            <div className="decorative-circle decorative-circle-red"></div>
            <div className="decorative-circle decorative-circle-blue"></div>
          </motion.div>

          {/* Content Column */}
          <motion.div variants={fadeInUp} className="president-content">
            <h2 className="president-name">FATIMA ZAHRA HAMROUDI RATIBE</h2>
            <h3 className="president-title">Fondatrice PRÉSIDENTE</h3>
            <div className="president-bio">
              <p>
                Œuvrant depuis plus de 15 ans dans le domaine de l'aide humanitaire, engagée dans le milieu associatif local depuis son plus jeune âge, la présidente de notre association fut, avant d'être élue présidente nationale en mai 2019, une grande bénévole et membre.
              </p>
              <p>
                Attachée à une bonne gouvernance et à une gestion saine et transparente, elle mène la vie associative de BAB RAYAN d'une main de maître. En phase avec les réalités du terrain qu'elle n'a cessé d'arpenter au cours de sa carrière.
              </p>
            </div>
            <motion.div className="cta-container">
              <button className="cta-button">
                Apprendre Plus
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <motion.h2 className="section-title">
          Ce que disent nos membres
          <hr/> 
        </motion.h2>
        <motion.div 
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={staggerChildren}
          className="testimonials-grid"
        >
          {[
            "La présidente inspire par son engagement et sa passion.",
            "Son leadership a transformé notre communauté.",
            "Elle est un modèle de dévouement et de compassion.",
            "Son approche transparente renforce notre confiance."
          ].map((quote, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="testimonial-card"
            >
              <p className="testimonial-text">"{quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Gallery Section */}
      <div className="gallery-section">
        <div className="gallery-container">
          <motion.div 
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={staggerChildren}
            className="gallery-grid"
          >
            {[1, 2, 3].map((index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="gallery-item"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={`../../../assets/carousel_imgs/pic-${index}.jpg`}
                  alt={`Gallery image ${index}`}
                  className="gallery-image"
                />
                <div className="gallery-overlay"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PresidentMessage;

