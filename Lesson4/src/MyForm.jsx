import {Modal, Button, Form, Input} from "antd";
import {useState} from "react";

let MyForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const showModal = () => {
    setIsModalOpen(true);
  };

  const onFinish = (values) => {
    setUsername(values.username);
    setEmail(values.email);
    setPassword(values.password);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <p>Username : {username}</p>
      <p>Email : {email}</p>
      <p>Password : {password}</p>
      <Button type="primary" onClick={showModal}>
        Open Form
      </Button>
      <Modal open={isModalOpen} onCancel={handleCancel} footer={null} title='Form'>
        <Form onFinish={onFinish} autoComplete='off' layout='vertical'>
          <Form.Item label='Username' name="username"
                     rules={[
                       {
                         required: true,
                         message: 'Please input your username!',
                       },
                     ]}>
            <Input/>
          </Form.Item>
          <Form.Item label='Email' name="email"
                     rules={[
                       {
                         type: 'email',
                         required: true,
                         message: 'Please input your email!',
                       },
                     ]}>
            <Input/>
          </Form.Item>
          <Form.Item label='Password' name="password"
                     rules={[
                       {
                         required: true,
                         message: 'Please input your password!',
                       },
                     ]}>
            <Input type='password'/>
          </Form.Item>
          <Form.Item>
            <Button htmlType='submit' type='primary' style={{width: '100%'}}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default MyForm;