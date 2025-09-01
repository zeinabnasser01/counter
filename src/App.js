import React,{useState} from 'react';
import './App.css';
import Counter from './counter';

function App() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    console.log('incre');
    setCounter(counter + 1)
  }
  const handleDecrement = ()=>{
    setCounter(counter - 1)
  }
  const handleReset = ()=>{
    setCounter(0)
  }
  return (
    <div className="App">
      <Counter 
      counter={counter}
      handleIncrement={handleIncrement}
      handleDecrement={handleDecrement}
      handleReset={handleReset}
       />
    </div>
  );
}

export default App;
