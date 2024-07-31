import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [randomKey, setRandomKey] = useState("")
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const keyRef = useRef(null);

  const generateKey = () => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let key = "";
    if(numbers){
      str += "0987654321";
    }
    if(characters){
      str += "!@#$%^&*()_+";
    }
    
    for(let i=0; i<length; i++){
      let random = Math.floor(Math.random() * str.length);
      key +=  str.charAt(random);
    }
    setRandomKey(key);
  };

  const copyToClipBoard = () => {
    keyRef.current?.select();
    window.navigator.clipboard.writeText(randomKey);
  }

  useEffect(() => {
    generateKey()
  }, [length, numbers, characters])

  return (
    <>
      <div className='container'>
        <div className='title'>
        <h1>Random Key Generator</h1>
        </div>
        <div className='wrapper'>
          <div className='container-input'>
            <input type="text" value={randomKey} ref={keyRef} readOnly />
            <button onClick={copyToClipBoard}>Copy</button>
          </div>
          <button onClick={generateKey} className='action-btn'>Generate</button>
          <div className='filters'>
            <label>
              <input onChange={(e) => {setLength(e.target.value)}}
                type="range"  min="8" max="38" step="3" value={length} /> Length({length})
            </label>
            <label htmlFor="number">
              <input onChange={() => {setNumbers((prev) => !prev)}}
                id='number' type="checkbox" defaultChecked={setNumbers} /> Numbers
            </label>
            <label htmlFor="char">
              <input onChange={() => {setCharacters((prev) => !prev)}}
                id='char' type="checkbox" defaultChecked={setCharacters} /> Characters
            </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
