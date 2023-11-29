import { useEffect, useState } from 'react';
import {Circles} from "react-loader-spinner";


function Admin() {
    let [arr, setArr] = useState([])
    let [element, setElement] = useState([])
    let [price, setPrice] = useState(null)
    let [showModal, setShowModal] = useState(false)
    let [showInfo, setShowInfo] = useState(false)
    let [changedObject, setChangedObject] = useState({})
    let [flag, setFlag] = useState(false)

    useEffect(() => {
        async function getData(){
            let res 

            res = await fetch('http://localhost:5000/goods')
            let data =  await res.json()
            setArr(data)                     
        }
        getData().catch(err => console.log(err))
    }, [flag])

    const changeOfPrice = () => {
        let obj = { ...changedObject, "product_price": price }
        fetch(`http://localhost:5000/change-goods/${changedObject.id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        })
        .then(res => {
            console.log(res)
            if(!res.ok){
                 console.log(res.statusText)
            }
            return res.text()
          })
            .then(data => setElement(data))
            .catch(err => console.log('err'))
        setShowInfo(true);
    }

    const deleteFromGoods = (obj) => {
        console.log(obj)
        fetch(`http://localhost:5000/delete-goods/${obj.id}`, {
            method: 'DELETE',
        })
            .then(res => res.text())
            .then(data => setElement(data))
        setFlag(!flag)
        setShowInfo(true);
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

    console.log(arr)
    return (
        <div className="App">
            <ul>
                {arr.map((item) => {
                    return (
                        <li key={item.id}>
                            <p>{item.product_name}</p>
                            <p>{item.product_description}</p>
                            <p>{item.product_price}</p>
                            <button onClick={() => {
                                setChangedObject(item)
                                setShowModal(true)
                            }}>EDIT</button>
                            <button onClick={() => {
                                deleteFromGoods(item)
                            }}>DELETE</button>

                        </li>
                    )
                })}
            </ul>
            {showInfo && <div className='editWindow'>
                <div >
                    <p>{element}</p>
                    <button onClick={() => {
                        setShowInfo(false);
                    }}>EXIT</button>
                </div>
            </div>}
            {showModal && <div className='editWindow'>
                <div >
                    <input onChange={(ev) => setPrice(ev.target.value)} type="number" />
                    <button onClick={() => {
                        setShowModal(false)
                        setFlag(!flag)
                        changeOfPrice()
                    }}>EDIT</button>
                </div>
            </div>}
        </div>
    );
}

export default Admin;
