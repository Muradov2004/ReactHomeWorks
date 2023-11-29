import {useEffect, useState} from 'react';
import {Circles} from "react-loader-spinner";


function MyBag() {
  let [arr, setArr] = useState([])
  let [element, setElement] = useState('')
  let [flag, setFlag] = useState(false)
  let [isEmpty,setIsEmpty] = useState(true);

  const getData = () => {
    fetch('http://localhost:5000/my-bag')
      .then(res => res.json())
      .then(data => {setArr(data);setIsEmpty(false)})
  }

  useEffect(() => {
    getData()
  }, [flag])

  const deleteFromBag = (id) => {
    console.log(id)
    fetch(`http://localhost:5000/delete-mybag/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.text())
      .then(data => setElement(data))
    setFlag(!flag)
    getData()
  }

  if (isEmpty) {
    return (<div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      <Circles
        height="80"
        width="80"
        color="black"
        ariaLabel="threedots-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>)
  }

  return (
    <div className="App">
      <ul>
        {arr.map((item) => {
          return (
            <li>
              <p>{item.product_name}</p>
              <p>{item.product_description}</p>
              <p>{item.product_price}</p>
              <button onClick={() => deleteFromBag(item.id)}>DELETE</button>
            </li>
          )
        })}
      </ul>

      {flag && <div className='editWindow'>
        <div >
          <p>{element}</p>
          <button onClick={() => {
            setFlag(!flag)
          }}>EXIT</button>
        </div>
      </div>}
    </div>
  );
}

export default MyBag;
