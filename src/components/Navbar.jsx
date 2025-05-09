import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">Yunqing Zhao</Link>
      </div>
      <ul className="navbar__menu">
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => isActive ? 'active' : ''} end>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar; 