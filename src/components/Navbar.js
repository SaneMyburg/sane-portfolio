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
    <div className="navbar-container">
      <Navbar className="navbar-content">
        <div className="nav-right">
          <div className="hamburger">
            <Navbar.Toggle className="navbar-menu" onClick={toggleMenu}>
              <img src="/images/portfolio-icons/ic_menu.png" alt="Menu" />
            </Navbar.Toggle>
          </div>
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
            <div className="line-start lines">
              <img src="/images/portfolio-icons/line.png" alt="Line" />
            </div>
            <div className="line-middle lines">
              <img src="/images/portfolio-icons/line.png" alt="Line" />
            </div>
            <div className="line-end lines">
              <img src="/images/portfolio-icons/line.png" alt="Line" />
            </div>
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
              <div className="small-ellipse">
                <img src="/images/portfolio-icons/small-ellipse.png" alt="Icon" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navigation;
