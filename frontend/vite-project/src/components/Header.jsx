import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1 className="logo">StreamNest</h1>
      <div className="search-container">
        <input type="text" placeholder="Search videos..." className="search-input" />
        <button className="upload-btn">Upload</button>
      </div>
    </header>
  );
};

export default Header;

