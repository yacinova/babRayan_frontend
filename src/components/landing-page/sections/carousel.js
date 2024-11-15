import React from 'react';
import { Carousel } from 'antd';
import "./sections.css";
import Pic1 from "../../../assets/bg.webp";
import Pic2 from "../../../assets/carousel_imgs/pic2.jpg";
import Pic3 from "../../../assets/carousel_imgs/pic3.jpg";

export default function CustomCarousel() {
  const slides = [
    {
      image: Pic1,
      title: "Un engagement qui a du sens",
      description: "Ensemble, créons un impact positif pour l'avenir",
    },
    {
      image: Pic2,
      title: "Notre Mission",
      description: "Transformer des vies, une action à la fois",
    },
    {
      image: Pic3,
      title: "Impact Durable",
      description: "Des solutions concrètes pour un changement positif",
    }
  ];

  return (
    <div className='images_carousel'>
      <Carousel autoplaySpeed={1500} autoplay arrows >
        {slides.map((slide, index) => (
          <div key={index} className="content_carousel">
            <div className="carousel_slide">
              <img src={slide.image} alt="slide background" className="slide_background"/>
              <div className="carousel_overlay"></div> {/* Dark overlay */}
              <div className="carousel_text">
                <h2>{slide.title}</h2>
                <p className='desc_carousel'>{slide.description}</p>
                <button >En savoir plus</button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
