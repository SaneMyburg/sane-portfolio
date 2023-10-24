import React, { useState } from 'react';

const Navigation = () => {
  const menuList = ['Hello', 'Portfolio', 'Services', 'Contact'];

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar-container">
      <button type="button" className="navbar-menu" onClick={toggleMenu}>
        <img src="/images/portfolio-icons/ic_menu.png" alt="Menu" />
      </button>
      <div className={`menu-list ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          {menuList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
