import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const Navbar = () => {
  return (
    <div id="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/food">Food</Link>
          </li>
          <li>
            <Link to="/finance">Finance</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
