import React, { useEffect, useState } from 'react';
import "./Navbar.css";
import Logo from "../../../assets/Logo.png";
import { Dropdown, Space } from 'antd';

export default function Navbar() {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const path = window.location.pathname;
    const segment = path.split('/')[1];
    setUrl(segment);
  }, []);

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
        <a href="/contact">Nous Contacter</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '4',
      label: (
        <a href="/chiffres">Nos Chiffres</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
  ];

  const menuMission = [
    // {
    //   key: '1',
    //   label: (
    //     <a href="/mission">Nos Missions</a>
    //   ),
    //   style: { color: '#003049', fontSize: '15px' },

    // },
    {
      key: '1',
      label: (
        <a href="/gouvernance">Gouvernance</a>
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
    // {
    //   key: '2',
    //   label: (
    //     <a href="/volunteer">Volunteer</a>
    //   ),
    //   style: { color: '#003049', fontSize: '15px' },

    // },
    // {
    //   key: '3',
    //   label: (
    //     <a href="/fundraising">Fundraising</a>
    //   ),
    //   style: { color: '#003049', fontSize: '15px' },

    // },
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
        <a href="/sociaux" rel="noopener noreferrer">Réseaux Sociaux</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

    },
    {
      key: '3',
      label: (
        <a href="/partenaires" rel="noopener noreferrer">Partenaires</a>
      ),
      style: { color: '#003049', fontSize: '15px' },

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
              <Dropdown menu={{ items: menuSuivre }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nous Suivre </Space>
                </a>
              </Dropdown>
              <Dropdown menu={{ items: menuSoutenir }} className='menu'>
                <a onClick={(e) => e.preventDefault()}>
                  <Space> Nous Soutenir </Space>
                </a>
              </Dropdown>

            </div>
            <div className="buttons_nav d-flex">
              <button className='btn login_button' onClick={() => window.location.href = "/login"}>Se Connecter</button>
              <button className='btn register_button' onClick={() => window.location.href = "/register"}>S'inscrire</button>
              <button className='btn don_button d-none d-sm-block' onClick={() => window.location.href = "/donation"}> Faire un don!</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
