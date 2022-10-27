import React, { useState } from 'react';
import MenuRoundedIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

import { logo } from '../assets';

import '../styles/Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState();
  return (
    <nav className="navbar__main">
      <div className="navbar__logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar__links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="navbar__social">
        <a href="https://twitter.com">
          <TwitterIcon className="navbar__social-icon" />
        </a>
        <div className="navbar__social-seperate" />
        <a href="https://instagram.com">
          <InstagramIcon className="navbar__social-icon" />
        </a>
      </div>
      <div className="navbar__smallscreen">
        <MenuRoundedIcon
          className="navbar__icon"
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="navbar__smallscreen-overlay flex__center">
            <div className="navbar__overlay_social-div">
              <a href="https://twitter.com">
                <TwitterIcon className="navbar__social-icon" />
              </a>
              <div className="navbar__overlay_social-line" />
              <a href="https://instagram.com">
                <InstagramIcon className="navbar__social-icon" />
              </a>
            </div>
            <CloseIcon
              className="navbar__smallscreen-icon"
              onClick={() => setToggleMenu(false)}
            />
            <div className="navbar__smallscreen-links">
              <Link to="/" onClick={() => setToggleMenu(false)}>
                Home
              </Link>
              <Link to="/about" onClick={() => setToggleMenu(false)}>
                About
              </Link>
              <Link to="/product" onClick={() => setToggleMenu(false)}>
                Product
              </Link>
              <Link to="/gallery" onClick={() => setToggleMenu(false)}>
                Gallery
              </Link>
              <Link to="/contact" onClick={() => setToggleMenu(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
