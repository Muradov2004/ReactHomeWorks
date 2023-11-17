import './App.css';
import MyForm from "./MyForm";
import styled from "styled-components";

function App() {
  return (
    <AppDiv>
      <MyForm/>
    </AppDiv>
  );
}

let AppDiv = styled.div`
  width: 100%;
  color: white;
  background-color: #282c34;
  font-size: calc(10px + 2vmin);
  text-align: center;
`;

export default App;
