import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="left">
        <h1 className="logo">StreamNest</h1>
      </div>

      <div className="center">
        <input type="text" placeholder="Search videos..." className="search-input" />
        <button className="search-btn">Search</button>
      </div>

      <div className="right">
        <button className="upload-btn">Upload</button>
      </div>
    </header>
  );
};

export default Header;
