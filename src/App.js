import logo from './logo.svg';
import './App.css';

import Home from "./Pages/Home";
import Login from "./Pages/Login"

import { AppContainer } from "./styles/containers";


function App() {
  return (
    <AppContainer>
      {/* <Home/> */}
      <Login/>
    </AppContainer>
  );
}

export default App;
