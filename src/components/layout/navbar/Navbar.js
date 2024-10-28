import React, { useEffect, useState } from 'react';
import "./Navbar.css"
import Logo from "../../../assets/Logo.png"

export default function Navbar() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const path = window.location.pathname; 
    const segment = path.split('/')[1]; 

    setUrl(segment); 
  }, []); 

  return (
    <div className={url === "" ? "sticky-top" : ""}>
      <nav className="navbar navbar-expand-lg navbar-background ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse links_nav" id="navbarText">
            <ul className="navbar-nav  mx-auto mb-2 mb-lg-0 ">
              <li className="navd-item">
                <a className="nav-link" href="#">Nous Connaître</a>
              </li>
              <li className="nadv-item">
                <a className="nav-link" href="#">Notre Modèle</a>
              </li>
              <li className="ndav-item">
                <a className="nav-link" href="#">Nous Soutenir</a>
              </li>
              <li className="ndav-item">
                <a className="nav-link" href="#">Nous Suivre</a>
              </li>
            </ul>
            <div className="buttons_nav">
              <button className='btn login_button' onClick={() => window.location.href = "login"}>Se Connecter</button>
              <button className='btn register_button' onClick={() => window.location.href = "register"}>S'inscrire</button>
              <button className='btn don_button' onClick={() => window.location.href = "donation"}> Faire un don!</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
