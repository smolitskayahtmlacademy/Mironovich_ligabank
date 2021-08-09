import React from 'react';
import PropTypes from 'prop-types';

import styles from './social.module.scss';


function Social({ className }) {
  return (
    <ul className={`${styles.social} ${className}`}>
      <li className={styles.item}>
        <a href="/" className={`${styles.link} ${styles.facebook}`}><span className="visually-hidden">Мы в Фейсбуке</span></a>
      </li>
      <li className={styles.item}>
        <a href="/" className={`${styles.link} ${styles.instagram}`}><span className="visually-hidden">Мы в Инстаграме</span></a>
      </li>
      <li className={styles.item}>
        <a href="/" className={`${styles.link} ${styles.twitter}`}><span className="visually-hidden">Мы в Твиттере</span></a>
      </li>
      <li className={styles.item}>
        <a href="/" className={`${styles.link} ${styles.youtube}`}><span className="visually-hidden">Мы в Ютубе</span></a>
      </li>
    </ul>
  );
}


Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
