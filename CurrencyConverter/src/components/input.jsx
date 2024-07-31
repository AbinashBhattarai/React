function Input(
  {label, 
  currency, amount, 
  handleAmountChange, 
  handleCurrencyChange, 
  options, 
  isActive=false}
  ){
  return(
    <div className='container-input'>
      <label> 
        {label}
        <input type="number" 
          placeholder="Amount" 
          value={amount} 
          onChange={(e)=>handleAmountChange(e.target.value)} 
          disabled={isActive}
        />
      </label>
      <label>
        Currency
        <select 
          value={currency} 
          onChange={(e)=>handleCurrencyChange(e.target.value)}>
          {options && options.map((option) => 
            <option key={option} value={option}>{option}</option>
          )}
        </select> 
      </label>
    </div>
  )
}

export default Input