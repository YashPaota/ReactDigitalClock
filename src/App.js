import React , {useState} from "react";
import "./App.css";
const App = () => {
 
  let date = new Date().toLocaleTimeString();
  const[time , settime] = useState(date);
  setInterval(() => {
    date = new Date().toLocaleTimeString();
    settime(date);
  },1000)

  return(
    <div className="box-container">
    <div className="container">
       <h1>{time}</h1>
    </div>
    </div>
    
  );
};

export default App;