import React from 'react';
import logo from './logo.svg';
import './App.css';
import HelloWorld from "./HelloWorld";

function App() {
      // http://localhost:3030/hello/toto
  return (
    <div className="App">
      <HelloWorld name="Jackie"/>
    </div>
  );
}

export default App;
