import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './gouvernance.css';
 import CFI from '../../../assets/3rubrique/CFI.jpg';
import pic1 from '../../../assets/gouvernance/gen.jpg';
import pic2 from '../../../assets/gouvernance/pic3.jpg';
import pic3 from '../../../assets/gouvernance/pic4.jpg';

const Gouvernance = () => {
  const ref = useRef(null);

  return (
    <div className="general-page"> 
      {/* Hero Section */}
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">Gouvernance</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className='header'>
          <p>
          Organigramme Général
          </p>
          <h2>
          Nous, engagés à titres divers et complémentaires dans l’association Bab Rayan pour l’aide à l’enfance
          </h2>
      </div>

      <div className="gouvernance-page"> 
        {/* Board of Directors Section */}
        <section className="section-container">
          <div className="image-text-wrapper">
            <div className="image-container">
              <img src={pic1} alt="Image of Conseil d'administration" />
            </div>
            <div className="text-container">
              <h2>Conseil d'administration</h2>
              <p>
                Le Conseil d'administration est l'instance décisionnaire. Il se réunit au moins quatre fois par an. Son rôle consiste à adopter le fonctionnement, déterminer la politique générale et suivre les orientations stratégiques. Il est composé de membres administrateurs.
              </p>
            </div>
          </div>
        </section>

        {/* General Management Section */}
        <section className="section-container">
          <div className="image-text-wrapper reverse">
            <div className="image-container">
              <img src={pic2} alt="Image of Direction Générale" />
            </div>
            <div className="text-container">
              <h2>Direction Générale</h2>
              <p>
                La Direction Générale gère les établissements et services sous l’autorité du Représentant de l'État. Elle assure une fonction stratégique dans la gestion des affaires, en lien avec le Conseil d'Administration et l’association, ainsi que le contexte économique, politique et scientifique.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="image-text-wrapper">
            <div className="image-container">
              <img src={pic3} alt="Image of Conseil d'administration" />
            </div>
            <div className="text-container">
              <h2>Partenaires institutionnels</h2>
              <p>
              INDH (Initiative Nationale pour les Droits de l’Homme)
Wilaya Grand Casablanca
AREF Grand Casablanca (Académie Régional de l’Enseignement et de la Formation)
Entraide Nationale Casa Anfa              </p>
            </div>
          </div>
        </section>
        

        {/* <h2> Transparence financière</h2> */}

        {/* Institutional Partners Section */}
        <section className="partners-section">
          <h2>Partenaires institutionnels</h2>
          <div className="partners-logos">
            <img src={CFI} alt="Logo of Partner 1" />
            <img src={CFI} alt="Logo of Partner 2" />
            <img src={CFI} alt="Logo of Partner 3" />
            <img src={CFI} alt="Logo of Partner 4" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gouvernance;
