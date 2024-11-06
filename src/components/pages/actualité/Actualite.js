import Pic1 from "../../../assets/v.jpg"
import React, { useState } from 'react';
import { ChevronRight, Heart, Share2, Calendar } from 'lucide-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Actualite.css';

const Actualite = () => {
  const [news] = useState([
    {
      id: 1,
      date: '5 Nov 2024',
      title: 'Distribution de fournitures scolaires',
      description: 'Notre équipe a distribué des fournitures scolaires à 50 enfants dans le besoin.',
      likes: 24,
      shares: 12,
      image: Pic1
    },
    {
      id: 2,
      date: '1 Nov 2024',
      title: 'Nouveau programme de parrainage',
      description: 'Lancement de notre nouveau programme de parrainage pour aider plus d\'enfants.',
      likes: 18,
      shares: 8,
      image: Pic1
    }
  ]);

  return (
    <section className="actualite-section">
      <div className="container py-5">
        {/* En-tête */}
        <div className="text-center mb-5">
          <h1 className="display-4 blue mb-3">Actualités Bab Rayan</h1>
          <div className="d-flex align-items-center justify-content-center gap-2 orange-text">
            <ChevronRight className="chevron-animate" />
            <p className="lead mb-0">Suivez nos dernières actions</p>
            <ChevronRight className="chevron-animate" />
          </div>
        </div>

        {/* Grille d'actualités */}
        <div className="row g-4">
          {news.map((item) => (
            <div key={item.id} className="col-md-6">
              <article className="card news-card h-100" onClick={() => window.location.href = `/actualites/${item.id}`} >
                <img src={item.image} className="card-img-top news-image" alt={item.title} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <Calendar size={16} className="red" />
                    <small className="red">{item.date}</small>
                  </div>

                  <h2 className="card-title h5 blue">{item.title}</h2>
                  <p className="card-text text-muted flex-grow-1">{item.description}</p>

                  <div className="d-flex justify-content-between align-items-center border-top pt-3 mt-3">
                    <button className="btn btn-link p-0 orange-text d-flex align-items-center gap-2">
                      <Heart size={18} />
                      <span>{item.likes}</span>
                    </button>

                    <button className="btn btn-link p-0 blue d-flex align-items-center gap-2">
                      <Share2 size={18} />
                      <span>{item.shares}</span>
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Actualite;