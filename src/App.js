// import logo from './logo.svg';
// import './App.css';
import styled from 'styled-components';

import StartGame from './Component/StartGame';
import GamePlay from './Component/GamePlay';
import { useState } from 'react';


function App() {
  const [isGameStart, SetIsGameStart] = useState(false);

  const toggleGame = ()=>{
    SetIsGameStart(prev => !prev)
  }

  return (
    <div className="App">
      {isGameStart? <GamePlay/>:<StartGame toggle={toggleGame}/>}
    </div>
  );
}

export default App;

