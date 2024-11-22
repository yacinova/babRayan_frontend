import React from 'react';
import './sections.css';
import { Statistic } from 'antd';
import CountUp from 'react-countup';

export default function Chiffre() {
  const formatter = (value) => <CountUp end={value} separator="," duration={8} />;

  const chiffres = [
    { label: 'Enfants pris en charge', value: 450, icon: <i className="fa-solid fa-child"></i> },
    { label: 'Bénévoles', value: 6000, icon: <i className="fa-solid fa-hand-holding-heart"></i> },
    { label: 'Familles accompagnées', value: 1200, icon: <i className="fa-solid fa-house-user"></i> },
    { label: 'Paniers distribués', value: 57000, icon: <i className="fa-solid fa-boxes-stacked"></i> },
  ]
  return (
    <div className="chiffre_bg">
      <div className="stat-container">
        {chiffres.map((stat, index) => (
          <div key={index} className="stat-item text-center">
            <span style={{ color: '#003049', fontSize: '50px' }}>{stat.icon}</span><br />
            <div className="d-flex justify-content-center">
              <span className="me-1 fw-bold" style={{ color: '#003049', fontSize: '30px' }}>+</span>
              <Statistic className="fw-bold stat-value" valueStyle={{ color: '#003049', fontSize: '30px' }} value={stat.value} formatter={formatter} />
            </div>
            <span className="text-secondary">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
