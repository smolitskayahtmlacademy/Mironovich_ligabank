import React from 'react';
import PropTypes from 'prop-types';

import styles from './site-list.module.scss';


function SiteList({ className }) {
  return (
    <ul className={`${styles.siteList} ${className}`}>
      <li className={styles.siteListItem}>
        <a href="/">Услуги</a>
      </li>
      <li className={styles.siteListItem}>
        <a href="/">Рассчитать кредит</a>
      </li>
      <li className={`${styles.siteListItem} ${styles.siteListItemActive}`}>
        <a href="/">Конвертер валют</a>
      </li>
      <li className={styles.siteListItem}>
        <a href="/">Контакты</a>
      </li>
      <li className={styles.siteListItem}>
        <a href="/">Задать вопрос</a>
      </li>
    </ul>
  );
}


SiteList.propTypes = {
  className: PropTypes.string,
};

export default SiteList;
