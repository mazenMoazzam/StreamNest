import React from 'react';
import Header from './components/Header.jsx';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <h2>Welcome to StreamNest</h2>
        <p>Search, upload, and enjoy videos.</p>
      </main>
    </div>
  );
}

export default App;
