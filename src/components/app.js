import React from 'react';
import { Outlet } from 'react-router-dom';
import "./app.css"
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';

export default function Index() {
  return (
    <section className='background'>
      <Navbar />
      <Outlet />
      <Footer />
      <button onClick={() => window.location.href = "donation"} className='red_color don_icon_animate' title='Faire un DON'>
        <i className="fa-solid fa-hand-holding-heart"></i>
      </button>
    </section>
  );
}
