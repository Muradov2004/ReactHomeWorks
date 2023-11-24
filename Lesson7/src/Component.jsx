import {useContext, useState} from "react";
import './Component.css';
import {GoodsContext} from "./App";
import {Button, Form, Input, Modal} from "antd";

let Component = () => {
  let [index, setIndex] = useState(null);
  const [form] = Form.useForm();
  const {goodsArr, isModalOpen, setIsModalOpen, handleUpdate, setObj} = useContext(GoodsContext);



  return (
    <div>

      <ul>
        {goodsArr.map((item, index) => {
          return (
            <li key={index}>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <button onClick={() => {
                setIsModalOpen(true);
                setIndex(index);
                setObj(item);
              }}>Update
              </button>
            </li>
          );
        })}
      </ul>
      <Modal open={isModalOpen} onCancel={() => setIsModalOpen(false)} title="Update Goods" footer={false}>
        <Form form={form}>
          <Form.Item name='name' rules={[
            {
              required: true,
              message: 'Please enter a name',
            },
          ]}>
            <Input onChange={(e) => {
              setObj((prevObj) => ({...prevObj, 'product_name': e.target.value}));
            }} placeholder='Name'/>
          </Form.Item>
          <Form.Item name='description' rules={[
            {
              required: true,
              message: 'Please enter a description',
            },
          ]}>
            <Input onChange={(e) => {
              setObj((prevObj) => ({...prevObj, 'product_description': e.target.value}));
            }} placeholder='Description'/>
          </Form.Item>
          <Form.Item name='price' rules={[
            {
              required: true,
              message: 'Please enter a price',
            },
          ]}>
            <Input onChange={(e) => {
              setObj((prevObj) => ({...prevObj, 'product_price': parseInt(e.target.value)}));
            }} placeholder='Price'/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" style={{width: '100%'}} htmlType="submit" onClick={() => {

              handleUpdate(index);
              setIsModalOpen(false);
            }}>Update</Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default Component;