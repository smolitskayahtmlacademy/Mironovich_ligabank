import React from 'react';
import SiteList from '../site-list/site-list';
import LoginLink from '../login-link/login-link';

import styles from './main-nav.module.scss';


function MainNav() {
  return (
    <nav className={styles.mainNav}>
      <SiteList className={styles.siteList}/>
      <LoginLink />
    </nav>
  );
}

export default MainNav;
