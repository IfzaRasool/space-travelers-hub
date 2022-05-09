import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import pic from '../images/planet.png';

const Header = () => {
  const navigation = [
    { id: 1, path: '/', name: 'rockets' },
    { id: 2, path: '/Mission', name: 'mission' },
    { id: 3, path: '/MyProfile', name: 'My profile' },
  ];
  return (
    <div>
      <header>
        <img src={pic} alt="site logo" />
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
