import React, {useState} from 'react';
import {Button, Form, Input, Modal} from 'antd';

let AddUser = ({userArr, setUserArr}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userData, setUserData] = useState({
    id: userArr[userArr.length - 1].id + 1,
    name: '',
    username: '',
    email: ''
  });


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
    if (userData.name !== '' && userData.username !== '' && userData.email !== '') {
      let newUserArr = [...userArr, userData];
      setUserArr(newUserArr);
      setUserData({id: `${userData.id + 1}`, name: '', username: '', email: ''});
    }
    closeModal();
  };

  return (
    <div>
      <Modal title='Add User' open={isModalOpen} footer={null} onCancel={closeModal}>

        <Form>
          <Form.Item>
            <Input name='name' placeholder='name' value={userData.name} onChange={(e) => handleInputChange(e)}/>
          </Form.Item>
          <Form.Item>
            <Input name='username' placeholder='username' value={userData.username}
                   onChange={(e) => handleInputChange(e)}/>
          </Form.Item>
          <Form.Item>
            <Input name='email' placeholder='email' value={userData.email} onChange={(e) => handleInputChange(e)}/>
          </Form.Item>
        </Form>

        <Button type="primary" onClick={handleAddUser} style={{width: '100%'}}>
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
