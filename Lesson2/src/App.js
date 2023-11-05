import logo from './logo.svg';
import './App.css';
import Goods from "./Goods";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <Goods name={"cake"} description={"fruit cake"} price={15}/>
        <Goods name={"chocolate"} description={"dark chocolate"} price={8}/>
        <Goods name={"cake"} description={"chocolate cake"} price={18}/>
        <Goods name={"product"} description={"sadfasfgasdg"} price={1000}/>
        <Goods name={"salam"} description={"dsnogjbweknf"} price={70}/>
      </header>
    </div>
  );
}

export default App;
