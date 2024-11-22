import React, { useState } from 'react';
import './rubriques.css';
import Foyer from '../../../../assets/3rubrique/twogirls.jpg';
import Ecole from '../../../../assets/3rubrique/education.jpg';
import CFI from '../../../../assets/3rubrique/cfii.jpg';

export default function Rubriques() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const rubriques = [
    { id: 1, title: "Protection de l'enfance", image: Foyer, desc: "Depuis 2014, Bab Rayan se consacre à la protection de l’enfance, assurant un environnement sûr et bienveillant pour les enfants vulnérables.", butt: "Découvrir le foyer Bab Rayan" },
    { id: 2, title: "Education et scolarité", image: Ecole, desc: "En intégrant ces jeunes dans un parcours éducatif adapté à leurs besoins, nous leur donnons les outils nécessaires pour construire leur avenir.", butt: "Découvrir l’école Palmier" },
    { id: 3, title: "Formation et insertion professionnelle", image: CFI, desc: "Des formations offertes dans des secteurs variés tels que l'hôtellerie-restauration et les métiers du digital pour accompagner ces jeunes vers une insertion professionnelle réussie.", butt: "Découvrir le CFI" },
  ];

  return (
    <section className="my-3 rubriques mx-5">
      <div className="row w-100">
        {rubriques.map((rubrique, index) => (
          <div key={index} className="card border-0 bg-transparent text-light h-100 position-relative" onMouseEnter={() => setHoveredCard(rubrique.id)} onMouseLeave={() => setHoveredCard(null)}>
            <div className="bg-transparent border-0 position-relative">
              <div className="image-container">
                <div className="dark-overlay"><h5 className={`card-title ${hoveredCard === rubrique.id ? 'hide-title' : ''}`}>
                  {rubrique.title}
                </h5></div> {/* Dark overlay added */}
                <img
                  src={rubrique.image}
                  className="card-img-custom "
                  alt={rubrique.title}
                />

                <div className={`text-overlay ${hoveredCard === rubrique.id ? 'show' : 'hide'}`}>
                  <p>{rubrique.desc}</p>
                  <button className="btn">{rubrique.butt}</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
