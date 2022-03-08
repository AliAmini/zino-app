import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.css';

const Nav: FC = () => {
  return (
    <div className={css.nav}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;