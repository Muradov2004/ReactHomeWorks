import {configureStore} from "@reduxjs/toolkit";
import goodsSlice from './reducerGoods';
import bagSlice from './reducerBag'

let store = configureStore({reducer: {goods: goodsSlice,myBag :bagSlice}});

export default store;