import './App.css'

import { useState } from "react";

//Component = function that returns JSX 
//props or {age}
//Rerender the component
function Greeting({age}) {
  return <h1>Hello! I hate this already, {getName()} {age}</h1>
}

function App() {
  const [showGreeting, setShowGreeting] = useState(false);
  function toggleGreeting() {
    setShowGreeting(!showGreeting);
  }
  return (
    <div>
      <button onClick={toggleGreeting}>Click Me</button>
       
      {showGreeting && <Greeting age={"Nigga"} />}
    </div>
          
  );
}

function getName() {
  return "Rainer";
}

export default App
