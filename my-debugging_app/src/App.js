import React from 'react';
import User from './components/userProfile.js';
import Counter from './components/counter.js';
import BuggyCounter from './components/buggyCounter.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <h1>React App for Testing and Debugging</h1>
      <p>
        <>
          <span>Testing the bugs</span>
        </>
      </p>
      {/* User Component */}
      <User name="Dennis Wangwan" age={30} address="123 Elm Street, SpringKiambu" />
      {/* Correctly working Counter */}
      <Counter />
      <hr />
      {/* Buggy Counter for Debugging */}
      <BuggyCounter />
    </div>
  );
};

export default App;
