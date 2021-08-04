import React from 'react';
import PropTypes from 'prop-types';

import styles from './social.module.scss';


function Social({ className }) {
  return (
    <ul className={`${styles.social} ${className}`}>
      <li className={styles.item}>
        <a href="#" className={`${styles.link} ${styles.linkFacebook}`}><span className="visuallyHidden">Мы в Фейсбуке</span></a>
      </li>
      <li className={styles.item}>
        <a href="#" className={`${styles.link} ${styles.linkInstagram}`}><span className="visuallyHidden">Мы в Инстаграме</span></a>
      </li>
      <li className={styles.item}>
        <a href="#" className={`${styles.link} ${styles.linkTwitter}`}><span className="visuallyHidden">Мы в Твиттере</span></a>
      </li>
      <li className={styles.item}>
        <a href="#" className={`${styles.link} ${styles.linkYoutube}`}><span className="visuallyHidden">Мы в Ютубе</span></a>
      </li>
    </ul>
  );
}


Social.propTypes = {
  className: PropTypes.string,
};

export default Social;
