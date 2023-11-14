import {Form, Input} from "antd";

let MyForm = () => {
  return (
    <div>
      <Form>
        <Form.Item>
          <Input/>
        </Form.Item>
        <Form.Item>
          <Input type='password'/>
        </Form.Item>
        <Form.Item>
          <Input/>
        </Form.Item>
      </Form>
    </div>
  );
}

export default MyForm;