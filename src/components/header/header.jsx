import React from 'react';
import Logo from '../logo/logo';
import MainNav from '../main-nav/main-nav';

import styles from './header.module.scss';


function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo}/>
        <MainNav />
      </div>
    </header>
  );
}

export default Header;
