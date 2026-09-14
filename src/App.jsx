import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Name..."
        value={name}
        onChange={handleChange}
      />

      <p>{name}</p>
    </div>
  );
}

export default App;