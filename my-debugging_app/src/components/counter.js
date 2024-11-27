import React, { useState } from 'react';
import Display from './display.js';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <Display count={count} />
    </div>
  );
};

export default Counter;
