import HeaderComponent from "./HeaderComponent";
import {Routes, Route} from "react-router-dom";
import Home from './Home';
import About from "./About";
import './App.css';
import {useEffect, useState} from "react";
import Post from "./Post";
import Comment from "./Comment";


const App = () => {
  let [arr, setArr] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => setArr(data))
  });
  return (
    <div>
      <HeaderComponent/>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='posts' element={<Post arr={arr}/>}/>
          <Route path='comments' element={<Comment arr={arr}/>}/>
        </Route>
        <Route path='about' element={<About/>}/>
      </Routes>
    </div>
  );
}
export default App;