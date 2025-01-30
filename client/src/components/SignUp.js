import React, { useState } from 'react';
import './SignUp.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const SignUp = () => {
  const [userData, setUserData] = useState({
    role: 'student',
    name: '',
    mobile: '',
    email: '',
    uniqueId: '',
    country: '',
    dob: '',  // Removed state and town
  });

  const [role, setRole] = useState('student');
  const navigate = useNavigate();  // Initialize useNavigate

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    alert('Sign-up successful!');
  };

  const handleCancel = () => {
    navigate('/login');  // Navigate to login page when cancel is clicked
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <form className="signup-form" onSubmit={handleSignUp}>
          <h2>Sign Up</h2>

          {/* Login As Role Selection */}
          <div className="login-as-container">
            <label htmlFor="login-as" className="login-as-label">Login As:-</label>
            <div className="login-toggle">
              <span
                className={`toggle-option ${role === 'teacher' ? 'active' : ''}`}
                onClick={() => setRole('teacher')}
              >
                Teacher
              </span>
              <div
                className={`toggle-switch ${role === 'teacher' ? 'teacher' : 'student'}`}
              ></div>
              <span
                className={`toggle-option ${role === 'student' ? 'active' : ''}`}
                onClick={() => setRole('student')}
              >
                Student
              </span>
            </div>
          </div>

          {/* Table Layout */}
          <table className="signup-table">
            <tbody>
              <tr>
                <td><label htmlFor="name">Full Name:</label></td>
                <td><input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={userData.name}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="mobile">Mobile with Country Code:</label></td>
                <td><input
                  type="text"
                  name="mobile"
                  placeholder="Mobile with Country Code"
                  value={userData.mobile}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="email">Email:</label></td>
                <td><input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="uniqueId">Unique Identification Number:</label></td>
                <td><input
                  type="text"
                  name="uniqueId"
                  placeholder="Unique Identification Number"
                  value={userData.uniqueId}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="country">Country:</label></td>
                <td><input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={userData.country}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
              <tr>
                <td><label htmlFor="dob">Date of Birth:</label></td>
                <td><input
                  type="date"
                  name="dob"
                  value={userData.dob}
                  onChange={handleChange}
                  required
                /></td>
              </tr>
            </tbody>
          </table>

          {/* Buttons Container */}
          <div className="buttons-container">
            <button type="submit">Sign Up</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
