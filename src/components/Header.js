import React from 'react';
import './Header.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Header = () => {
  return (
    <header className="header">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="user-info">
        <i className="fas fa-envelope"></i>
        <i className="fas fa-bell"></i>
        <img src="profile.png" alt="profile" />
      </div>
    </header>
  );
};

export default Header;
