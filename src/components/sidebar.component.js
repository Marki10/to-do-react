import React, { Component } from 'react';
import './sidebar.component.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="menu-list">Serach</div>

        <nav className="main-menu">
          <label>Main menu</label>
          <ul>
            <li>Menu</li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
