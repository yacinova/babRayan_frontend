import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './mission.css';
import CFI from '../../../assets/3rubrique/CFI.jpg';

const Card = ({ title, text, image, isValueCard = false }) => (
  <div className={isValueCard ? 'value-card' : 'mission-card'}>
    <img src={image} alt={`Image representing ${title}`} className={isValueCard ? 'value-image' : 'mission-image'} loading="lazy" />
    <h4>{title}</h4>
    <p>{text}</p>
  </div>
);

const MissionPage = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  const missionCards = [
    { title: "Protéger", text: "En finir avec la violence et offrir un cadre sûr pour assurer le bien-être et la sécurité des enfants.", image: CFI },
    { title: "Éduquer", text: "Favoriser l’éducation et le développement personnel, matériel et affectif des enfants, aujourd’hui et demain.", image: CFI },
    { title: "Intégrer", text: "Assurer un lien et un avenir pour chaque enfant en facilitant son insertion et sa participation active à la société.", image: CFI },
    { title: "Accompagner", text: "Donner de l’espoir et cheminer aux côtés des enfants dans leur évolution, en restant à l’écoute de leurs besoins et de leurs joies.", image: CFI }
  ];

  const valuesCards = [
    { title: "Don de soi", text: "Respecter l’autre et donner sans compter, pour soi et pour le bien-être de la communauté.", image: CFI },
    { title: "Respect", text: "Respecter l’autre dans ce qu’il est, et ce qu’il veut devenir, dans la joie et la bienveillance.", image: CFI },
    { title: "Solidarité", text: "Nous unissons nos forces, nos compétences et nos moyens.", image: CFI }
  ];

  return (
    <div className="mission-page">
      {/* Hero Section */}
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">Notre Mission</h1>
            <div className="divider"></div>

          </motion.div>
        </div>
      </motion.div>

      {/* Mission Statement Section */}
      <section className="m-section">
        <img src={CFI} alt="Event illustrating mission statement" className="m-image" loading="lazy" />
        <div className="m-text">
          <h2>« Parce que tous les enfants sont égaux et méritent d’avoir une chance »</h2>
          <p>
            L'association Bain Bayan est une organisation non gouvernementale pour la protection de l'enfance.
            Notre mission est d’offrir aux enfants en situation de précarité les mêmes chances que tout autre enfant.
            Nous croyons en leur capacité de surmonter leurs difficultés pour réussir demain.
          </p>
        </div>
      </section>

      {/* Mission Details Section */}
      <section className="mission-section">
        <h3>Notre mission</h3>
        <p className="mission-description">
          « Nous avons la conviction que tout enfant est capable de réussir demain, bien au-delà de ce qu’il manifeste aujourd’hui.
          Qu’il saura dépasser sa situation actuelle, ses blocages et ses blessures »
        </p>
        <div className="mission-cards">
          {missionCards.map((card) => (
            <Card key={card.title} title={card.title} text={card.text} image={card.image} />
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <h3>Nos Valeurs</h3>
        <div className="values-cards">
          {valuesCards.map((card) => (
            <Card key={card.title} title={card.title} text={card.text} image={card.image} isValueCard />
          ))}
        </div>
      </section>
    </div>
  );
};

export default MissionPage;