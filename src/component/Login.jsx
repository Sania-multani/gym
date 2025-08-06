import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Login = () => {
     const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: Add API call or authentication logic here
    console.log('Logging in with:', { email, password });
  };

  return (
    <>
        <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input 
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required 
            placeholder="Enter your email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input 
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required 
            placeholder="Enter your password"
          />
        </div>

    <NavLink to="/profile">  <button type="submit" className="login-btn">Login</button> </NavLink>  
        <p className="login-footer">
          Don’t have an account? <NavLink to="/register">Register here</NavLink>
        </p>
      </form>
    </div>
    </>
  )
}

export default Login