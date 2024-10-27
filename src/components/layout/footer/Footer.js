import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa"; 
import Logo from "../../../assets/Logo.png";


function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4">
          <img src={Logo} alt="" />
            
            <h5></h5>
            <h5></h5>
            <h5></h5>
            <h5>À propos de nous</h5>
            <p className="small">
            Nous sommes une organisation à but non lucratif qui se consacre à l'amélioration de la vie des enfants et des familles dans le besoin. Notre mission est de créer un avenir meilleur grâce à l'éducation, aux soins de santé et au soutien communautaire.            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Accueil</a></li>
              <li><a href="/about" className="text-light text-decoration-none">À propos de nous</a></li>
              <li><a href="/programs" className="text-light text-decoration-none">Nos programmes</a></li>
              <li><a href="/donate" className="text-light text-decoration-none">Donate</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact Us</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li><i className="bi bi-geo-alt-fill"></i> Bv Palemier., Casablanca, Maroc</li>
              <li><i className="bi bi-telephone-fill"></i> +212 6456 7890</li>
              <li><i className="bi bi-envelope-fill"></i> BABRAYAN@association.org</li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-3">
              <a href="https://facebook.com" className="text-light me-3" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="text-light me-3" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="text-light me-3" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="text-light" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-4" />

        {/* Copyright Section */}
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="small mb-0">&copy; {new Date().getFullYear()} BAB RAYAN. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;