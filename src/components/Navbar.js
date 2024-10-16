import React, { useState } from 'react';

const Navbar = () => {
  // State to track whether the dropdown is open
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className='nav'>
      <div className='nav-logo'>TSSI</div>
      <button className="toggle" onClick={toggleDropdown}>
          {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
           <ul className='nav-menu'>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#digitization">Digitization</a></li>
            </ul>
      )}
    </div>
  );
};

export default Navbar;
