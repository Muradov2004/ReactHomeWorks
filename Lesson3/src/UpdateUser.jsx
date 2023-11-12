import {Modal, Form, Input, Button} from "antd";
import {useState} from "react";

let UpdateUser = ({isModalOpen, setIsModalOpen, selectedUser, userArr, setUserArr}) => {
  let [name, setName] = useState('');
  let [username, setUsername] = useState('');
  let [email, setEmail] = useState('');

  let handleCancel = () => {
    setIsModalOpen(false);
  };

  let handleUpdate = () => {
    const updatedUser = {
      ...selectedUser,
      name,
      username,
      email,
    };

    let updatedUserArr = userArr.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUserArr(updatedUserArr);

    setName('');
    setUsername('');
    setEmail('');

    handleCancel();
  }

  return (
    <Modal title="Update User" open={isModalOpen} footer={null} onCancel={handleCancel}>
      <Form>
        <Form.Item>
          <Input placeholder='name' value={name} onChange={(e) => setName(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
        </Form.Item>
        <Form.Item>
          <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
        </Form.Item>
      </Form>
      <Button type='primary' style={{width: '100%'}} onClick={handleUpdate}>Update</Button>
    </Modal>);
};

export default UpdateUser;