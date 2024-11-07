import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "../../../assets/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-background text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-3 footer-section">
            <img src={Logo} alt="Logo" className="footer-logo mb-3" />
            <p className="grey_text">
              4 Rue Bayt Lahm, <br /> Quartier Palmier <br /> 20100 Casablanca <br /> Maroc
            </p>
            <p>
              <span className="grey_text">Tél:</span> +212 610 023 555
            </p>
            <p>
              <span className="grey_text">Email:</span> contact@babrayan.ma
            </p>
          </div>

          {/* Discover Section */}
          <div className="col-md-3 footer-section links_social">
            <h4>Découvrir</h4>
            <p>Missions & Valeurs</p>
            <p>Gouvernance</p>
            <p>Nos Projets</p>
            <p>Nos Partenaires</p>
            <p>Nous Contacter</p>
          </div>

          {/* Support Section */}
          <div className="col-md-3 footer-section links_social">
            <h4>Soutenir</h4>
            <p>Faire un don</p>
            <p>Parrainer un enfant</p>
            <p>Mécénat & Partenariat</p>
            <p>Bénévolat</p>
            <p>Événements</p>
          </div>

          {/* Follow Section */}
          <div className="col-md-3 footer-section links_social">
            <h4>Suivre</h4>
            <p>Actualités</p>
            <p>Facebook</p>
            <p>Instagram</p>
            <p>LinkedIn</p>
            <p>Youtube</p>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Copyright Section */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small mb-0">
              Politique de confidentialité / Association Bab Rayan © 2015-2025 | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
