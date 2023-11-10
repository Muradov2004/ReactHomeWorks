import './user-array.css';
import Button from 'react-bootstrap/Button';


function UserA({userArr, setUserArr}) {


  return (
    <div className="userarray">
      <ul>
        {userArr.map((item, index) => {
          return (
            <div className='user-container'>
              <p key={item.id}>id : {item.id}</p>
              <p key={item.id}>name : {item.name}</p>
              <p key={item.id}>username : {item.username}</p>
              <p key={item.id}>email : {item.email}</p>
              <div className="buttons">
                <Button variant="outline-success">Update</Button>{' '}
                <Button variant="outline-danger">Delete</Button>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )

}

export default UserA;