import React, {useEffect, useState} from 'react';
import './App.css';
import HelloWorld from "./HelloWorld";

function App() {
      // http://localhost:3030/hello/toto
    
   const [name, setName] = useState("");

    useEffect(() => {
        getName("Henry")
            .then(setName);
    });
   
  return (
    <div className="App">
      <HelloWorld name={name}/>
    </div>
  );
}

export async function getName(nameCall:string):Promise<string>{
    const response = await fetch(`http://localhost:3030/hello/${nameCall}`);
    return await response.text();
}

export default App;
