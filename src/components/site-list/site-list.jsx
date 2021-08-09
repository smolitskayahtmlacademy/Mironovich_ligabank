import React from 'react';
import PropTypes from 'prop-types';

import styles from './site-list.module.scss';


function SiteList({ className }) {
  return (
    <ul className={`${styles.list} ${className}`}>
      <li className={styles.item}>
        <a href="/">Услуги</a>
      </li>
      <li className={styles.item}>
        <a href="/">Рассчитать кредит</a>
      </li>
      <li className={`${styles.item} ${styles.item_active}`}>
        <a href="/">Конвертер валют</a>
      </li>
      <li className={styles.item}>
        <a href="/">Контакты</a>
      </li>
      <li className={styles.item}>
        <a href="/">Задать вопрос</a>
      </li>
    </ul>
  );
}


SiteList.propTypes = {
  className: PropTypes.string,
};

export default SiteList;
