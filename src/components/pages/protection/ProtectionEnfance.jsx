import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Statistic } from "antd";
import CountUp from "react-countup";
import "./ProtectionEnfance.css";
import image1 from "../../../assets/foyer/foyer-bab.jpg";
import image2 from "../../../assets/3rubrique/foyer.jpg";
// import { Weight } from "lucide-react";

const ProtectionEnfance = () => {
  const ref = useRef(null);
  const formatter = (value) => (
    <CountUp end={value} separator="," duration={8} />
  );

  const chiffres = [
    {
      label: "Enfants pris en charge",
      value: 105,
      icon: <i className="fa-solid fa-child"></i>,
    },
    // { label: 'enfants', value: 105, icon: <i className="fa-solid fa-hand-holding-heart"></i> },
    {
      label: "encadrants",
      value: 16,
      icon: <i className="fa-solid fa-house-user"></i>,
    },
    {
      label: "bénévoles<",
      value: 1300,
      icon: <i className="fa-solid fa-boxes-stacked"></i>,
    },
  ];
  return (
    <div className="container">
      {/* Hero Section */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="hero-content">
          <motion.div
            className="title"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <h1 className="hero-title">Protection d'enfance</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>
      <div className="protection-main">
        {/* Main Content */}
        <motion.div
          className="protection-enfance"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.section
            className="introduction"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* <h1>Protection de l’Enfance</h1> */}
            <div className="protection-enfance">
              <p style={{textAlign:"center", padding:"10px"}}>
                Depuis 2014, Bab rayan se consacre à la protection de l’enfance,
                assurant un environnement sûr et bienveillant pour les enfants
                vulnérables. Chaque jour, l’association défend leurs droits et
                leur garantit un accès à une éducation de qualité, ouvrant ainsi
                la voie à un avenir plus prometteur.
              </p>
              <img src={image1} alt="Bab Rayan" />
              {/* </div> */}
              <p>
                Bab Rayan place la protection de l'enfance au cœur de sa
                mission. Son objectif : offrir à ces enfants un cadre de vie
                sécurisant, tout en restaurant leur confiance grâce à un soutien
                matériel et humain continu. En leur redonnant une part de leur
                insouciance et en les accompagnant vers la réalisation de leurs
                rêves — avoir un foyer et accéder à l'éducation — l'association
                leur permet de se projeter vers un avenir meilleur.
              </p>
              {/* /<div className="image-container"> */}
      
            </div>
          </motion.section>

          <motion.section
            className="foyer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="foyer-bab-rayan"> 
            <h2 style={{textAlign:"center", padding:"10px"}}>Foyer Bab Rayan</h2>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* <h3>Structure</h3> */}
              <p>
                Le Foyer Bab Rayan est un établissement de protection sociale
                (EPS) agréé et sous la tutelle du Ministère de la Solidarité, de
                l’Insertion Sociale et de la Famille.
              </p>
              <p>
                {" "}
                Le premier pavillon du Foyer Bab Rayan a ouvert ses portes en
                septembre 2015 et est habilité à accueillir des enfants
                orphelins, abandonnés, en situation difficile ou maltraités à
                partir de 3 ans jusqu’à l’âge de 18 ans, souvent envoyés par
                d'autres organisations.
              </p>
              <p>
                {" "}
                Il se situe au quartier palmier à Casablanca, dans un
                établissement ayant servi avant sa fermeture d’école primaire
                publique. Cet établissement a été mis à la disposition de
                l’association Bab Rayan dans le cadre d’un partenariat avec
                l’AREF (Académie Régionale de l'Education et de la Formation)
                Casablanca et la Wilaya de Casa-Settat.
              </p>
              <p>
                Au sein du foyer, nous avons aménagé des espaces propices à
                garantir un cadre de vie empreint de dignité. Ces espaces, à la
                fois spacieux et offrant des services de haute qualité, sont
                conçus en harmonie avec nos valeurs et nos coutumes.
              </p>
            </motion.div>
            </div>
            <div className="projet-vie">
            <h3 style={{textAlign:"center", padding:"10px"}}>Projet de Vie</h3>
            <motion.ul
              className="foyer-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <li>
                <strong>résolution des démarches administratives</strong> comme
                l’obtention de documents d’identité,
              </li>
              <li>
                <strong>prise en charge médicale</strong> adaptée à leurs
                besoins,
              </li>
              <li>
                <strong>parcours éducatif et sportif</strong> enrichissant,
              </li>
              <li>
                <strong>plan d’insertion sociale</strong> personnalisé.
              </li>
            </motion.ul>
            
            </div>
            <h3>Humaniser le Projet</h3>
            <p>
              pour renforcer l'impact de notre mission, nous intégrons des{" "}
              <strong>
                témoignages de nos enfants, bénévoles et membres du staff
              </strong>
              ...
            </p>

            <div className="foyer">
              <h3 style={{textAlign:"center", padding:"10px"}}>Le Foyer en Chiffres</h3>
              {/* <motion.ul
              className="stats"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <li>
                <strong>105 enfants</strong> pris en charge de 3 à 18 ans (et
                parfois au-delà)
              </li>
              <li>
                <strong>16 encadrants</strong> dédiés
              </li>
              <li>
                <strong>1300 bénévoles</strong> impliqués
              </li>
            </motion.ul> */}
              <motion.div className="stat-container">
                {chiffres.map((stat, index) => (
                  <div key={index} className="stat-item text-center">
                    <span style={{ color: "#003049", fontSize: "50px" }}>
                      {stat.icon}
                    </span>
                    <br />
                    <div className="d-flex justify-content-center">
                      <span
                        className="me-1 fw-bold"
                        style={{ color: "#003049", fontSize: "30px" }}
                      >
                        +
                      </span>
                      <Statistic
                        className="fw-bold stat-value"
                        valueStyle={{ color: "#003049", fontSize: "30px" }}
                        value={stat.value}
                        formatter={formatter}
                      />
                    </div>
                    <span className="text-secondary">{stat.label}</span>
                  </div>
                ))}
              </motion.div>
              <div className="pic-foyer">
                <img src={image2} alt="" />
                <img src={image2} alt="" />
                <img src={image2} alt="" />
              </div>
            </div>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default ProtectionEnfance;
