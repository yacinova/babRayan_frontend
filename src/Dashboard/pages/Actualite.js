import React, { useState } from 'react';
import './pages.css';
import Pagination from 'react-bootstrap/Pagination'; // Ensure Bootstrap is installed

export default function Actualite() {
  const [actualites, setActualites] = useState([
    { id: 1, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 1", datePublication: "2022-01-01", contenu: "Contenu de l'actualité 1" },
    { id: 2, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 2", datePublication: "2022-01-02", contenu: "Contenu de l'actualité 2" },
    { id: 3, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 3", datePublication: "2022-01-03", contenu: "Contenu de l'actualité 3" },
    { id: 4, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 4", datePublication: "2022-01-04", contenu: "Contenu de l'actualité 4" },
    { id: 5, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 5", datePublication: "2022-01-05", contenu: "Contenu de l'actualité 5" },
    { id: 6, image: "https://mdbootstrap.com/img/new/avatars/7.jpg", title: "Actualité 6", datePublication: "2022-01-06", contenu: "Contenu de l'actualité 6" },
  ]);

  const [searchTitle, setSearchTitle] = useState("");
  const [sortAsc, setSortAsc] = useState(false);  // true for ascending, false for descending
  const [currentPage, setCurrentPage] = useState(1);  // Track current page
  const [itemsPerPage, setItemsPerPage] = useState(4); // Number of items per page

  // Sort the actualites based on date of publication (ascending or descending)
  const sortedActualites = [...actualites].sort((a, b) => {
    const dateA = new Date(a.datePublication);
    const dateB = new Date(b.datePublication);
    return sortAsc ? dateA - dateB : dateB - dateA;  // Toggle sort order
  });

  // Filter the sortedActualites based on search by title
  const filteredActualites = sortedActualites.filter(actualite =>
    actualite.title.toLowerCase().includes(searchTitle.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredActualites.length / itemsPerPage);

  // Get the current page data
  const currentActualites = filteredActualites.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  // Handle page click
  const handlePaginationClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <section>
      <div className="py-5 d-flex justify-content-between align-items-center">
        <div>
          Rechercher par titre: <input type="text" className="form-control w-100" placeholder="Rechercher" value={searchTitle} onChange={(e) => setSearchTitle(e.target.value)} />
        </div>
        <button className='btn btn_add'>Ajouter un nouvel article</button>
      </div>

      <table className="table align-middle mb-0 bg-white">
        <thead className="bg-light">
          <tr>
            <th></th>
            <th>Titre</th>
            <th onClick={() => setSortAsc(!sortAsc)} style={{ cursor: 'pointer' }}>
              Date de publication
              <span className="ms-2">
                <i className={`fa-solid ${sortAsc ? "fa-arrow-up" : "fa-arrow-down"}`} />
              </span>
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentActualites.map(actualite => (
            <tr key={actualite.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img src={actualite.image} alt="" style={{ width: '85px', height: '45px', objectFit: "cover" }} />
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">{actualite.title}</p>
              </td>
              <td>
                <p className='fw-normal mb-1'>{actualite.datePublication}</p>
              </td>
              <td>
                <button type="button" className="btn btn_edit">
                  <span><i className="fa-solid fa-pen-to-square"></i></span>
                </button>
                <button type="button" className="btn btn_delete">
                  <span><i className="fa-solid fa-trash"></i></span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination controls */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePaginationClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      </div>
    </section>
  );
}
