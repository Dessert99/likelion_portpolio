import React from 'react';

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
              <a href="#activities">activities</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
