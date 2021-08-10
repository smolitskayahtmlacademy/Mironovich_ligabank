import React from 'react';
import SiteList from '../site-list/site-list';
import LoginLink from '../login-link/login-link';

import styles from './main-nav.module.scss';


function MainNav() {
  return (
    <nav className={styles.nav}>
      <SiteList className={styles.list}/>
      <LoginLink />
    </nav>
  );
}


export default MainNav;
