import React, { useState } from 'react';
import ZoroDisplay from './ZoroDisplay.js';

const BuggyCounter = () => {
  const [counter, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <ZoroDisplay counter={counter} />
    </div>
  );
};

export default BuggyCounter;
