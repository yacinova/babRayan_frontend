// AboutUs.js
import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import {
  Globe2, Users, Target, Award, Heart,
  CheckCircle2, ShieldCheck, GraduationCap, Lightbulb,
  Calendar, MapPin, Mail, Phone,
  Linkedin,
  Facebook,
  Twitter,
  Instagram
} from 'lucide-react';
import './about.css';

const AboutUs = () => {
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState('vision');

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const scaleIn = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  const teamMembers = [
    {
      name: "Hamroudi Fatima Zahra",
      role: "Fondatrice-Présidente",
      description: "description",
      // expertise: ["compt"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ratibe Hind",
      role: "Membre Fondateur, Secrétaire Général",
      description: "description",
      // expertise: ["Program Management", "Outreach", "Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ratibe Abdelmoula",
      role: "Membre Fondateur, Vice-Président",
      description: "description",
      // expertise: ["Research", "Impact Analysis", "Data Science"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "LALAMI Driss",
      role: "Membre Fondateur, Trésorier Adjoint",
      description: "description",
      // expertise: ["Strategic Planning", "Leadership", "Community Relations"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Sefrioui Mouji Salim",
      role: "Membre Fondateur, Trésorier Général",
      description: "description",
      // expertise: ["Program Management", "Outreach", "Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Jamal Lahjouji Mohamed",
      role: "Membre Fondateur, Vice-Président",
      description: "description",
      // expertise: ["Research", "Impact Analysis", "Data Science"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Anas Guennoun",
      role: "Vice-Président",
      description: "description",
      // expertise: ["Strategic Planning", "Leadership", "Community Relations"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Mesbahi Zhor",
      role: "Secrétaire Général Adjoint",
      description: "description",
      // expertise: ["Program Management", "Outreach", "Development"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Hamza Laghrari",
      role: "Vice-Président",
      description: "description",
      // expertise: ["Research", "Impact Analysis", "Data Science"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const values = [
    {
      icon: <Target className="icon" />,
      title: "Solidarité",
      description: "La solidarité consiste à soutenir et à aider les autres, particulièrement les personnes en difficulté. Chez Bab Rayan, cela signifie travailler main dans la main pour offrir aux enfants des conditions de vie et d'apprentissage favorables."
    },
    {
      icon: <Globe2 className="icon" />,
      title: "Engagement",
      description: "L'engagement reflète le dévouement et la détermination de l’équipe à atteindre les objectifs de l’association. C’est une promesse d’action durable en faveur des enfants, pour leur garantir un avenir meilleur."
    },
    {
      icon: <Users className="icon" />,
      title: "Égalité des chances",
      description: "L'égalité des chances est le principe selon lequel chaque enfant doit avoir les mêmes possibilités de réussite, indépendamment de son origine ou de sa situation. Bab Rayan s’assure de créer un environnement où chaque enfant peut s’épanouir sans discrimination."
    },
    {
      icon: <Award className="icon" />,
      title: "Responsabilité sociale et durable",
      description: "Cette valeur implique de prendre des décisions et d’agir en tenant compte des impacts à long terme sur la société et l'environnement. Bab Rayan s’engage à bâtir un avenir plus responsable pour les enfants tout en respectant les ressources de la planète."
    },
    {
      icon: <Lightbulb className="icon" />,
      title: "Innovation et adaptabilité",
      description: "L'innovation et l'adaptabilité permettent de trouver des solutions nouvelles et de s’ajuster aux changements. Bab Rayan utilise ces qualités pour répondre efficacement aux besoins des enfants et pour rester pertinent face aux défis sociaux actuels."
    }
  ];

  const achievements = [
    {
      year: 2023,
      title: "Global Impact Award",
      description: "Recognized for outstanding contribution to sustainable development"
    },
    {
      year: 2022,
      title: "Community Excellence",
      description: "Award for innovative community engagement programs"
    },
    {
      year: 2021,
      title: "Partnership Milestone",
      description: "Reached 100+ active partnerships globally"
    }
  ];

  const milestones = [
    { year: 2014, text: "Création de l’association Bab Rayan." },
    { year: 2015, text: "Ouverture du foyer Bab Rayan et accueil des enfants." },
    { year: 2016, text: "Partenariat avec l’Entraide Nationale pour la création d’EPS." },
    { year: 2017, text: "Construction de l’école palmier." },
    { year: 2018, text: "Formation des instituteurs en Approche Pédagogique « École de la Vie »." },
    { year: 2019, text: "Ouverture des classes de formation préscolaire." },
    { year: 2020, text: "Visite de Mr Khamlichi Gouverneur de Casa-Anfa." },
    { year: 2021, text: "Reconnaissance d’utilité publique." },
    { year: 2022, text: "Démarrage du Centre de Compétence et de Formation (CCF)." },
    { year: 2023, text: "Visite de Mme Awatif Hayar Ministre de la Solidarité de l’Insertion sociale et de la Famille et de Mr Hamid Karam Président RAMSA." }
  ];

  useEffect(() => {
    controls.start('visible');

    // Parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElements = document.querySelectorAll('.parallax');
      parallaxElements.forEach((element) => {
        const speed = element.dataset.speed || 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="about-us">
      {/* Enhanced Hero Section */}
      <motion.div  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="hero-content">
          <motion.div className="title" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}>
            <h1 className="hero-title">À propos</h1>
            <div className="divider"></div>

          </motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision Tabs Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="tabs">
            <button
              className={`tab-button ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Notre vision            </button>
            <button
              className={`tab-button ${activeTab === 'mission' ? 'active ' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Nos missions
            </button>
            <button
              className={`tab-button ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Nos valeurs
            </button>
          </div>

          <motion.div
            className="tab-content"
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'vision' && (
              <div className="vision-content">
                <h3 className='blue fw-bold'>« Parce que chaque enfant mérite un bon départ dans la vie »</h3>
                <p>Chez Bab Rayan, nous sommes convaincus que chaque enfant mérite une opportunité égale de réussir, peu importe son parcours. </p>
                <div className="vision-points">
                  <div className="point">
                    <CheckCircle2 className="point-icon" />
                    <span> Égalité d'opportunités</span>
                  </div>
                  <div className="point">
                    <CheckCircle2 className="point-icon" />
                    <span> insertion sociale</span>
                  </div>
                  <div className="point">
                    <CheckCircle2 className="point-icon" />
                    <span> Avenir durable</span>
                  </div>
                </div>
              </div>
            )}
            {activeTab === 'mission' && (
              <div className="mission-content">
                <h3 className='blue fw-bold'>Notre objectif</h3>
                <p>Bab Rayan place la protection de l'enfance au cœur de sa mission. Son objectif : offrir à ces enfants un cadre de vie sécurisant, tout en restaurant leur confiance grâce à un soutien matériel et humain continu. En leur redonnant une part de leur insouciance et en les accompagnant vers la réalisation de leurs rêves — avoir un foyer et accéder à l'éducation — l'association leur permet de se projeter vers un avenir meilleur.</p>
                <div className="mission-pillars">
                  {[
                    { icon: <ShieldCheck />, text: "  Protection de l’enfance", description: "Depuis 2014, Bab rayan se consacre à la protection de l’enfance, assurant un environnement sûr et bienveillant pour les enfants vulnérables. Chaque jour, l’association défend leurs droits et leur garantit un accès à une éducation de qualité, ouvrant ainsi la voie à un avenir plus prometteur." },
                    { icon: <GraduationCap />, text: "  Éducation et scolarité", description: "Bab Rayan, ONG dédiée à la protection de l’enfance depuis 2014, mène un combat quotidien pour défendre les droits des enfants et leur offrir une éducation de qualité. Sa mission ultime est de leur ouvrir la voie vers un avenir meilleur" },
                    { icon: <Heart />, text: "  CFI ", description: "Ces formations gratuites et certifiantes d’un an, sont ouvertes aux jeunes de +18 ans issus du foyer Bab Rayan, des autres établissements de protection sociale (EPS) et des jeunes en précarité de la région Grand Casablanca. Le centre est agréé par l'Entraide Nationale." }
                  ].map((pillar, index) => (
                    <div key={index} className="pillar">
                      {pillar.icon}
                      <span>{pillar.text}</span>
                      <hr />

                      <span>{pillar.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {activeTab === 'values' && (
              <div className="values-content">
                <h3 className='blue fw-bold'>Ce que nous défendons</h3>
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-item">
                      {value.icon}
                      <h4> {value.title}</h4>
                      <p> {value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="team-section">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            Membres du bureau
            <hr />
          </motion.h2>
          <motion.div
            className="team-grid"
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
          >
            {teamMembers.map((member, index) => (
              <motion.div key={index} className="team-card" variants={fadeInUp}>
                <div className="member-image">
                  <Users className="avatar-icon" size={48} />
                </div>
                <div className="member-content">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                  <div className="member-expertise">
                    {/* {member.expertise.map((skill, idx) => (
                      <span key={idx} className="expertise-tag">{skill}</span>
                    ))} */}
                  </div>
                  <div className="member-social">
                    <a href={member.social.linkedin} aria-label="LinkedIn">
                      <Linkedin size={20} />
                    </a>
                    <a href={member.social.twitter} aria-label="Twitter">
                      <Twitter size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            Nos Dates clés
          </motion.h2>
          <motion.div
            className="timeline"
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
          >
            <div className="timeline-ligne"></div>
            {milestones.map((milestone, index) => (
              <motion.div key={index} className="timeline-item" variants={fadeInUp}>
                {/* {index !== milestones.length - 1 ? ( */}
                <div className="timeline-marker"></div>
                {/* ) : (
                   <div className="timeline-marker last"></div>
               )} */}
                <div className="timeline-content">
                  <span className="timeline-year">{milestone.year}</span>
                  <h3 className="timeline-title">{milestone.text}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            Nos réalisations
            <hr />
          </motion.h2>
          <motion.div
            className="achievements-grid"
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
          >
            {achievements.map((achievement, index) => (
              <motion.div key={index} className="achievement-card" variants={scaleIn}>
                <div className="achievement-year">{achievement.year}</div>
                <h3 className="achievement-title">{achievement.title}</h3>
                <p className="achievement-description">{achievement.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <motion.h2
            className="section-title"
            variants={fadeInUp}
            initial="hidden"
            animate={controls}
          >
            Entrer en contact
          </motion.h2>
          <motion.div
            className="contact-grid"
            variants={staggerChildren}
            initial="hidden"
            animate={controls}
          >
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div>
                <h3>Visitez-nous</h3>
                <p>Bv Palemier., Casablanca, Maroc</p>
              </div>
            </div>
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div>
                <h3>Email Us</h3>
                <p>hello@organization.org</p>
              </div>
            </div>
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div>
                <h3>Call Us</h3>
                <p>+1 (234) 567-8900</p>
              </div>
            </div>
            <div className="contact-item">
              <Calendar className="contact-icon" />
              <div>
                <h3>Working Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </motion.div>
          <motion.div className="social-links" variants={fadeInUp}>
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="#" aria-label="Facebook"><Facebook /></a>
              <a href="#" aria-label="Twitter"><Twitter /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin /></a>
              <a href="#" aria-label="Instagram"><Instagram /></a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;