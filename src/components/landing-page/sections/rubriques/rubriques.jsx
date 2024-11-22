import React from 'react';
import './rubriques.css';
import Foyer from '../../../../assets/3rubrique/twogirls.jpg';
import Ecole from '../../../../assets/3rubrique/education.jpg';
import CFI from '../../../../assets/3rubrique/cfii.jpg';

const Rubriques = () => {

  const rubriques = [
    { id: 1, title: "Protection de l'enfance", image: Foyer, desc: "Depuis 2014, Bab Rayan se consacre à la protection de l’enfance, assurant un environnement sûr et bienveillant pour les enfants vulnérables.", butt: "Découvrir le foyer Bab Rayan" },
    { id: 2, title: "Education et scolarité", image: Ecole, desc: "En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons les outils nécessaires pour construire leur avenir.", butt: "Découvrir l’école Palmier" },
    { id: 3, title: "Formation et insertion professionnelle", image: CFI, desc: "Des formations offertes dans des secteurs variés tels que l'hôtellerie-restauration et les métiers du digital pour accompagner ces jeunes vers une insertion professionnelle réussie.", butt: "Découvrir le CFI" },
  ];

  return (
    <div className="rubriques d-flex justify-content-center gap-5 my-4">
      {rubriques.map((rub) => (
        <div className="rubrique-card" key={rub.id}>
          <div className="img-container" style={{ cursor: 'pointer' }}>
            <img src={rub.image} alt={rub.title} className="card-img" />
            <div className="overlay-text">
              <span>{rub.desc}</span><br />
              <button className="btn">{rub.butt}</button>
            </div>
            <div className="card-title">{rub.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rubriques;
