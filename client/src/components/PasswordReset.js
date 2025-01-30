import React, { useState } from 'react';
import axios from 'axios';
import './PasswordReset.css';

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/reset-password', { email });
      alert('Password reset link sent to your email.');
    } catch (error) {
      alert('Failed to send password reset link.');
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-reset-card">
        <h2>Reset Password</h2>
        <form onSubmit={handlePasswordReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordReset;