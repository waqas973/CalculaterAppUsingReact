import { useState } from 'react';
import './App.css';

function App() {
  const [result,setresult] = useState('');
  const handleClick = (e)=>{
        setresult(result.concat(e.target.name));
  } 
    const handleClear = ()=>{
    setresult('');
    } 
    const handleBackspace = ()=>{
      setresult(result.slice(0, result.length - 1));
      } 
      const handleCal = ()=>{
        try{
          setresult(eval(result).toString());
        }catch(Error){
           setresult("Error");
        }
        
        
      } 
      

  return (
       <div className='containers'>
      <form>
         <input type='text'  value={result}/>
      </form>
        <div className="items">
       <button onClick={handleClear} className="clear" >Clear</button>
       <button onClick={handleBackspace}>C</button>
       <button name='/' onClick={handleClick}>&divide;</button>
       <button name='7' onClick={handleClick}>7</button>
       <button name='8' onClick={handleClick}>8</button>
       <button name='9' onClick={handleClick}>9</button>
       <button name='*' onClick={handleClick}>&times;</button>
       <button name='4' onClick={handleClick}>4</button>
       <button name='5' onClick={handleClick}>5</button>
       <button name='6' onClick={handleClick}>6</button>
       <button name='-' onClick={handleClick}>&ndash;</button>
       <button name='1' onClick={handleClick}>1</button>
       <button name='2' onClick={handleClick}>2</button>
       <button name='3' onClick={handleClick}>3</button>
       <button name='+' onClick={handleClick}>+</button>
       <button name='0' onClick={handleClick}>0</button>
       <button className="equal"  onClick={handleCal}>=</button>
       </div>
       </div>
  );
}

export default App;
