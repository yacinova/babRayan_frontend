import React, { useState, useEffect } from 'react';
import { Calendar, Heart, Share2, ArrowLeft } from 'lucide-react';
import Pic1 from "../../../assets/v.jpg";
import './Actualite.css';

export default function ActualiteDetails() {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="actualite-details">
      <div className="container py-5">
        {/* Bouton retour */}
        <button className="back-button mb-4 d-flex align-items-center gap-2 blue" onClick={() => window.location.href = `/actualites`}>
          <ArrowLeft />
          <span>Retour aux actualités</span>
        </button>

        <div className={`content-wrapper ${isVisible ? 'visible' : ''}`}>
          {/* En-tête de l'article */}
          <div className="header-section text-center mb-4">
            <small className="date d-flex align-items-center justify-content-center gap-2 mb-3">
              <Calendar size={16} className="red" />
              <span className="red">5 Novembre 2024</span>
            </small>
            <h1 className="display-4 blue mb-4">Distribution de fournitures scolaires</h1>
          </div>

          {/* Image principale */}
          <div className="main-image-container mb-5">
            <img src={Pic1} className="main-image rounded shadow"/>
          </div>

          {/* Contenu de l'article */}
          <div className="article-content">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <article className="content-block">
                  <p className="lead mb-4">
                    Notre équipe a organisé une distribution massive de fournitures scolaires, 
                    permettant à plus de 50 enfants de débuter leur année scolaire dans les 
                    meilleures conditions.
                  </p>
                  
                  <p className="mb-4">
                    Cette initiative s'inscrit dans notre mission continue de soutien à 
                    l'éducation des enfants défavorisés. Chaque enfant a reçu un kit complet 
                    comprenant des cahiers, des stylos, des crayons et d'autres fournitures 
                    essentielles.
                  </p>

                  <blockquote className="blockquote my-5 p-4 border-start border-4">
                    <p className="mb-2">
                      "L'éducation est la clé pour ouvrir la porte d'or de la liberté."
                    </p>
                    <footer className="blockquote-footer">
                      George Washington Carver
                    </footer>
                  </blockquote>

                  <p>
                    Nous tenons à remercier tous nos donateurs et bénévoles qui ont rendu 
                    cette distribution possible. Votre générosité fait une réelle différence 
                    dans la vie de ces enfants.
                  </p>
                </article>

                {/* Section interactions */}
                <div className="interaction-section d-flex justify-content-between align-items-center mt-5 pt-4 border-top">
                  <button className="btn btn-link p-0 orange-text d-flex align-items-center gap-2">
                    <Heart size={18} />
                    <span>24 likes</span>
                  </button>
                  
                  <button className="btn btn-link p-0 blue d-flex align-items-center gap-2">
                    <Share2 size={18} />
                    <span>Partager</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}