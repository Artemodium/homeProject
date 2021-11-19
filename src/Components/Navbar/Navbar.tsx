import React from 'react';
import './Navbar.css';
import SelectorContainer from './Selector/SelectorContainer';

function Navbar() {
  return (
    <div className="App-navbar">
        <div>
            <SelectorContainer />
        </div>
    </div>
  );
}

export default Navbar;
