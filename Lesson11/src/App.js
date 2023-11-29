import './App.css';
import {Link, Route, Routes} from "react-router-dom";
import Goods from "./Goods";
import MyBag from "./MyBag";

function App() {
  return (
    <div className="App">
      <Link to='/'>Goods</Link>{' '}
      <Link to='/my-bag'>MyBag</Link>

      <Routes>
        <Route path='/' element={<Goods/>}/>
        <Route path='/my-bag' element={<MyBag/>}/>
      </Routes>
    </div>
  );
}

export default App;
