function Button({handleClick, name, color}){
  return(
    <button style={{backgroundColor: `${color}`}} 
      onClick={handleClick}>
      {name}
    </button>
  );
}

export default Button