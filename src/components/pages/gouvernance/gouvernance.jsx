import React, { useRef } from "react";
import "animate.css";
import { motion } from "framer-motion";
import "./gouvernance.css";
import { Collapse } from "antd";
import reporti from "../../../assets/gouvernance/report.jpg";
import pic1 from "../../../assets/gouvernance/gen.jpg";
import pic2 from "../../../assets/gouvernance/pic3.jpg";
import pic3 from "../../../assets/indh.png";

import Lalami from "../../../assets/members/lalami.jpeg";
import Abdelmoula from "../../../assets/members/Abdelmoula.jpeg";
import Mouji from "../../../assets/members/Mouji.jpeg";

const items = [
  {
    key: "1",
    label: "Conseil d'administration",
    children: (
      <div className="imgp">
        <img 
          src={pic2} 
          alt="Conseil d'administration" 
          
        />
        <p >
          Le Conseil d'administration est l'instance décisionnaire. Il se réunit
          au moins quatre fois par an. Son rôle consiste à adopter le
          fonctionnement, déterminer la politique générale et suivre les
          orientations stratégiques. Il est composé de membres administrateurs.
        </p>
      </div>
    ),
  },
  {
    key: "2",
    label: "Direction Générale",
    children: (
      <div className="imgp">
        <img 
          src={pic3} 
          alt="Direction Générale" 
        />
        <p >
          La Direction Générale gère les établissements et services sous
          l'autorité du Représentant de l'État. Elle assure une fonction
          stratégique dans la gestion des affaires, en lien avec le Conseil
          d'Administration et l'association, ainsi que le contexte économique,
          politique et scientifique.
        </p>
      </div>
    ),
  },
  {
    key: "3",
    label: "Partenaires institutionnels",
    children: (
      <div className="imgp">
        <img 
          src={pic2} 
          alt="Partenaires institutionnels" 
        />
        <p>
          INDH (Initiative Nationale pour les Droits de l'Homme) Wilaya Grand
          Casablanca AREF Grand Casablanca (Académie Régional de l'Enseignement
          et de la Formation) Entraide Nationale Casa Anfa
        </p>
      </div>
    ),
  },
];


//
const Gouvernance = () => {
  const ref = useRef(null);

  // const { token } = theme.useToken();
  // const items = {
  //   marginBottom: 24,
  //   background: token.colorFillAlter,
  //   borderRadius: token.borderRadiusLG,
  //   border: 'none',
  // };

  const members = [
    {
      name: "Ratibe Hind",
      role: "Membre Fondateur",
      position: "Secrétaire général",
      avatar: Mouji,
    },
    {
      name: "Hamroudi Fatima Zahra",
      role: "Fondatrice-Présidente",
      avatar: Mouji,
    },
    {
      name: "Ratibe Abdelmoula",
      role: "Membre Fondateur",
      position: "Vice-président",
      avatar: Abdelmoula,
    },
    {
      name: "LALAMI Driss",
      role: "Membre Fondateur",
      position: "Trésorier Adjoint",
      avatar: Lalami,
    },
    {
      name: "Sefrioui Mouji Salim",
      role: "Membre Fondateur",
      position: "Trésorier général",
      avatar: Mouji,
    },
    {
      name: "Jamal Lahjouji Mohamed",
      role: "Membre Fondateur",
      position: "Vice-président",
      avatar: Mouji,
    },
    { name: "Anas Guennoun", role: "Vice-président", avatar: Mouji },
    {
      name: "Mesbahi Zhor",
      position: "Secrétaire Général Adjoint",
      avatar: Mouji,
    },
    { name: "Hamza Laghari", position: "Vice-président", avatar: Mouji },
  ];

  const reports = [
    {
      id: 1,
      year: "2016",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 2,
      year: "2017",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 3,
      year: "2018",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 4,
      year: "2019",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 5,
      year: "2020",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 6,
      year: "2021",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 7,
      year: "2022",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 8,
      year: "2023",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
    {
      id: 9,
      year: "2024",
      image: reporti,
      description:
        "Compte rendu global des activités de l'Association Bab Rayan",
    },
  ];

  return (
    <div className="general-page">
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
            <h1 className="hero-title">Gouvernance</h1>
            <div className="divider"></div>
          </motion.div>
        </div>
      </motion.div>

      <div className="container-content">
        <div className="text-container">
          <h1 className="title-cont">
            "Engagés et unis autour d’un même espoir : un projet holistique pour
            chaque enfant accueilli par Bab Rayan"
          </h1>
          <p className="description">
            « Au sein de l’association Bab Rayan, dédiée à la protection, au
            développement de l’enfance et à l’insertion professionnelle des
            jeunes, nous rassemblons des personnes unies par une même foi et une
            vision commune. Nous croyons fermement que chaque situation, aussi
            difficile soit-elle, peut trouver une issue positive. Chaque jeune
            possède en lui des potentialités insoupçonnées et mérite un avenir
            où il pourra s’épanouir pleinement. Notre mission est de leur offrir
            les moyens de se redécouvrir, de reprendre confiance en eux et de
            construire un avenir prometteur. »{" "}
          </p>
        </div>
        <div className="image-container">
          <img src={pic1} alt="Bab Rayan" className="image" />
        </div>
      </div>

      <div className="team-container">
        <h1 className="team-title animate__animated animate__pulse">
          Membres du bureau
        </h1>
        <div className="team-grid">
          {members.map((member, index) => (
            <div className="team-member" key={index}>
              <div className="avatar-placeholder">
                <img src={member.avatar} alt={`${member.name}'s avatar`} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <span>{member.position}</span>
            </div>
          ))}
        </div>
      </div>

      {/* <div className="middle-page">
        <section className="section-container">
          <div className="image-text-wrapper">
            <div className="gen-image-container">
              <img src={pic1} alt="Image of Conseil d'administration" />
            </div>
            <div className="text-container">
              <h2>Conseil d'administration</h2>
              <p>
                Le Conseil d'administration est l'instance décisionnaire. Il se
                réunit au moins quatre fois par an. Son rôle consiste à adopter
                le fonctionnement, déterminer la politique générale et suivre
                les orientations stratégiques. Il est composé de membres
                administrateurs.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="image-text-wrapper reverse">
            <div className="gen-image-container">
              <img src={pic2} alt="Image of Direction Générale" />
            </div>
            <div className="text-container">
              <h2>Direction Générale</h2>
              <p>
                La Direction Générale gère les établissements et services sous
                l’autorité du Représentant de l'État. Elle assure une fonction
                stratégique dans la gestion des affaires, en lien avec le
                Conseil d'Administration et l’association, ainsi que le contexte
                économique, politique et scientifique.
              </p>
            </div>
          </div>
        </section>

        <section className="section-container">
          <div className="image-text-wrapper">
            <div className="gen-image-container">
              <img src={pic3} alt="Image of Conseil d'administration" />
            </div>
            <div className="text-container">
              <h2>Partenaires institutionnels</h2>
              <p>
                INDH (Initiative Nationale pour les Droits de l’Homme) Wilaya
                Grand Casablanca AREF Grand Casablanca (Académie Régional de
                l’Enseignement et de la Formation) Entraide Nationale Casa Anfa{" "}
              </p>
            </div>
          </div>
        </section>

      </div> */}

      {/* <Collapse defaultActiveKey={["1"]} ghost items={items} /> */}
      <Collapse 
      defaultActiveKey={["1"]} 
      accordion
      // size="large"
      className="organizational-collapse"
    >
      {items.map((item) => (
        <Collapse.Panel 
          header={item.label} 
          key={item.key}
        >
          {item.children}
        </Collapse.Panel>
      ))}
    </Collapse>

      {/* <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{
        background: token.colorBgContainer,
      }}
      items={getItems(panelStyle)}
    /> */}

      <div className="report-container">
        <div className="section-title ">
          <p className="collaboration-text">Collaborations à livres ouverts</p>
          <h2 className="main-title">Transparence financière</h2>
        </div>

        <div className="report-con">
          {reports.map((report) => (
            <div key={report.id}>
              <div className="rep-image-container">
                <img
                  src={report.image}
                  alt={`Rapport Annuel ${report.year}`}
                  className="report-image"
                />
              </div>

              <h3 className="report-title">Rapport Annuel {report.year}</h3>
              <p className="report-description">{report.description}</p>
              <button className="btn download-btn">TÉLÉCHARGER PDF</button>
            </div>
          ))}
        </div>
      </div>
    </div>
    // </div>

    // </div>
  );
};

export default Gouvernance;
