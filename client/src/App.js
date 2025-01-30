import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';  // Import Home.js
import Contact from './components/Contact';  // Import Contact.js
import SignUp from './components/SignUp';  // Import SignUp.js
import PasswordReset from './components/PasswordReset';  // Import PasswordReset.js
import Departments from './components/Departments';
import Infrastructure from './components/Infrastructure';
function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} /> {/* Home page route */}
            <Route path="/Home" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} /> {/* Sign Up route */}
            <Route path="/PasswordReset" element={<PasswordReset />} /> {/* Password Reset route */}
            <Route path="/Departments" element={<Departments/>} />
           <Route path="/Infrastructure" element={<Infrastructure/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
