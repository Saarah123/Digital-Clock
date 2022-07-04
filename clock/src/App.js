import React from 'react';
import './App.css';
import { useState } from 'react';


function App() {
 let time = new Date().toLocaleTimeString()
 
const[ctime,setCtime] = useState(time)

const handleChange = ()=>{
  time = new Date().toLocaleTimeString()
  setCtime(time);

}

  setTimeout(handleChange,1000)



  return (
    <div className="sakshi">
     <h1>{ctime}</h1>
   
    </div>
  );
}

export default App;
