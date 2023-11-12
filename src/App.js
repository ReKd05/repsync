import React from 'react';
import './App.css';
import { IoMdMenu } from 'react-icons/io'; // Importing IoMdMenu icon from Ionicons
import { AiOutlinePlus } from 'react-icons/ai'; // Importing IoMdMenu icon from Ionicons

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src="./logos/logo.svg" className="App-logo" alt="logo" />
        <IoMdMenu className="Menu-icon" /> {/* Replaced FontAwesomeIcon with IoMdMenu */}
      </header>
      <h2 id='welcome-text'>Welcome</h2>
      <p id='box-header'>Dashboard</p>
      <div className="dashboard-box">
        <h2 id='box-message-big'>No saved records.</h2>
        <p id='box-message-small'>Why not add one?</p>
      </div>
      <div className="add-box">
        <AiOutlinePlus className="add-icon" /> {/* Replacing FontAwesomeIcon with IoMdMenu */}
      </div>
    </div>
  );
}

export default App;
