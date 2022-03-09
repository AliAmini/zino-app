import { EmptyText } from 'components/Typography';
import React, {FC, useMemo} from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import { clientSelector } from 'state/selectors';
import css from './Nav.module.scss';
import useActions from 'state/action-creators';

const Nav: FC = () => {
  const client = useSelector(clientSelector);
  const dispatch = useDispatch();

  const clientFullName = [client?.firstName, client?.lastName].join(' ').trim();

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
          Hello, {
            clientFullName?
              clientFullName
            :
              <EmptyText />
          }
        </li>
      </ul>
    </div>
  );
}

export default Nav;