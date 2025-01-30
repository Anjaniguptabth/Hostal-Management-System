import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [crn, setCrn] = useState('');  // Replaced email with CRN
  const [password, setPassword] = useState('');
  const [loginAs, setLoginAs] = useState('admin'); // Default to 'admin'
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { crn, password, role: loginAs });
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      alert('Login successful');

      // Redirect based on the role
      if (loginAs === 'admin') {
        navigate('/admin-dashboard');
      } else if (loginAs === 'employee') {
        navigate('/employee-dashboard');
      } else {
        navigate('/student-dashboard');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <form className="login-form" onSubmit={handleLogin}>
          <h1>Login</h1>

          {/* Login As Section in Same Row */}
          <div className="role-selection">
            <label htmlFor="role"><h2>Login As:</h2></label>
            <select
              id="role"
              className="role-select"
              value={loginAs}
              onChange={(e) => setLoginAs(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="employee">Employee</option>
              <option value="student">Student</option>
            </select>
          </div>

          {/* CRN Input Field */}
          <input
            type="text"
            placeholder="CRN Number"
            value={crn}
            onChange={(e) => setCrn(e.target.value)}
            required
          />

          {/* Password Input Field */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* Submit Button */}
          <button type="submit">Login</button>

          <div className="additional-options">
            <a href="/SignUp" className="signup-link">Sign Up</a>
            <a href="/PasswordReset" className="forgot-password-link">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
