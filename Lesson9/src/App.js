import './App.css';
import MyBag from './MyBag';
import Goods from './Goods';
import { Routes, Route, Link } from 'react-router-dom';
import Admin from './Admin';


function App() {
  return (
    <div className="App">
      <Link to='/'>Goods</Link>
      <Link to='/my-bag'>MyBag</Link>
      <Link to='/admin'>Admin</Link>

      <Routes>
        <Route path='/' element={<Goods />} />
        <Route path='/my-bag' element={<MyBag />} />
        <Route path='/admin' element={<Admin />} />

      </Routes>


    </div>
  );
}

export default App;
