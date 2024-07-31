import { useState, useEffect } from 'react'
import './App.css'
import Input from './components/input.jsx'
import useCurrencyInfo from './hooks/useCurrencyInfo.js'

function App() {
  const [fromAmount, setFromAmount] = useState(0);
  const [toAmount, setToAmount] = useState(0);
  const [fromCurr, setFromCurr] = useState("usd");
  const [toCurr, setToCurr] = useState("npr");

  const currencyInfo = useCurrencyInfo(fromCurr);
  const currencyOptions = Object.keys(currencyInfo);

  const swap = () => {
    setFromAmount(toAmount);
    setToAmount(fromAmount);
    setFromCurr(toCurr);
    setToCurr(fromCurr);
  }

  const convert = () => {
    (setToAmount(parseFloat(fromAmount * currencyInfo[toCurr]).toFixed(2)));
  }
  useEffect(() => {
    convert();
  }, [convert, toCurr, fromAmount])


  return (
    <>
      <div className='container'>
        <div className='title'>
        <h1>Currency Converter</h1>
        </div>
        <div className='wrapper'>
          <button className="btn swap-btn" onClick={swap}>Swap</button>

          <Input label="From" 
            amount={fromAmount}
            currency={fromCurr} 
            handleAmountChange={(amount) => setFromAmount(amount)}
            handleCurrencyChange={(currency) => setFromCurr(currency)}
            options={currencyOptions}
          />

          <Input label="To" 
            amount={toAmount}
            currency={toCurr}
            handleAmountChange={(amount) => setToAmount(amount)}
            handleCurrencyChange={(currency) => setToCurr(currency)}
            options={currencyOptions}
            isActive={true}
          />
        </div>
      </div>
    </>
  )
}

export default App
