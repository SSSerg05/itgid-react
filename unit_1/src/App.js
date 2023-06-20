import React from 'react';
import logo from './logo.svg';
import './App.css';

const orangeBigText = {
    color : "orange",
    fontSize: "34px"
}

let text = 'test variable';

function App() {
  let text2 = '222';
  const style = {
    fontSize: '24px',
    fontStyle : 'italic',
    color: 'red',
 }

  return (
    <>
      <div className="">
        <h1 style={style}>app_1</h1>
        <img src="/images/logo.svg" alt="unit-1" width={64}/>
        <ul>
          <li>Hello</li>
          <li>{text + text2}</li>
        </ul>
      </div>
    </>
  );
}

export default App;
