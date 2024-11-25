import React from 'react';
import { Carousel } from 'antd';
import "./carousel.css";
import Pic2 from "../../../../assets/carousel_imgs/pic2.jpg";
import Pic3 from "../../../../assets/carousel_imgs/pic3.jpg";
import Pic6 from "../../../../assets/carousel_imgs/pic6.jpg";
import Pic7 from "../../../../assets/carousel_imgs/pic7.jpg";

export default function CustomCarousel() {
  const slides = [

    {
      image: Pic3,
      title: "Chaque enfant mérite un bon départ dans la vie",
      description: "L’association Bab Rayan agit depuis 2014 pour transformer la vie des enfants en difficulté. ",
    },
    {
      image: Pic2,
      title: "Protéger, éduquer, accompagner",
      description: `Bab Rayan défend les droits des enfants en leur offrant un foyer sécurisant et une éducation de qualité.`,
    },
    {
      image: Pic6,
      title: "Former et Intégrer",
      description: 'Le Centre de Formation et d’Insertion prépare nos jeunes à devenir des citoyens automnes et engagés.',
    },
    {
      image: Pic7,
      title: "Un Engagement qui a du sens",
      description: "Rejoignez le combat pour la protection de l’enfance, engagez-vous en devenant donateur, partenaire ou bénévole.",
    },

  ];

  const navigateTo = (url) => {
    window.location.href = url;
  }
  return (
    <div className='images_carousel'>

      <Carousel autoplaySpeed={99993000} speed={1500} autoplay dots arrows>
        {slides.map((slide, index) => (
          <div key={index} className="content_carousel">
            <div className="carousel_slide">
              <img src={slide.image} alt="slide background" className="slide_background" />
              <div className="carousel_overlay"></div>
              <div className="carousel_text">
                <h1>{slide.title}</h1>
                <p className='desc_carousel'><span>{slide.description}</span></p>
                <button onClick={() => navigateTo("/about")} >En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
