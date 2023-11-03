import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const menuList = [
  { path: '/', text: 'Hello' },
  { path: '/', text: 'Portfolio' },
  { path: '/', text: 'Services' },
  { path: '/', text: 'Contact' },
];

const Navigation = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <Navbar className="navbar-container">
        <div className="nav-right">
          <Navbar.Toggle className="navbar-menu" onClick={toggleMenu}>
            <img src="/images/portfolio-icons/ic_menu.png" alt="Menu" />
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="hide-links">
              {menuList.map((link) => (
                <Nav.Link
                  as={NavLink}
                  to={link.path}
                  key={link.text}
                  className="nav-link"
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      {isMenuOpen && (
        <div className="overlay">
          <div className="overlay-content">
            <button type="button" className="close-menu" onClick={closeMenu}>
              <img src="/images/portfolio-icons/ic_close_menu.png" alt="Close" />
            </button>
            <div className="menu-layout">
              <div className="menu-numbers">
                <p>01</p>
                <p>02</p>
                <p>03</p>
                <p>04</p>
              </div>
              <div className="menu-list">
                {menuList.map((link) => (
                  <Nav.Link
                    as={NavLink}
                    to={link.path}
                    key={link.text}
                    onClick={closeMenu}
                    className="nav-link"
                  >
                    {link.text}
                  </Nav.Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
