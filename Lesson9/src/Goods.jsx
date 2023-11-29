import { useEffect, useState } from 'react';
import {Circles} from "react-loader-spinner";



function Goods() {
  let [arr, setArr] = useState([])
  let [element, setElement] = useState('')
  let [flag, setFlag] = useState(false)


  useEffect(() => {
    fetch('http://localhost:5000/goods')
      .then(res => res.json())
      .then(data => setArr(data))
  }, [])

  const addToBag = (obj) => {
    console.log(obj)
    fetch('http://localhost:5000/add-goods', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(obj)
    })
      .then(res => {
        console.log(res)
        if (!res.ok) {
          console.log(res.statusText)
        }
        return res.text()
      })
      .then(data => setElement(data))
  }

  if (arr.length === 0) {
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
              <button onClick={() => {
                addToBag(item)
                setFlag(true)
              }}>ADD</button>
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

export default Goods;
