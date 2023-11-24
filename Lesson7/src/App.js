import './App.css';
import {createContext, useState} from "react";
import {goods} from "./Goods";
import Component from "./Component";


export let GoodsContext = createContext();


function App() {
  let [goodsArr, setGoodsArr] = useState(goods);
  let [obj, setObj] = useState({'product_name': '', 'product_description': '', 'product_price': ''});

  let [isModalOpen, setIsModalOpen] = useState(false);

  let handleUpdate = (objIndex) => {
    let newArr = goodsArr.map((item, index) => index === objIndex ? obj : item);
    setGoodsArr(newArr);

  }

  return (
    <GoodsContext.Provider value={{goodsArr, isModalOpen, setIsModalOpen, handleUpdate, setObj}}>
      <div className="App">
        <Component/>
      </div>
    </GoodsContext.Provider>
  );
}

export default App;
