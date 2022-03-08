import { EmptyText } from 'components/Typography';
import React, {FC} from 'react';
import { Link } from 'react-router-dom';
import css from './Nav.module.scss';

const Nav: FC = () => {
  return (
    <div className={css.nav}>
      <ul className={css.leftList}>
        <li className={css.logo}>
          {/* SEO friendly H1 logo */}
          <h1>
            <b>Zino</b>
            <sub>Technology Company</sub>
          </h1>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
      </ul>

      <ul className={css.rightList}>
        <li className={css.bold}>
          Hello, <EmptyText />
        </li>
      </ul>
    </div>
  );
}

export default Nav;