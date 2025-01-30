import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false); // State for the menu toggle
  const [isSearchOpen, setSearchOpen] = useState(false); // State for the search box
  const [searchQuery, setSearchQuery] = useState(''); // State for the search query

  // Toggle the menu visibility
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Toggle the search box visibility
  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
  };

  // Handle search input change and perform highlighting
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Logic to highlight menu items that match the query
    const menuItems = document.querySelectorAll('.menu-items a');
    menuItems.forEach((item) => {
      const text = item.innerText.toLowerCase();
      if (query && text.includes(query.toLowerCase())) {
        item.style.backgroundColor = '#ffeb3b'; // Highlight matching text
      } else {
        item.style.backgroundColor = ''; // Reset non-matching items
      }
    });
  };

  // Close the menu when a link is clicked
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      {/* Main Header Section */}
      <div className="header-left">
        {/* Logo */}
        <a href="https://www.kkwagh.edu.in/engineering" target="_blank" rel="noopener noreferrer">
          <img
            src="https://www.kkwagh.edu.in/engineering/images/kk-wagh-logo.png"
            alt="K K Wagh Logo"
            className="logo"
          />
        </a>
        {/* Scrolling Text */}
        <div className="scroll-text">
          <span>Since 1984 || Autonomous Since 2022</span>
        </div>
      </div>

      {/* Right Section */}
      <div className="header-right">
        {/* Menu Items */}
        <ul className={`menu-items ${isMenuOpen ? 'show-menu' : ''}`}>
          <li><a href="/home" onClick={closeMenu}>Home</a></li>
          <li><a href="/Infrastructure" onClick={closeMenu}>Infrastructure</a></li>
          <li><a href="/departments" onClick={closeMenu}>Departments</a></li>
          <div className="top-links">
            <li>
              <a
                href="https://www.kkwagh.edu.in/engineering"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
                onClick={closeMenu}
              >
                Go To New Website Org.
              </a>
            </li>
            <li>
              <a
                href="https://oldengg.kkwagh.edu.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link"
                onClick={closeMenu}
              >
                Go To Old Website Org.
              </a>
            </li>
            <li>
              <a
                href="https://www.kkwagh.edu.in/pdf/KK-Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="highlight-link3"
                onClick={closeMenu}
              >
                Download Brochure
              </a>
            </li>
            <li><a href="/contact" className="highlight-link2" onClick={closeMenu}>Enquiry now</a></li>
            <li><a href="/Login" className="highlight-link2" onClick={closeMenu}>Hostel Login</a></li>
          </div>
        </ul>

        {/* Menu Toggle Button (for Mobile) */}
        <button className="menu-button" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Search Icon */}
        <button className="search-icon" onClick={toggleSearch}>
          🔍
        </button>

        {/* Search Box */}
        {isSearchOpen && (
          <div className="search-box">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="button" onClick={() => alert(`Searching for: ${searchQuery}`)}>
              Go
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
