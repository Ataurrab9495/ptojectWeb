import {useState} from "react";
import './App.css';

function App() {
  const [count , setCount] = useState(0);
  

  const counter =()=>{
    setTimeout(()=>{ 

      setCount(count+1)

    },1000)

  }

  const Dcounter =()=>{
    setTimeout(()=>{ 
      if(count >= 1){ 
        setCount(count-1)
      }
    },1000)

  }
  return (
    <div className="App">
      <button onClick={counter}>+</button>
      {count}
      <button onClick={Dcounter}>-</button>
    </div>
  );
}

export default App;
