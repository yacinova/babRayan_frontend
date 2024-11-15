import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUsers, FaDollarSign, FaHandshake, FaChild } from 'react-icons/fa';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function Home() {
  // Placeholder values for the dashboard stats
  const [userCount, setUserCount] = useState(120); // Total Users
  const [donationData, setDonationData] = useState([2000, 3000, 2500, 4000, 3500, 5000]); // Donations over months
  const [enfantsCount, setEnfantsCount] = useState(50); // Total Children Sponsored
  const [partnershipsCount, setPartnershipsCount] = useState(10); // Total Partnerships

  // Example chart data for donations
  const donationChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'], // Months
    datasets: [
      {
        label: 'Donations (MAD)',
        data: donationData,
        borderColor: '#42A5F5',
        backgroundColor: 'rgba(66, 165, 245, 0.2)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="home_dashboard container mt-5">
      <div className="row text-center">
        {/* Users Card */}
        <div className="col-md-3 mb-4">
          <div className="dashboard_card users_card p-4 rounded shadow animate__animated animate__fadeInLeft">
            <div className="d-flex icons_and_title justify-content-center align-items-center ">
              <div className="icon_container">
                <FaUsers />
              </div>
              <h3 className="card_title ms-2">Users</h3>
            </div>
            <p className="card_value">{userCount}</p>
            <p className="card_description">Total Users</p>
          </div>
        </div>

        {/* Enfants Sponsorisés Card */}
        <div className="col-md-3 mb-4">
          <div className="dashboard_card enfants_card p-4 rounded shadow animate__animated animate__fadeInUp">
            <div className="d-flex icons_and_title justify-content-center align-items-center ">
              <div className="icon_container">
                <FaChild />
              </div>
              <h3 className="card_title ms-2">Enfants Sponsorisés</h3>
            </div>
            <p className="card_value">{enfantsCount}</p>
            <p className="card_description">Total Children Sponsored</p>
          </div>
        </div>

        {/* Donations Card */}
        <div className="col-md-3 mb-4">
          <div className="dashboard_card donations_card p-4 rounded shadow animate__animated animate__fadeInRight">
            <div className="d-flex icons_and_title justify-content-center align-items-center ">
              <div className="icon_container">
                <FaDollarSign />
              </div>
              <h3 className="card_title ms-2">Donations</h3>
            </div>
            <p className="card_value">{donationData.reduce((acc, curr) => acc + curr, 0)} MAD</p>
            <p className="card_description">Total Donations</p>
          </div>
        </div>
        {/* Partnerships Card */}
        <div className="col-md-3 mb-4">
          <div className="dashboard_card partnerships_card p-4 rounded shadow animate__animated animate__fadeInLeft">
            <div className="d-flex icons_and_title justify-content-center align-items-center ">
              <div className="icon_container">
                <FaHandshake />
              </div>
              <h3 className="card_title ms-2">Partenariats</h3>
            </div>
            <p className="card_value">{partnershipsCount}</p>
            <p className="card_description">Total Partnerships</p>
          </div>
        </div>
      </div>

      {/* Donation Trend Chart */}
      <div className="row mt-4">
        <div className="col-md-12 d-flex justify-content-center">
          <div className="p-3 rounded shadow-lg w-100">
            <h4 className="text-center mb-4">Donation Chart</h4>
            <Line
              data={donationChartData}
              options={{
                responsive: true,
              }}
              height={100} // Adjust height as needed
              width={600}  // Adjust width as needed
            />
          </div>
        </div>
      </div>

    </div>
  );
}
