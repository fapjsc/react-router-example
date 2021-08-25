import classes from './MainNavigation.module.css';

import { NavLink, useLocation } from 'react-router-dom';

const MainNavigation = () => {
  const location = useLocation();

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/quotes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink to="/new-quote" activeClassName={classes.active}>
              Add Quotes
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
