import React, { useState } from 'react';
import './pages.css';

export default function Users() {
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', tel: "066666666", email: "email@gmail.com", age: 25, role: "admin", pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 2, name: 'Jane Doe', tel: "066666666", email: "email@gmail.com", age: 30, role: "admin", pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, name: 'Bob Smith', tel: "066666666", email: "email@gmail.com", age: 35, role: "donateur", pic: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 4, name: 'Alice Johnson', tel: "066666666", email: "email@gmail.com", age: 28, role: "donateur", pic: "https://randomuser.me/api/portraits/men/1.jpg" },
    ]);

    return (
        <section>
            <table className="table align-middle mb-0 bg-white">
                <thead className="bg-light">
                    <tr>
                        <th>Nom</th>
                        <th>Age</th>
                        <th>Téléphone</th>
                        <th>Rôle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id} >
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={user.pic} alt={user.name} style={{ width: '45px', height: '45px' }} className="rounded-circle" />
                                    <div className="ms-3">
                                        <p className="fw-bold mb-1">{user.name}</p>
                                        <p className="text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                            </td>
                            <td>{user.age}</td>
                            <td>{user.tel}</td>
                            <td><span className={`badge ${user.role === 'admin' ? 'bg-danger' : 'bg-success'} rounded-pill`}>{user.role}</span></td>
                            <td>
                                <button type="button" className="btn btn-link btn-sm btn-rounded">
                                    <i className="fas fa-eye"></i>
                                </button>
                                {/* Remove delete button for admin users */}
                                {user.role !== 'admin' && (
                                    <button type="button" className="btn btn-link btn-sm btn-rounded">
                                        <i className="fas fa-trash-alt"></i>
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}
