import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "./contact.css";
import { useInView } from 'react-intersection-observer';
// import child1 from "../../../assets/cont.png";
// import child2 from "../../../assets/cont.png";
// import child3 from "../../../assets/cont.png";
// import child4 from "../../../assets/cont.png";
// import child5 from "../../../assets/cont.png";
// import child6 from "../../../assets/cont.png";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const controls = useAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) controls.start('visible');
  }, [controls, inView]);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <motion.div ref={ref} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">Nous Contacter</h1>
            <div className="divider"></div>

          </motion.div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <motion.h2 variants={fadeInUp} initial="hidden" animate={controls}>
            Send us a message
          </motion.h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group contact_form">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div className="form-group contact_form">
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
              />
            </div>
            <div className="form-group contact_form">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Type your message here"
              ></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </div>
        <div className="map-info">
          {/* Map */}
          <div className="map-container">
            <motion.h2 variants={fadeInUp} initial="hidden" animate={controls}>
              Find Us
            </motion.h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.846981346241!2d-7.632492684855834!3d33.592882980730195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDM1JzM0LjQiTiA3wrAzNyc1Ny4wIlc!5e0!3m2!1sen!2sma!4v1635789876543!5m2!1sen!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg"
            ></iframe>
          </div>
          {/* Contact Information */}
          <div className="info-container">
            <motion.h2 variants={fadeInUp} initial="hidden" animate={controls}>
              Our Offices
            </motion.h2>
            <div className="office-details">
              <h4>Main Office</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> 4 Rue Beja Latin,
                Quarter Palmer - Casablanca MA
              </p>
              <p>
                <i className="fas fa-phone"></i> +212 610 123 456
              </p>
              <p>
                <i className="fas fa-envelope"></i> contact@example.ma
              </p>
            </div>
            <div className="office-details">
              <h4>Branch Office</h4>
              <p>
                <i className="fas fa-map-marker-alt"></i> Quarter Palmer -
                Casablanca MA
              </p>
              <p>
                <i className="fas fa-phone"></i> +212 610 123 789
              </p>
              <p>
                <i className="fas fa-envelope"></i> branch@example.ma
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
