import React from 'react';
import './Navbar.css';
import Selector from './Selector/Selector';
import SelectorContainer from './Selector/SelectorContainer';


function Navbar() {
  return (
    <div className="App-navbar">
        <h1>Navbar</h1>
        <div>
            <SelectorContainer />
        </div>
    </div>
  );
}

export default Navbar;
