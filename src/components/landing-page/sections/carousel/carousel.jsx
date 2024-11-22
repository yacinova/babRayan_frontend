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
      title: "Parce que chaque enfant mérite un bon départ dans la vie",
      description: "L’association Bab Rayan, reconnue d’utilité publique, œuvre depuis 2014 à accompagner les enfants vulnérables vers un avenir prometteur. ",
    },
    {
      image: Pic2,
      title: "Protéger, éduquer, accompagner",
      description: `Bab Rayan mène un combat quotidien pour défendre les droits des enfants en leur offrant un foyer sécurisant et une éducation de qualité.`,
    },
    {
      image: Pic6,
      title: "Former et Intégrer",
      description: 'Le Centre de Formation et d’Insertion prépare nos jeunes à devenir des citoyens automnes et engagés.',
    },
    {
      image: Pic7,
      title: "Un Engagement qui a du sens",
      description: "Nous nous engageons avec vous à offrir les ressources et l’accompagnement essentiels à l’épanouissement et l’autonomie de ces jeunes.",
    },

  ];

  const navigateTo = (url) => {
    window.location.href = url;
  }
  return (
    <div className='images_carousel'>

<Carousel autoplaySpeed={3000} speed={1500} autoplay dots arrows>
        {slides.map((slide, index) => (
          <div key={index} className="content_carousel">
            <div className="carousel_slide">
              <img src={slide.image} alt="slide background" className="slide_background" />
              <div className="carousel_overlay"></div> {/* Dark overlay */}
              <div className="carousel_text">
                <h1>{slide.title}</h1>
                <p className='desc_carousel'>{slide.description}</p>
                <button onClick={() => navigateTo("/about")} >En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
