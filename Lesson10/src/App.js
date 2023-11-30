import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {Button, Form, Input, Modal} from 'antd';
import {useState} from "react";

function App() {
  let [name, setName] = useState('');
  let [description, setDescription] = useState('');
  let [price, setPrice] = useState('');
  let [objIndex, setObjIndex] = useState(null);
  let [isOpen, setIsOpen] = useState(false);
  let [isOpenCreate, setIsOpenCreate] = useState(false);
  let products = useSelector((state) => state.myArr);

  let resetInputs = () => {
    setName('');
    setDescription('');
    setPrice(null);
    setObjIndex(null);
  }

  let dispatch = useDispatch();

  let handleDelete = (index) => {
    dispatch({type: 'DELETE PRODUCT', payload: index});
  }

  let handleUpdate = () => {
    let obj = {index: objIndex, name: name, description: description, price: price}
    dispatch({type: 'UPDATE PRODUCT', payload: obj})
    resetInputs();
  }

  let handleCreate = () => {
    let obj = {name: name, description: description, price: price}
    dispatch({type: 'CREATE PRODUCT', payload: obj})
    resetInputs();
  }

  return (
    <div className="App">
      <Button type='primary'
              style={{width: '200px', margin: '10px', fontWeight: 'bold', fontSize: '20px', height: '80px'}}
              onClick={() => setIsOpenCreate(true)}>Create NEW</Button>
      <ul>
        {
          products.map((item, index) => {
            return (<div key={index}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => {
                setObjIndex(index);
                setName(item.product_name);
                setDescription(item.product_description);
                setPrice(item.product_price);
                setIsOpen(true);
              }}>Update
              </button>
            </div>);
          })
        }
      </ul>
      <Modal open={isOpen} title='Update' footer={null} onCancel={() => {
        setIsOpen(false);
        resetInputs();
      }}>
        <Form>
          <Form.Item>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='name'></Input>
          </Form.Item>
          <Form.Item>
            <Input value={description} onChange={(e) => setDescription(e.target.value)}
                   placeholder='desription'></Input>
          </Form.Item>
          <Form.Item>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price'></Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' style={{width: '100%'}} onClick={() => {
              handleUpdate();
              setIsOpen(false);
            }}>Update</Button>
          </Form.Item>
        </Form>
      </Modal>
      <Modal open={isOpenCreate} title='Create product' footer={null} onCancel={() => {
        setIsOpenCreate(false);
        resetInputs();
      }}>
        <Form>
          <Form.Item>
            <Input value={name} onChange={(e) => setName(e.target.value)} placeholder='name'></Input>
          </Form.Item>
          <Form.Item>
            <Input value={description} onChange={(e) => setDescription(e.target.value)}
                   placeholder='desription'></Input>
          </Form.Item>
          <Form.Item>
            <Input value={price} onChange={(e) => setPrice(e.target.value)} placeholder='price'></Input>
          </Form.Item>
          <Form.Item>
            <Button type='primary' style={{width: '100%'}} onClick={() => {
              handleCreate();
              setIsOpenCreate(false);
            }}>Create</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default App;
