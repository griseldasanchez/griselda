import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.css';

const basename = '/griselda';

const Navbar = () => {
  return (
    <div id="header">
      <nav>
        <ul>
          <li>
            <Link to={`${basename}/`}>Home</Link>
          </li>
          <li>
            <Link to={`${basename}/food`}>Food</Link>
          </li>
          <li>
            <Link to={`${basename}/finance`}>Finance</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
