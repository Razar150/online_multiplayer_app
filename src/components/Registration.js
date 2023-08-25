import React, { useState } from 'react';

// User registration component
function Registration() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegistration = () => {
    // Send the registration data to the server for account creation
    // Handle any errors or success messages from the server
    console.log('Registration data:', { username, password });
  };
  
  return (
    <div>
      <h1>Registration</h1>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegistration}>Register</button>
    </div>
  );
}

export default Registration;