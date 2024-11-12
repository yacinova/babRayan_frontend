import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import "./app.css"
import Navbar from './layout/navbar/Navbar';
import Footer from './layout/footer/Footer';

export default function Index() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const segment = path.split('/')[1];
    setUrl(segment);
  }, []);


  return (
    <section className='background'>
      {/* if the url is /dashbord then ignore navbar */}
      {!url.includes("dashbord") && !url.includes("dashboard") ? <Navbar /> : null}
      <Outlet />
      {!url.includes("dashbord") && !url.includes("dashboard") ? <Footer /> : null}


      {!url.includes("dashbord") && !url.includes("dashboard") ?
        <button onClick={() => window.location.href = "donation"} className='red_color don_icon_animate' title='Faire un DON'>
          <i className="fa-solid fa-hand-holding-heart"></i>
        </button> : null}


    </section>
  );
}
