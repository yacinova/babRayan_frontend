import React from 'react'
import './landing.css'
import CarouselComponent from './sections/carousel';
import Rubriques from './sections/rubriques';
import Chiffre from './sections/chiffre';
import Vdeo from './sections/video';
import Actions from './sections/Actions';
import Blogs from './sections/blogs';

export default function landing() {
  return (
    <section>
      <CarouselComponent />
      <Rubriques />
      <Chiffre />
      <Vdeo />
      <Actions />
      <Blogs />

    
    </section>
  )
}
