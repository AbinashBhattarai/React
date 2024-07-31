import { useState, useEffect } from 'react'
import './App.css'
import Button from './components/buttons.jsx'

function App() {
  const [color, setColor] = useState("");

  const getRandom = () => {
    return Math.floor(Math.random() * 256);
  }
  const changeColor = (param) => {
    setColor(`${param}` || `rgb(${getRandom()}, ${getRandom()}, ${getRandom()})`)
  }


  return (
    <div className='container' style={{backgroundColor: `${color}`}}>
      <div>
        <Button handleClick={ () => changeColor("")} name = "Change Background" color="" />
        <div className='btn-container'>
          <Button handleClick={ () => changeColor("red")} name="Red" color="red" />
          <Button handleClick={ () => changeColor("green")} name="Green" color="green" />
          <Button handleClick={ () => changeColor("Blue")} name="Blue" color="blue" />
        </div>
      </div>
    </div>
  )
}

export default App
