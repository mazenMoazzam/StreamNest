import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">StreamNest</h1>
      <input type="text" className="search" placeholder="Search videos..." />
      <button className="upload-btn">Upload</button>
    </header>
  );
}

export default Header;
