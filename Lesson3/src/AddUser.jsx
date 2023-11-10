import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './add-user.css';

function AddUser() {
  const [showModal, setShowModal] = useState(false);
  const [userData, setUserData] = useState({ name: '', username: '', email: '' });

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Add your logic for adding the user here
    console.log('Adding user:', userData);

    // Clear the form and close the modal
    setUserData({ name: '', username: '', email: '' });
    closeModal();
  };

  return (
    <div>
      <div className="modal" style={{ display: showModal ? 'flex' : 'none' }}>
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Add User</h2>

          <Form.Group controlId="formName">
            <Form.Control
              type="text"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
            />
          </Form.Group>
          <br/>
          <Form.Group controlId="formUsername">
            <Form.Control
              type="text"
              name="username"
              value={userData.username}
              onChange={handleInputChange}
              placeholder="Enter username"
            />
          </Form.Group>
          <br/>
          <Form.Group controlId="formEmail">
            <Form.Control
              type="text"
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              placeholder="Enter email"
            />
          </Form.Group>
          <br/>
          <Button variant="primary" onClick={handleAddUser}>
            Add
          </Button>
        </div>
      </div>

      <div style={{ paddingTop: '20px' }}>
        <Button variant="info" onClick={openModal}>
          Add new User
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
