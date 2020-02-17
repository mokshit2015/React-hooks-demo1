import React, { useRef, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const no1 = useRef(null);
  const no2 = useRef(null);
  const [no3,setNo] = useState(0);

  const ButtonClick = () => {
    no1.current.focus();
  }

  useEffect( () => {
    no1.current.focus();
  },[]); 

  const SecondClick = () => {
    no2.current.focus();
    setNo(no3 + 1);
  }

  return (
    <div className="App">
     <input ref={no1} type="text"/>
     <button onClick={ButtonClick}>Focus the input 1 </button>
     <br></br>
     <input ref={no2} type="text"/>
     
     <button onClick={SecondClick}>Focus and Update No</button>
     <br></br>
     No : {no3}
    </div>
  );
}

export default App;
