import React, {useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';

function AddUser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({name: '', username: '', email: ''});

  const showModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleAddUser = () => {
    // Add your logic for adding the user here
    console.log('Adding user:', userData);

    // Clear the form and close the modal
    setUserData({name: '', username: '', email: ''});
    closeModal();
  };

  return (
    <div>
      <Modal title='Add User' open={isModalOpen} footer={null} onCancel={closeModal}>

        <Form>
          <Form.Item>
            <Input placeholder='name'/>
          </Form.Item>
          <Form.Item>
            <Input placeholder='username'/>
          </Form.Item>
          <Form.Item>
            <Input placeholder='email'/>
          </Form.Item>
        </Form>

        <Button type="primary" onClick={handleAddUser}>
          Add
        </Button>
      </Modal>
      <div style={{paddingTop: '20px'}}>
        <Button type="primary" onClick={showModal}>
          Add new User
        </Button>
      </div>
    </div>
  );
}

export default AddUser;
