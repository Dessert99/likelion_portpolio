import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header id="header">
      <div className="header__inner">
        <div className="header__logo">
          <a href="/">portfolio</a> <em>dessert99</em>
        </div>

        <nav className="header__nav">
          <ul>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <Link to={'/login'}>login</Link>
            </li>
            <li>
              <Link to={'/activites'}>activities </Link>
            </li>
            <li>
              <Link to={'/contact'}>contact </Link>
            </li>
            <li>
              <Link to={'/write'}>write </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
