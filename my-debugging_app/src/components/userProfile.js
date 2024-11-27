import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import '../App.css';

const User = ({ name, age, address }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', marginBottom: '20px' }}>
      <h2>User Information</h2>
      <p>
        <strong>Name:</strong> {name}
      </p>
      <p>
        <strong>Age:</strong> {age}
      </p>
      <p>
        <strong>Address:</strong> {address}
      </p>
    </div>
  );
};

User.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  address: PropTypes.string.isRequired,
};

export default User;
