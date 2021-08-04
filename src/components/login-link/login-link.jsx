import React from 'react';
import {Link} from 'react-router-dom';

import styles from './login-link.module.scss';


function LoginLink() {
  return (
    <Link className={styles.login} to='/'>Войти в интернет банк</Link>
  );
}

export default LoginLink;
