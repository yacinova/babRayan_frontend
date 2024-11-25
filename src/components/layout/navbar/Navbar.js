import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import Logo from "../../../assets/Logo.png";
import { Dropdown, Space } from 'antd';
import { FaUser } from "react-icons/fa";

export default function Navbar() {
  const [url, setUrl] = useState('');
  const userId = localStorage.getItem("userID");
  const [userInfo, setUserInfo] = useState({});

  const fetchUser = async () => {
    const response = await fetch(`http://localhost:7777/api/users/${userId}`);
    const data = await response.json();
    if (data.status) {
      setUserInfo(data.data);
    } else {
      console.log(data.message);
    }
  }

  useEffect(() => {
    if (userId) {
      fetchUser();
    }
  }, [userId]);


  useEffect(() => {
    const path = window.location.pathname;
    const segment = path.split('/')[1];
    setUrl(segment);
  }, []);


  const handleLogout = () => {
    // empty local storage
    localStorage.clear();
    window.location.href = '/';
  }

  const menuConnaître = [
    {
      key: '1',
      label: (
        <a href="/about">A propos</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '2',
      label: (
        <a href="/mot_presidente">Mot de la Présidente</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '3',
      label: (
        <a href="/gouvernance">Gouvernance</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '4',
      label: (
        <a href="/chiffres">Dates et Chiffres clés</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
  ];

  const menuMission = [
    {
      key: '1',
      label: (
        <a href="/mission">Nos Missions</a>
      ),
      style: { color: '#003049', fontSize: '15px' },
    },
    {
      key: '2',
      label: (
        <a href="#">Protection de l'enfance</a>
      ),
      style: { color: '#003049', fontSize: '15px' },
    },
    {
      key: '3',
      label: (
        <a href="#">Education et scolarité</a>
      ),
      style: { color: '#003049', fontSize: '15px' },
    },
    {
      key: '4',
      label: (
        <a href="#">Formation et insertion professionnelle</a>
      ),
      style: { color: '#003049', fontSize: '15px' },
    },



  ];

  const menuSoutenir = [
    {
      key: '1',
      label: (
        <a href="/donation">Faire un DON</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '2',
      label: (
        <a href="#">Parrainer un enfant</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '3',
      label: (
        <a href="#">Devenir partenaire</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '4',
      label: (
        <a href="#">Devenir bénévole</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
  ];

  const menuSuivre = [
    {
      key: '1',
      label: (
        <a href="/actualites" rel="noopener noreferrer">Actualités</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '2',
      label: (
        <a href="/actions-solidaires" rel="noopener noreferrer">Actions solidaires</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '3',
      label: (
        <a href="presse" rel="noopener noreferrer">Presse</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '4',
      label: (
        <a href="/mediatheque" rel="noopener noreferrer">Médiathèque</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '5',
      label: (
        <a href="/sociaux" rel="noopener noreferrer">Réseaux Sociaux</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '6',
      label: (
        <a href="/partenaires" rel="noopener noreferrer">Partenaires</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
  ];

  const profil_menu = [
    ...(userInfo.role === "admin" ? [{
      label: <span onClick={() => { window.location.href = "/dashboard" }}>Dashboard Admin</span>,
    }] : []),
    {
      label: <span onClick={() => { window.location.href = "#" }}>Paramètres</span>,
    },
    {
      type: 'divider',
    },
    {
      label: <span style={{ color: "red" }} onClick={handleLogout}>Déconnexion</span>,
    },

  ];


  return (
    <div className={url === "" ? "sticky-top" : ""}>
      <nav className="navbar navbar-expand-lg navbar-background">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={Logo} alt="Logo" />
          </a>
          <div className="buttons_nav d-flex">
            {userInfo && Object.keys(userInfo).length > 0 ?
              <button className='btn border d-lg-none' onClick={() => window.location.href = "/donation"}> <FaUser /> </button>
              : null}
            <button className='btn don_button d-lg-none' onClick={() => window.location.href = "/donation"}> Faire un don!</button>
          </div>
          <button className="navbar-toggler navbar-toggler-custom" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse links_nav" id="navbarText">
            <div className="mx-auto links_nav">
              <Dropdown menu={{ items: menuConnaître }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nous Connaître </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: menuMission }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nos Missions </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: menuSoutenir }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nous Soutenir </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: menuSuivre }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nous Suivre </Space>
                </a>
              </Dropdown>
              <a className='menu' onClick={() => window.location.href = "/contact"} style={{ cursor: "pointer" }}>
                <Space> Nous contacter </Space>
              </a>

            </div>
            {userInfo && Object.keys(userInfo).length > 0 ?
              <div className="buttons_nav d-flex">
                <Dropdown
                  menu={{
                    items: profil_menu,
                  }}
                  trigger={['click']}
                >
                  <button className='btn border-top border-bottom d-none d-lg-block' onClick={(e) => e.preventDefault()}> <FaUser /> </button>
                </Dropdown>

                <button className='btn don_button d-none d-lg-block' onClick={() => window.location.href = "/donation"}> Faire un don!</button>
              </div>
              :
              <div className="buttons_nav d-flex">
                <button className='btn login_button' onClick={() => window.location.href = "/login"}>Se Connecter</button>
                <button className='btn register_button' onClick={() => window.location.href = "/register"}>S'inscrire</button>
                <button className='btn don_button d-none d-lg-block' onClick={() => window.location.href = "/donation"}> Faire un don!</button>
              </div>
            }

          </div>
        </div>
      </nav>
    </div>
  );
}
