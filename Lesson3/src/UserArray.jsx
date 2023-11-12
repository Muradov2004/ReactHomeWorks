import './user-array.css';
import {Button, Flex} from 'antd';
import UpdateUser from "./UpdateUser";
import {useState} from "react";

let UserA = ({userArr, setUserArr}) => {

  let [isModalOpen, setIsModalOpen] = useState(false);
  let [selectedUser, setSelectedUser] = useState({});

  let handleDelete = (item) => {
    let newArr = userArr.filter((i) => i.id !== item.id);
    setUserArr(newArr);
  };

  let handleUpdate = (item) => {
    setIsModalOpen(true);
    setSelectedUser(userArr.filter((i) => i.id === item.id)[0]);
  };

  return (
    <div className="userarray">
      <Flex wrap='wrap'>
        <ul>
          {userArr.map((item, index) => {
            return (
              <div className='user-container' key={index}>
                <p>id : {item.id}</p>
                <p>name : {item.name}</p>
                <p>username : {item.username}</p>
                <p>email : {item.email}</p>
                <div className="buttons" key={item.id}>
                  <Button type="primary" onClick={() => handleUpdate(item)}>Update</Button>{' '}
                  <Button type="primary" danger onClick={() => handleDelete(item)}>Delete</Button>
                </div>
              </div>
            )
          })}
        </ul>
      </Flex>
      <UpdateUser isModalOpen={isModalOpen}
                  setIsModalOpen={setIsModalOpen}
                  selectedUser={selectedUser}
                  userArr={userArr}
                  setUserArr={setUserArr}/>
    </div>
  )

}

export default UserA;