import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './components/button.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const inceraseCount = () => {
    if(count < 20){
      setCount((count) => count + 1);
      setError("");
    }
    else{
      setError("Max limit reached");
    }
  };

  const deceraseCount = () => {
    if(count > 0){
      setCount((count) => count - 1);
      setError("");
    }
    else{
      setError("Min limit reached");
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p className="error">{error}</p>
        <p className="counter">Count is {count}</p>
        <Button handleClick={inceraseCount} name="Increase Count" />
        <Button handleClick={deceraseCount} name="Decrease Count" />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
