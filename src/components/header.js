import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import pic from '../images/planet.png';

const Header = () => {
  const navigation = [
    { id: 1, path: '/', name: 'Rockets' },
    { id: 2, path: '/Mission', name: 'Mission' },
    { id: 3, path: '/MyProfile', name: 'My profile' },
  ];
  return (
    <div>
      <header>
        <NavLink to="/">
          <img src={pic} alt="site logo" />
        </NavLink>
        <nav>
          <ul>
            {navigation.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  style={({ isActive }) => (isActive
                    ? {
                      textDecoration: 'underline',
                    }
                    : {})}
                  className="nav-link"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
