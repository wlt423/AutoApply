import React, { useState } from 'react';
    import axios from 'axios';

    function Login({ onLogin }) {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');

      const handleLogin = async (e) => {
        e.preventDefault();
        try {
          const response = await axios.post('http://localhost:5000/login', { email, password });
          alert(response.data.message);
          onLogin(); // Call the onLogin function passed as a prop
        } catch (error) {
          console.error('Error logging in:', error);
          alert('Login failed. Please check your credentials.');
        }
      };

      return (
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      );
    }

    export default Login;
