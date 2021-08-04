import React from 'react';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';

import styles from './header.module.scss';


function Header() {
  return (
    <header className={styles.header}>
      <Logo className={styles.logo}/>
      <MainNav />
    </header>
  );
}

export default Header;
