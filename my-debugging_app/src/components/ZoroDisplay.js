import React from 'react';

//Incorrect prop name used (`counter` instead of `count`) as seen in BuggyCounter.js which imports this file.
const ZoroDisplay = ({ counter }) => {
  return <h2>The buggy count is: {counter}</h2>;
};

export default ZoroDisplay;
