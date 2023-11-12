import React, { useState } from 'react';
import './App.css';
import { IoMdMenu } from 'react-icons/io';
import { AiOutlinePlus } from 'react-icons/ai';
import { BiSolidDashboard } from 'react-icons/bi';
import { ReactComponent as Logo } from './logos/logo.svg';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Logo className="App-logo" />
        <IoMdMenu className="Menu-icon" onClick={toggleMenu} />
      </header>
      <p id='box-header'><BiSolidDashboard className="icon" /> Dashboard</p>
      <div className="dashboard-box">
        <h2 id='box-message-big'>No saved records.</h2>
        <p id='box-message-small'>Why not add one?</p>
      </div>
      <div className="add-box">
        <AiOutlinePlus className="add-icon" />
      </div>

      {isMenuOpen && (
        <div className="side-menu">
          <button onClick={toggleMenu}>Close</button>
          <button>Button 1</button>
          <button>Button 2</button>
          <button>Button 3</button>
        </div>
      )}
    </div>
  );
}

export default App;
