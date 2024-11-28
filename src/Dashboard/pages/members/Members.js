import React, { useEffect, useState } from "react";
import "./members.css"; // Import the CSS file
import AvatarUser from "../../../assets/dashboard/avatar.png";
import { Button, Input, Modal, notification, message } from "antd";

export default function Members() {
  const [activeMember, setActiveMember] = useState(null);
  const [members, setMembers] = useState([]);
  const [filteredMembers, setFilteredMembers] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingMember, setEditingMember] = useState(null);
  const [api, contextHolder] = notification.useNotification();


  const [full_name, setFull_name] = useState('');
  const [poste, setPoste] = useState('');
  const [desc, setDesc] = useState('');
  const [memberPic, setMemberPic] = useState('');


  const openNotification = (type, title, msg) => {
    api[type]({
      message: title,
      description: msg || null,
      placement: "bottomLeft"
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://127.0.0.1:5001/babrayanlocal/us-central1/api/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name,
          poste,
          desc,
          memberPic: memberPic || null,
        }),
      });
      const data = await res.json();
      if (data.status) {
        openNotification('success', 'Member ajouté', 'Member ajouté avec succès');
        setIsModalOpen(false);
        fetchMembers();
        setFull_name('');
        setPoste('');
        setDesc('');
        setMemberPic('');
      }
    } catch (error) {
      console.log(error);

      message.error("Error adding member");

    }
  }
  // Fetch members
  const fetchMembers = async () => {
    try {
      const res = await fetch("http://127.0.0.1:5001/babrayanlocal/us-central1/api/members")
      const data = await res.json();
      setMembers(data.data);
      setFilteredMembers(data.data);

    } catch (error) {
      message.error("Error fetching members");
    }
  }

  useEffect(() => {
    fetchMembers();
  }, []);

  // Toggle description visibility
  const toggleDescription = (id) => {
    setActiveMember(activeMember === id ? null : id);
  };

  // Search members by full_name
  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchText(value);
    const filtered = members.filter((member) =>
      member.full_name.toLowerCase().includes(value)
    );
    setFilteredMembers(filtered);
  };

  // Open Modal for Adding or Editing a Member
  const openModal = (member = null) => {
    setEditingMember(member);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://127.0.0.1:5001/babrayanlocal/us-central1/api/members/${id}`, {
        method: "DELETE",
      });
      
      if (res.status ) {
        openNotification("success", "Member supprimé avec succès"  );
        fetchMembers();
      } else {
        openNotification("error", "Erreur lors de la suppression du membre"  );
      }

    } catch (error) {

    }
  }
  return (
    <div className="members_div container mt-4">
      {/* Add and Search Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <Input placeholder="Search by full name" value={searchText} onChange={handleSearch} style={{ width: "300px" }} />
        <Button className="blue_color" onClick={() => openModal()}>
          Add New Member
        </Button>
      </div>

      {/* Members List */}
      <div className="row">
        {filteredMembers.map((member) => (
          <div key={member.id} className="col-lg-4 col-md-6 mb-4">
            <div className="member-card text-center p-3" onClick={() => toggleDescription(member.id)} >
              <img src={member.memberPic || AvatarUser} alt={member.name} className="member-image mb-3" />
              <h5 className="member-name">{member.full_name}</h5>
              <p className="member-title">{member.poste}</p>
              {activeMember === member.id && (
                <p className="member-description">{member.desc}</p>
              )}
              <div className="text-end">
                <button className="badge blue_color" style={{ cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openModal(member);
                  }}
                >
                  Edit Info
                </button>
                <button className="btn" style={{ color: '#D62828', cursor: 'pointer' }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(member.id);
                  }}
                >
                  <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Add / Edit */}
      <Modal title={editingMember ? "Edit Member" : "Add New Member"} visible={isModalOpen} onCancel={() => setIsModalOpen(false)} footer={null} >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Nom et Prénom</label>
            <input type="text" className="form-control" id="name" value={full_name} onChange={(e) => setFull_name(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="poste" className="form-label">Poste</label>
            <input type="text" className="form-control" id="poste" value={poste} onChange={(e) => setPoste(e.target.value)} />
          </div>
          <div className="mb-3">
            <label htmlFor="desc" className="form-label">Description</label>
            <input type="text" className="form-control" id="desc" value={desc} onChange={(e) => setDesc(e.target.value)} />
          </div>
          <button type="submit" className="blue_color border-0 p-2">
            {editingMember ? "Save Changes" : "Add Member"}
          </button>

        </form>


      </Modal>
    </div>
  );
}
