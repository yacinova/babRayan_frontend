import React from 'react';
import "./sections.css";
import Pic1 from "../../../assets/articles/1.png"
import Pic2 from "../../../assets/articles/2.png"
import Psg from "../../../assets/actualité/psg.jpg"
import Diplome from "../../../assets/actualité/remiseDiplome.jpg"
import Aiguebelle from "../../../assets/actualité/Aiguebelle.jpg"
import Theatre from "../../../assets/actualité/Theatre.jpg"

export default function Blogs() {

  const blogs = [
    {
      id: 1,
      title: "Remise des diplômes de la deuxième promotion du CFI",
      image: Diplome,
      text: `l'Association Bab Rayan a eu l'honneur de célébrer ce 28 Octobre 2024, la réussite de la deuxième promotion de diplômés de son Centre de Formation et d'Insertion.<br />
      Le CFI propose aux jeunes issus des EPS et en situation de précarité une formation qualifiante dans les métiers de l’hôtellerie et de la restauration. Aujourd'hui, plus de 120 jeunes franchissent une étape clé vers l'emploi, grâce au soutien de nos entreprises partenaires.<br />
      Nous avons été honorés par la présence de Mr le Wali, le Gouverneur et Mme la Maire de Casablanca.`
    },
    {
      id: 2,
      title: "Convention entre Newrest et le CFI pour offrir une formation en alternance de qualité ",
      image: Pic2,
      text: `Le CFI à Bab Rayan & Newrest s’unissent pour offrir une formation diplômante en restauration, une première qui changera la vie d’une promotion engagée de jeunes en difficulté ! <br />
      D’ici août prochain, ils auront non seulement acquis des compétences, mais aussi trouvé un projet de vie qui leur ouvre les portes d’un avenir prometteur. `
    },
    {
      id: 3,
      title: "Aiguebelle : Un partenaire engagé avec nos jeunes du CFI",
      image: Aiguebelle ,
      text: `Notre partenaire Aiguebelle a généreusement organisé cet automne, une journée de visite et de formation en chocolaterie pour les jeunes du Centre de Formation et d’Insertion (CFI) de Bab Rayan.<br />
      Nos étudiants ont eu l'opportunité unique de découvrir les secrets de la fabrication du chocolat, tout en explorant le fonctionnement de l'usine. Cette expérience immersive a enrichi leurs connaissances et stimulé leur passion pour l’art culinaire.`
    },
    {
      id: 4,
      title: "Une sortie au théâtre pour voir le petit prince",
      image: Theatre,
      text: `Les enfants de Bab Rayan ont assisté au premier spectacle de la saison de l’École du Jeune Spectateur : Le Petit Prince. <br />
      Grâce à la générosité de la Fondation Achraf Hakimi, nos jeunes ont été accueillis au Complexe Culturel Al Hassani, où ils ont plongé dans l'univers magique de cette œuvre intemporelle. <br />
      Un grand merci à nos partenaires pour offrir à ces enfants de précieux moments de théâtre.`
    },
    {
      id: 5,
      title: "Cérémonie d’ouverture de PSG Academy",
      image: Psg,
      text: `La cérémonie d’ouverture de la PSG Academy Maroc s’est tenue le 11 novembre à Casablanca, en présence des membres de la PSG Academy et de Tamaris Foot and Paddle.<br />
      Nos jeunes de Bab Rayan ont eu l’immense privilège de rencontrer Achraf Hakimi, l’invité d’honneur de cet événement inoubliable… et même de jouer un match contre lui ! <br />
      Une sélection de nos jeunes rejoindra la toute nouvelle équipe de la PSG Academy Maroc. Une opportunité exceptionnelle qui ouvre les portes de l’excellence sportive.`
    }
  ];

  return (
    <section className='mt-5 blogs'>
      <h3 className="fw-bold text-center">ACTUALITÉS</h3>
      <div className="mb-5 mt-3 text-center"> <hr /> </div>
      {blogs.map((blog, index) => (
        <div key={index} className="row mb-5 w-100 justify-content-center align-items-center">
          <div className="col-12 col-md-5">
            <img src={blog.image} alt="orphelinat" className='img-fluid' style={{ height: "400px", objectFit: "cover", width: "650px", borderRadius: "20px" }} />
          </div>
          <div className="col-12 col-md-5" style={{ color: "#003049" }}>
            <h2>{blog.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: blog.text }} />
            <button className='btn'>Découvrir Plus</button>
          </div>
        </div>
      ))}
      <div className="text-center mb-5">
        <button className='btn' onClick={() => window.location.href = `/actualites`}>Voir tous les actualités  </button>
      </div>
    </section>
  );
}