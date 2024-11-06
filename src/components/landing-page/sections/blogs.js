import React from 'react';
import "./sections.css";
import Pic1 from "../../../assets/articles/1.png"
import Pic2 from "../../../assets/articles/2.png"

export default function Blogs() {
  return (
    <section className='mt-5 blogs'>
      <div className="row mb-5 w-100 justify-content-center align-items-center">
        <div className="col-12 col-md-5">
          <img src={Pic1} alt="orphelinat" className='img-fluid' style={{ height: "300px", objectFit : "cover" ,  width: "650px", borderRadius: "20px" }} />
        </div>
        <div className="col-12 col-md-5" style={{ color: "#003049" }}>
          <h2>L'orphelinat "Les Petits Étoiles"</h2>
          <br />
          L'orphelinat "Les Petits Étoiles" offre un refuge chaleureux et aimant aux enfants sans famille. Nous nous engageons à leur fournir non seulement un toit, mais aussi un environnement propice à leur épanouissement. Grâce à notre équipe dévouée de bénévoles et de professionnels, chaque enfant reçoit l'éducation et l'attention dont il a besoin. Rejoignez-nous dans notre mission pour apporter espoir et bonheur à ces enfants, car chaque sourire compte.
          <br />
          <button className='btn'>Voir Plus</button>
        </div>
      </div>
      <div className="row mb-5  w-100 justify-content-center align-items-center">
        <div className="col-12 col-md-5">
          <img src={Pic2} alt="orphelinat" className='img-fluid' style={{ height: "300px", objectFit : "cover" ,  width: "650px", borderRadius: "20px" }} />
        </div>
        <div className="col-12 col-md-5" style={{ color: "#003049" }}>
          <h2>L'orphelinat "Les Petits Étoiles"</h2>
          <br />
          L'orphelinat "Les Petits Étoiles" offre un refuge chaleureux et aimant aux enfants sans famille. Nous nous engageons à leur fournir non seulement un toit, mais aussi un environnement propice à leur épanouissement. Grâce à notre équipe dévouée de bénévoles et de professionnels, chaque enfant reçoit l'éducation et l'attention dont il a besoin. Rejoignez-nous dans notre mission pour apporter espoir et bonheur à ces enfants, car chaque sourire compte.
          <br />
          <button className='btn'>Voir Plus</button>
        </div>
      </div>
      <div className="text-center mb-5">
        <button className='btn' onClick={() => window.location.href = `/actualites`}>Voir tous les actualités  </button>
      </div>
    </section>
  );
}