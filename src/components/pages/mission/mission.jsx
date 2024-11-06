import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './mission.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';

const MissionPage = () => {
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


  return (
    <div className="mission-page">
           {/* Hero Section */}
           <motion.div 
             ref={ref}
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
            <h1 className="hero-title">Notre Mission</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>
      {/* Hero Section fake*/}
      <section className="m-section">
        <img src={CFI} alt="Event" className="m-image" />
        <div className="m-text">
          <h2>« Parce que tous les enfants sont égaux et méritent d’avoir une chance »</h2>
          <p>
            L'association Bain Bayan est une organisation non gouvernementale pour la protection de l'enfance. 
            Notre mission est d’offrir aux enfants en situation de précarité les mêmes chances que tout autre enfant. 
            Nous croyons en leur capacité de surmonter leurs difficultés pour réussir demain.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <h3>Notre mission</h3>
        <p className="mission-description">
          « Nous avons la conviction que tout enfant est capable de réussir demain, bien au-delà de ce qu’il manifeste aujourd’hui. 
          Qu’il saura dépasser sa situation actuelle, ses blocages et ses blessures »
        </p>
        <div className="mission-cards">
          <div className="mission-card">
            <img src={CFI} alt="Protéger" className="mission-image" />
            <h4>Protéger :</h4>
            <p>En finir avec la violence et offrir un cadre sûr pour assurer le bien-être et la sécurité des enfants.</p>
          </div>
          <div className="mission-card">
            <img src={CFI}  alt="Éduquer" className="mission-image" />
            <h4>Éduquer :</h4>
            <p>Favoriser l’éducation et le développement personnel, matériel et affectif des enfants, aujourd’hui et demain.</p>
          </div>
          <div className="mission-card">
            <img src={CFI}  alt="Intégrer" className="mission-image" />
            <h4>Intégrer :</h4>
            <p>Assurer un lien et un avenir pour chaque enfant en facilitant son insertion et sa participation active à la société.</p>
          </div>
          <div className="mission-card">
            <img src={CFI}  alt="Accompagner" className="mission-image" />
            <h4>Accompagner :</h4>
            <p>Donner de l’espoir et cheminer aux côtés des enfants dans leur évolution, en restant à l’écoute de leurs besoins et de leurs joies.</p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h3>Nos Valeurs</h3>
        <div className="values-cards">
          <div className="value-card">
            <img src={CFI}  alt="Don de soi" className="value-image" />
            <h4>Don de soi</h4>
            <p>Respecter l’autre et donner sans compter, pour soi et pour le bien-être de la communauté.</p>
          </div>
          <div className="value-card">
            <img src={CFI}  alt="Respect" className="value-image" />
            <h4>Respect</h4>
            <p>Respecter l’autre dans ce qu’il est, et ce qu’il veut devenir, dans la joie et la bienveillance.</p>
          </div>
          <div className="value-card">
            <img src={CFI}  alt="Solidarité" className="value-image" />
            <h4>Solidarité</h4>
            <p>Nous unissons nos forces, nos compétences et nos moyens.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MissionPage;
