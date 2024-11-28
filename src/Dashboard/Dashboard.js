import React, { useEffect, useRef, useState } from 'react';
import './Dashboard.css';
import { Outlet } from 'react-router-dom';
import { TfiMenu } from "react-icons/tfi";
import Logo from "../assets/Logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImNewspaper } from "react-icons/im";
import { FaUsers } from "react-icons/fa";
import { PiUsersFourFill } from "react-icons/pi";
import { IoSettingsSharp } from "react-icons/io5";

export default function Dashboard() {
  const sidebarToggleRef = useRef(null);
  const userID = localStorage.getItem('userID');
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/users/${userID}`)
      .then(response => response.json())
      .then(data => {
        setUserInfo(data.data);
      })
  })



  useEffect(() => {
    const toggleSidebar = (event) => {
      event.preventDefault();
      document.body.classList.toggle('sb-sidenav-toggled');
      localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
    };

    // Add event listener
    if (sidebarToggleRef.current) {
      sidebarToggleRef.current.addEventListener('click', toggleSidebar);
    }

    // Clean up event listener on unmount
    return () => {
      if (sidebarToggleRef.current) {
        sidebarToggleRef.current.removeEventListener('click', toggleSidebar);
      }
    };
  }, []);

  const menuItems = [
    { name: 'Dashboard', icon: <MdOutlineSpaceDashboard />, path: '/' },
    { name: 'Actualités', icon: <ImNewspaper />, path: '/news' },
    { name: 'Users', icon: <FaUsers />, path: '/profile' },
    { name: 'Members', icon: <PiUsersFourFill />, path: '/members' },
    { name: 'Settings', icon: <IoSettingsSharp />, path: '/settings' },
  ];


  const handleLogout = () => {
    // empty local storage
    localStorage.clear();
    window.location.href = '/';
  }

  return (
    <section className='dashboard'>
      <div className="d-flex" id="wrapper">
        <div className="border-end " id="sidebar-wrapper">
          <div className="image_dashbord">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="sidebar-heading border-bottodm ">Admin Bab Rayan</div>
          <div className="list-group list-group-flush">
            {menuItems.map(
              (menuItem, index) => (
                <a className="p-3" key={index} href={`/dashboard${menuItem.path}`}><span className='me-2'>{menuItem.icon}</span> {menuItem.name} </a>
              ))}
          </div>

        </div>
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar_dashbord  border-bottom">
            <div className="container-fluid  ">
              <button className="btn" ref={sidebarToggleRef} id="sidebarToggle"><span className="text-white fw-bold"><TfiMenu /></span></button>

              <div className="text-center">
                👋🏻 Bonjour, Mr <b style={{ color: "#F77F00" }}>{userInfo ? `${userInfo.name} ${userInfo.lastName}` : "none"}</b>
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                  {/* <li className="nav-item active"><a className="nav-link" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">Link</a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Paramètre</a>
                    <div className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                      <a className="dropdown-item" href="#!">Action</a>
                      <a className="dropdown-item" href="#!">Another action</a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#!">Something else here</a>
                    </div>
                  </li> */}
                  <li className="nav-item"><a className="nav-link" href="/"><span><i className="fa-solid fa-angle-left"></i></span> Revenir au siteweb </a></li>
                  <li className="nav-item"><a className="nav-link deconnexion" href="#!" onClick={handleLogout}><span><i className="fa-solid fa-right-from-bracket"></i></span> Déconnexion  </a></li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="container-fluid">
            <Outlet />

          </div>
        </div>
      </div>
    </section>
  );
}
