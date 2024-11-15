import React, { useState } from 'react';
import './members.css'; // Import the CSS file

const membersData = [
  {
    id: 1,
    name: 'Ali',
    title: 'Software Engineer',
    description: 'Experienced in building full-stack applications and passionate about AI.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  },
  {
    id: 2,
    name: 'Ghita',
    title: 'Product Manager',
    description: 'Leading teams to build user-centric products with a focus on efficiency.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  },
  {
    id: 3,
    name: 'Younes',
    title: 'Product Manager',
    description: 'Leading teams to build user-centric products with a focus on efficiency.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  },
  {
    id: 4,
    name: 'Jane Smith',
    title: 'Product Manager',
    description: 'Leading teams to build user-centric products with a focus on efficiency.',
    imageUrl: 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
  },
  // Add more members as needed
];

export default function Members() {
  const [activeMember, setActiveMember] = useState(null);

  const toggleDescription = (id) => {
    setActiveMember(activeMember === id ? null : id);
  };

  return (
    <div className="members_div container mt-4">
      <div className="row">
        {membersData.map((member) => (
          <div key={member.id} className="col-lg-4 col-md-6 mb-4">
            <div className="member-card text-center p-3" onClick={() => toggleDescription(member.id)}>
              <img src={member.imageUrl} alt={member.name} className="member-image mb-3" />
              <h5 className="member-name">{member.name}</h5>
              <p className="member-title">{member.title}</p>
              {activeMember === member.id && (
                <p className="member-description">{member.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
