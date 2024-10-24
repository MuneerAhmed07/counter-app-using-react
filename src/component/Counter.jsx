import { useState } from 'react';
import './counter.css';

const Counter = () => {

    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }

    const Decrement = () => {
        setCount(count - 1);
    }

  return (
    <div>
      <h1>Counter App</h1>
      <p>{count}</p>
      <div className='btn'>
        <button onClick={Decrement}>-</button>
        <button onClick={Increment} className='increment'>+</button>
      </div>
    </div>
  )
}

export default Counter;
