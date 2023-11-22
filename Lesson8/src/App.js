import './App.css';
import {useState} from "react";

function App() {
  let [searchValue, setSearchValue] = useState('');
  let [arr, setArr] = useState([]);

  let handleSearch = () => {
    fetch(`http://localhost:5000/search-goods/${searchValue}`, {
      method: 'GET',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => setArr(data));
    setSearchValue('');
  }


  return (
    <div className="App">
      <header className='App-header'>
        <input value={searchValue} type="text" placeholder='Search' onChange={(e) => setSearchValue(e.target.value)}/>
        <br/>
        <button onClick={handleSearch}>search</button>
        <div>
          <ul>
            {arr.map((item) => {
              return (
                <div key={item.id}>
                  <li>{item.product_name}</li>
                  <li>{item.product_description}</li>
                  <li>{item.product_price}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
