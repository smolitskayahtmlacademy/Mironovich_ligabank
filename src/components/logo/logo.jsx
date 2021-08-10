import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/img/logo.svg';

import styles from './logo.module.scss';


function Logo({ className }) {
  return (
    <a className={`${styles.logo} ${className}`} href="/" >
      <img
        src={logo} alt="Логотип Лига Банка"
        className={styles.image}
      />
    </a>
  );
}

Logo.propTypes = {
  className: PropTypes.string,
};


export default Logo;
